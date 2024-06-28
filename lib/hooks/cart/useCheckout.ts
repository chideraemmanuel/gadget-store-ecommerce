import { useToast } from '@/components/ui/use-toast';
import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
import { BillingAddressTypes, OrderItemTypes, OrderTypes } from '@/types';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from 'react-query';

interface Params {
  order_items: OrderItemTypes[];
  billing_address: BillingAddressTypes;
}

const checkout = async ({ order_items, billing_address }: Params) => {
  const response = await axios.post<OrderTypes>('/user/place-order', {
    order_items,
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
