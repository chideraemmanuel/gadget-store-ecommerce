import { useToast } from '@/components/ui/use-toast';
import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
import {
  BillingAddressTypes,
  CartReturnTypes,
  OrderItemTypes,
  OrderTypes,
} from '@/types';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from 'react-query';

interface Params {
  order_items: OrderItemTypes[];
  billing_address: BillingAddressTypes;
}

const checkout = async ({ order_items, billing_address }: Params) => {
  const filteredOrderItems = order_items.map((order_item) => {
    return { product: order_item.product._id, quantity: order_item.quantity };
  });

  const response = await axios.post<OrderTypes>('/user/place-order', {
    order_items: filteredOrderItems,
    billing_address,
  });

  console.log('response from checkout hook', response);

  return response.data;
};

const useCheckout = () => {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['checkout'],
    mutationFn: checkout,
    onSuccess: (data) => {
      queryClient.invalidateQueries(SERVER_QUERY_KEYS['get-user-orders']);
      queryClient.invalidateQueries(SERVER_QUERY_KEYS['get-user-cart']);

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

      toast({
        description: 'Order Placed Successfully!',
      });

      router.replace('/orders');
    },
    onError: (error: any) => {
      toast({
        description: `${
          error?.response?.data?.error ||
          error?.message ||
          'Checkout failed - Something went wrong'
        }`,
        variant: 'destructive',
      });
    },
  });
};

export default useCheckout;
