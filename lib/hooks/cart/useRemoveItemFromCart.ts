import axios from '@/config/axios';
import { CartReturnTypes, ProductTypes } from '@/types';
import { useMutation, useQueryClient } from 'react-query';

// const removeItemFromCart = async (productId: string) => {
const removeItemFromCart = async (product: ProductTypes) => {
  const response = await axios.put<CartReturnTypes>('/cart/remove', {
    product: product._id,
  });

  console.log('response from remove item from cart hook', response);

  return response.data;
};

const useRemoveItemFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['remove item from cart'],
    mutationFn: removeItemFromCart,
    onMutate: async (removedItem) => {
      console.log('removedItem', removedItem);

      //  CANCEL QUERIES TO AVOID CONFLICT
      await queryClient.cancelQueries('get user cart');

      // GET PREVIOUS QUERY DATA (TO BE RETURNED IN CASE OF AN ERROR)
      const oldCartData = queryClient.getQueryData('get user cart');

      console.log('oldCartData', oldCartData);

      // SET QUERY DATA ONCE MUTATION IS INITIATED
      queryClient.setQueryData(
        'get user cart',
        // @ts-ignore
        (oldCartData: CartReturnTypes) => {
          console.log('oldCartData from set query data callback', oldCartData);

          const filteredCartItems = oldCartData.cart_items.filter(
            (cartItem) => cartItem.product._id !== removedItem._id
          );

          console.log('filteredCartItems', filteredCartItems);

          return {
            ...oldCartData, // user: ...oldCartData.user (would also work)
            cart_items: [...filteredCartItems],
          };
        }
      );

      return { oldCartData };
    },
    onError: (_error, _removedItem, context) => {
      // ON ERROR, SET QUERY DATA TO THE PREVIOUS DATA (RETURNED FRO, ONMUTATE CALLBACK)
      queryClient.setQueryData('get user cart', context?.oldCartData);
    },
    onSettled: () => {
      // INVALIDATE USER CART QUERY WHETHER MUTATION IS SUCCESSFUL OR NOT
      queryClient.invalidateQueries('get user cart');
    },
  });
};

export default useRemoveItemFromCart;
