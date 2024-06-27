import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
import { CartReturnTypes, ProductTypes } from '@/types';
import { useMutation, useQueryClient } from 'react-query';

// const incrementItemQuantity = async (productId: string) => {
const incrementItemQuantity = async (product: ProductTypes) => {
  const response = await axios.put<CartReturnTypes>('/cart/increment', {
    product: product._id,
  });

  console.log('response from increment item quantity hook', response);

  return response.data;
};

const useIncrementItemQuantity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['increment item quantity'],
    mutationFn: incrementItemQuantity,
    onMutate: async (incrementedItem) => {
      console.log('incrementedItem', incrementedItem);

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

          const previousQuantity = oldCartData.cart_items.find(
            (cartItem) => cartItem.product._id === incrementedItem._id
          )?.quantity;

          console.log('previousQuantity', previousQuantity);

          const filteredCartItems = oldCartData.cart_items.filter(
            (cartItem) => cartItem.product._id !== incrementedItem._id
          );

          console.log('filteredCartItems', filteredCartItems);

          return {
            ...oldCartData, // user: ...oldCartData.user (would also work)
            cart_items: [
              // ...oldCartData.cart_items,
              // {
              //   product: { ...incrementedItem },
              //   quantity: previousQuantity ? previousQuantity + 1 : 1,
              // },
              ...filteredCartItems,
              {
                product: { ...incrementedItem },
                quantity: previousQuantity ? previousQuantity + 1 : 1,
              },
            ],
          };
        }
      );

      return { oldCartData };
    },
    onError: (_error, _incrementedItem, context) => {
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

export default useIncrementItemQuantity;
