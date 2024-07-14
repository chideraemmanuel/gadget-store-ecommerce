import axios from '@/config/axios';
import { ProductsReturnTypes, ProductTypes, SearchParams } from '@/types';
import { useQuery } from 'react-query';
import createSearchParams from '../helpers/createSearchParam';
import { SERVER_QUERY_KEYS } from '@/constants';

const getRandomProducts = async ({ queryKey }: { queryKey: any[] }) => {
  const filter = queryKey[1];

  console.log('query key', queryKey);
  console.log('filter', filter);

  const params = createSearchParams(filter);

  console.log('params', params);

  const response = await axios.get<ProductTypes[]>(
    `/products/random?${params}`
  );

  console.log('response data', response.data);

  return response.data;
};

const useGetRandomProducts = (filter: SearchParams) => {
  return useQuery({
    queryKey: [SERVER_QUERY_KEYS['get-random-products'], filter],
    queryFn: getRandomProducts,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetRandomProducts;
