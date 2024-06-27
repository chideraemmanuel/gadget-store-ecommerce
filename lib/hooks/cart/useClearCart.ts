import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
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
      await queryClient.cancelQueries(SERVER_QUERY_KEYS['get-user-cart']);

      const oldCartData = queryClient.getQueryData(
        SERVER_QUERY_KEYS['get-user-cart']
      );

      queryClient.setQueryData(
        SERVER_QUERY_KEYS['get-user-cart'],
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
      queryClient.setQueryData(
        SERVER_QUERY_KEYS['get-user-cart'],
        context?.oldCartData
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(SERVER_QUERY_KEYS['get-user-cart']);
    },
  });
};

export default useClearCart;
