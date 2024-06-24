import axios from '@/config/axios';
import { ProductTypes } from '@/types';
import { useQuery } from 'react-query';

const getProductById = async ({ queryKey }: { queryKey: any[] }) => {
  console.log('query keys', queryKey);

  const productId = queryKey[1];

  console.log('passed product id', productId);

  const response = await axios.get<ProductTypes>(`/products/${productId}`);

  console.log('response from get product by id hook', response);

  return response.data;
};

const useGetProductById = (productId: string) => {
  return useQuery({
    queryKey: ['get product by id', productId],
    queryFn: getProductById,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetProductById;
