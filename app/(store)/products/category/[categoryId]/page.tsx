'use client';

import CategoryPageSkeleton from '@/components/CategoryPageSkeleton';
import CategoryPageHero from '@/containers/category-page-hero/CategoryPageHero';
import CategoryPageProducts from '@/containers/category-page-products/CategoryPageProducts';
import useGetBrands from '@/lib/hooks/useGetBrands';
import useGetCategoryById from '@/lib/hooks/useGetCategoryById';
import useGetProducts from '@/lib/hooks/useGetProducts';
import { SearchParams } from '@/types';
import { FC, useEffect } from 'react';

interface Props {
  params: {
    categoryId: string;
  };
  searchParams: SearchParams;
}

const CategoryPage: FC<Props> = ({ params: { categoryId }, searchParams }) => {
  const {
    data: category,
    isLoading: isFetchingCategory,
    isError: isErrorFetchingCategory,
    error: errorFetchingCategory,
  } = useGetCategoryById(categoryId);

  const {
    data: products,
    isLoading: isFetchingProducts,
    isError: isErrorFetchingProducts,
    error: errorFetchingProducts,
  } = useGetProducts({
    ...searchParams,
    category: categoryId,
  });

  const {
    data: brands,
    isLoading: isFetchingBrands,
    isError: isErrorFetchingBrands,
    error: errorFetchingBrands,
  } = useGetBrands();

  useEffect(() => {
    if (errorFetchingProducts || errorFetchingCategory || errorFetchingBrands) {
      // WILL BE CAUGHT BY ERROR.TSX IN SEGMENT
      const error =
        errorFetchingCategory || errorFetchingProducts || errorFetchingBrands;

      throw new Error(
        // @ts-ignore
        error?.response?.data?.error ||
          // @ts-ignore
          error?.message ||
          'An error occured'
      );
    }
  }, [errorFetchingCategory, errorFetchingProducts, errorFetchingBrands]);

  return (
    <>
      {(isFetchingCategory || isFetchingProducts || isFetchingBrands) && (
        <CategoryPageSkeleton />
      )}

      {category && products && brands && (
        <>
          <CategoryPageHero
            category={category}
            // isLoading={isFetchingCategory}
            // isError={isErrorFetchingCategory}
            // error={errorFetchingCategory}
          />
          <CategoryPageProducts
            products={products}
            filters={[
              {
                label: 'Brands',
                filterItems: brands,
                searchParamKey: 'brand',
              },
            ]}
            categoryName={category.name}
          />
        </>
      )}
    </>
  );
};

export default CategoryPage;
