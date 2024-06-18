import { CategoryTypes, SearchParams } from '@/types';
import { useQuery } from 'react-query';
import createSearchParams from '../helpers/createSearchParam';
import axios from '@/config/axios';

// const getCategories = async ({ queryKey: [_, searchParamsObject] }: { queryKey: any[]}) => {
const getCategories = async () => {
  // const searchParamsObject = queryKey[1]
  // console.log('queryKey', queryKey);

  //   console.log('searchParamsObject', searchParamsObject);

  //     const params = createSearchParams(searchParamsObject)

  //     params.delete('search_query')
  //     params.delete('paginated')

  //     console.log('params', params)

  //     const response = await axios.get(`/categories?${params}`)

  const response = await axios.get<CategoryTypes[]>(`/categories`);

  console.log('response from get categories hook:', response);

  return response.data;
};

// const useGetCategories = (searchParamsObject: SearchParams = {}) => {
const useGetCategories = () => {
  return useQuery({
    // queryKey: ['get categories', searchParamsObject],
    queryKey: ['get categories'],
    queryFn: getCategories,
    // retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetCategories;
