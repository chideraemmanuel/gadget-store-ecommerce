import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
import { OrderReturnTypes } from '@/types';
import { useQuery } from 'react-query';

const getUserOrders = async () => {
  const response = await axios.get<OrderReturnTypes>('/user/orders');

  console.log('response from get user orders hook', response);

  return response.data;
};

const useGetUserOrders = () => {
  return useQuery({
    queryKey: SERVER_QUERY_KEYS['get-user-orders'],
    queryFn: getUserOrders,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetUserOrders;
