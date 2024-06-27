import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
import { CartReturnTypes, ProductTypes } from '@/types';
import { useMutation, useQueryClient } from 'react-query';

// const addItemToCart = async (productId: string) => {
const addItemToCart = async (product: ProductTypes) => {
  const response = await axios.put<CartReturnTypes>('/cart/add', {
    product: product._id,
  });

  console.log('response from add item to cart hook', response);

  return response.data;
};

const useAddItemToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['add item to cart'],
    mutationFn: addItemToCart,
    onMutate: async (addedItem) => {
      console.log('addedItem', addedItem);

      //  CANCEL QUERIES TO AVOID CONFLICT
      await queryClient.cancelQueries(SERVER_QUERY_KEYS['get-user-cart']);

      // GET PREVIOUS QUERY DATA (TO BE RETURNED IN CASE OF AN ERROR)
      const oldCartData = queryClient.getQueryData(
        SERVER_QUERY_KEYS['get-user-cart']
      );

      console.log('oldCartData', oldCartData);

      // SET QUERY DATA ONCE MUTATION IS INITIATED
      queryClient.setQueryData(
        SERVER_QUERY_KEYS['get-user-cart'],
        // @ts-ignore
        (oldCartData: CartReturnTypes) => {
          console.log('oldCartData from set query data callback', oldCartData);

          return {
            ...oldCartData, // user: ...oldCartData.user (would also work)
            cart_items: [
              ...oldCartData.cart_items,
              // {  ...addedItem, quantity: 1 },
              { product: { ...addedItem }, quantity: 1 },
            ],
          };
        }
      );

      return { oldCartData };
    },
    onError: (_error, _addedItem, context) => {
      // ON ERROR, SET QUERY DATA TO THE PREVIOUS DATA (RETURNED FRO, ONMUTATE CALLBACK)
      queryClient.setQueryData(
        SERVER_QUERY_KEYS['get-user-cart'],
        context?.oldCartData
      );
    },
    onSettled: () => {
      // INVALIDATE USER CART QUERY WHETHER MUTATION IS SUCCESSFUL OR NOT
      queryClient.invalidateQueries(SERVER_QUERY_KEYS['get-user-cart']);
    },
  });
};

export default useAddItemToCart;
