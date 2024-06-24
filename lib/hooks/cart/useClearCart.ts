import axios from '@/config/axios';
import { CartReturnTypes } from '@/types';
import { useMutation, useQueryClient } from 'react-query';

const clearCart = async () => {
  const response = await axios.put('/cart/clear');

  console.log('response from clear cart hook', response);

  return response.data;
};

const useClearCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['clear cart'],
    mutationFn: clearCart,
    onMutate: async () => {
      await queryClient.cancelQueries('get user cart');

      const oldCartData = queryClient.getQueryData('get user cart');

      queryClient.setQueryData(
        'get user cart',
        // @ts-ignore
        (oldCartData: CartReturnTypes) => {
          return {
            ...oldCartData, // user: ...oldCartData.user (would also work)
            cart_items: [],
          };
        }
      );

      return { oldCartData };
    },
    onError: (_error, _, context) => {
      queryClient.setQueryData('get user cart', context?.oldCartData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('get user cart');
    },
  });
};

export default useClearCart;
