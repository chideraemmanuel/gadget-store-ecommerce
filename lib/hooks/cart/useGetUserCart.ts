import axios from '@/config/axios';
import { CartReturnTypes } from '@/types';
import { useQuery } from 'react-query';

const getUserCart = async () => {
  const response = await axios.get<CartReturnTypes>('/cart');

  console.log('response from get user cart hook', response);

  return response.data;
};

const useGetUserCart = () => {
  return useQuery({
    queryKey: ['get user cart'],
    queryFn: getUserCart,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetUserCart;
