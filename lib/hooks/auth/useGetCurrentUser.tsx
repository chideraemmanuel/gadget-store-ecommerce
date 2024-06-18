import axios from '@/config/axios';
import { AuthReturnTypes } from '@/types';
import { useQuery } from 'react-query';

const getCurrentUser = async () => {
  const response = await axios.get<AuthReturnTypes>('/user');

  console.log('response from get current user hook', response);

  return response.data;
};

const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['get current user'],
    queryFn: getCurrentUser,
    retry: false,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false
  });
};

export default useGetCurrentUser;
