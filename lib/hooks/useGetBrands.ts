import axios from '@/config/axios';
import { BrandTypes } from '@/types';
import { useQuery } from 'react-query';

const getBrands = async () => {
  const response = await axios.get<BrandTypes[]>('/brands');

  console.log('response from get brands hook:', response);

  return response.data;
};

const useGetBrands = () => {
  return useQuery({
    queryKey: ['get brands'],
    queryFn: getBrands,
    retry: false,
  });
};

export default useGetBrands;
