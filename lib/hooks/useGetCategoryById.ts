import axios from '@/config/axios';
import { CategoryTypes } from '@/types';
import { useQuery } from 'react-query';

const getCategoryById = async ({ queryKey }: { queryKey: any[] }) => {
  console.log('query keys', queryKey);

  const categoryId = queryKey[1];

  console.log('passed category id', categoryId);

  const response = await axios.get<CategoryTypes>(`/categories/${categoryId}`);

  console.log('response from get category by id hook', response);

  return response.data;
};

const useGetCategoryById = (categoryId: string) => {
  return useQuery({
    queryKey: ['get category by id', categoryId],
    queryFn: getCategoryById,
    retry: false,
  });
};

export default useGetCategoryById;
