import axios from '@/config/axios';
import { CartReturnTypes } from '@/types';
import { useQuery } from 'react-query';

const getCurrentUserCart = async () => {
  const response = await axios.get<CartReturnTypes>('/cart');

  console.log('response from get current user cart', response);

  return response.data;
};

const useGetCurrentUserCart = () => {
  return useQuery({
    queryKey: ['get current user cart'],
    queryFn: getCurrentUserCart,
    retry: false,
  });
};

export default useGetCurrentUserCart;
