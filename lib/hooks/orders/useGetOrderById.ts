import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
import { OrderTypes } from '@/types';
import { useQuery } from 'react-query';

const getOrderById = async ({ queryKey }: { queryKey: any[] }) => {
  console.log('query keys', queryKey);

  const orderId = queryKey[1];

  console.log('passed product id', orderId);

  const response = await axios.get<OrderTypes>(`/user/orders/${orderId}`);

  console.log('response from get orders by id hook', response);

  return response.data;
};

const useGetOrderById = (orderId: string) => {
  return useQuery({
    queryKey: [SERVER_QUERY_KEYS['get-user-order-by-id'], orderId],
    queryFn: getOrderById,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetOrderById;
