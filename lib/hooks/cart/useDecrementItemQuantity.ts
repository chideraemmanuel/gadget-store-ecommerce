import axios from '@/config/axios';
import { CartReturnTypes, ProductTypes } from '@/types';
import { useMutation, useQueryClient } from 'react-query';

// const decrementItemQuantity = async (productId: string) => {
const decrementItemQuantity = async (product: ProductTypes) => {
  const response = await axios.put('/cart/decrement', { product: product._id });

  console.log('response from decrement item quantity hook', response);

  return response.data;
};

const useDecrementItemQuantity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['decrement item quantity'],
    mutationFn: decrementItemQuantity,
    onMutate: async (decrementedItem) => {
      console.log('decrementedItem', decrementedItem);

      //  CANCEL QUERIES TO AVOID CONFLICT
      await queryClient.cancelQueries('get user cart');

      // GET PREVIOUS QUERY DATA (TO BE RETURNED IN CASE OF AN ERROR)
      const oldCartData = queryClient.getQueryData('get user cart');

      console.log('oldCartData', oldCartData);

      // SET QUERY DATA ONCE MUTATION IS INITIATED
      queryClient.setQueryData(
        'get user cart',
        (oldCartData: CartReturnTypes) => {
          console.log('oldCartData from set query data callback', oldCartData);

          const previousQuantity = oldCartData.cart_items.find(
            (cartItem) => cartItem.product._id === decrementedItem._id
          )?.quantity;

          console.log('previousQuantity', previousQuantity);

          const filteredCartItems = oldCartData.cart_items.filter(
            (cartItem) => cartItem.product._id !== decrementedItem._id
          );

          console.log('filteredCartItems', filteredCartItems);

          return {
            ...oldCartData,
            cart_items: [
              // ...oldCartData.cart_items,
              // {
              //   product: { ...decrementedItem },
              //   quantity: previousQuantity ? previousQuantity - 1 : 1,
              // },
              ...filteredCartItems,
              {
                product: { ...decrementedItem },
                quantity: previousQuantity ? previousQuantity - 1 : 1,
              },
            ],
          };
        }
      );

      return { oldCartData };
    },
    onError: (_error, _decrementedItem, context) => {
      // ON ERROR, SET QUERY DATA TO THE PREVIOUS DATA (RETURNED FRO, ONMUTATE CALLBACK)
      queryClient.setQueryData('get user cart', context?.oldCartData);
    },
    onSettled: () => {
      // INVALIDATE USER CART QUERY WHETHER MUTATION IS SUCCESSFUL OR NOT
      queryClient.invalidateQueries('get user cart');
    },
  });
};

export default useDecrementItemQuantity;
