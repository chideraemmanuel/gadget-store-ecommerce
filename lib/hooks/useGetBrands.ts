import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
import { BrandTypes } from '@/types';
import { useQuery } from 'react-query';

const getBrands = async () => {
  const response = await axios.get<BrandTypes[]>('/brands');

  console.log('response from get brands hook:', response);

  return response.data;
};

const useGetBrands = () => {
  return useQuery({
    queryKey: [SERVER_QUERY_KEYS['get-brands']],
    queryFn: getBrands,
    // retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetBrands;
