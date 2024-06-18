import { ProductsReturnTypes, SearchParams } from '@/types';
import { useQuery } from 'react-query';
import createSearchParams from '../helpers/createSearchParam';
import axios from '@/config/axios';

const getProducts = async ({ queryKey }: { queryKey: any[] }) => {
  const searchParamsObject = queryKey[1];

  console.log('query key', queryKey);
  console.log('searchParamsObject', searchParamsObject);

  const params = createSearchParams(searchParamsObject);

  console.log('params', params);

  const response = await axios.get<ProductsReturnTypes>(`/products?${params}`);

  console.log('response data', response.data);

  return response.data;
};

const useGetProducts = (searchParamsObject: SearchParams = {}) => {
  return useQuery({
    queryKey: ['get products', searchParamsObject],
    queryFn: getProducts,
    retry: false,
  });
};

export default useGetProducts;
