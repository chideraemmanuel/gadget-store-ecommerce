import axios from '@/config/axios';
import { BillboardTypes } from '@/types';
import { useQuery } from 'react-query';

const getHomeBillboard = async () => {
  const response = await axios.get<BillboardTypes[]>(
    '/billboards?search_query=home'
  );

  console.log('response from get home billboard hook:', response);

  return response.data;
};

const useGetHomeBillboard = () => {
  return useQuery({
    queryKey: ['get home billboard'],
    queryFn: getHomeBillboard,
    retry: false,
  });
};

export default useGetHomeBillboard;
