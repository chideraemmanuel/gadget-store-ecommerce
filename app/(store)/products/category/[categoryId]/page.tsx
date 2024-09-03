'use client';

import CategoryPageSkeleton from '@/components/CategoryPageSkeleton';
import { Skeleton } from '@/components/ui/skeleton';
import CategoryPageHero from '@/containers/category-page-hero/CategoryPageHero';
import CategoryPageProducts from '@/containers/category-page-products/CategoryPageProducts';
import GlobalError from '@/components/error/GlobalError';
import GlobalNetworkError from '@/components/network-error/GlobalNetworkError';
import GlobalServerError from '@/components/server-error/GlobalServerError';
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

  // useEffect(() => {
  //   if (errorFetchingProducts || errorFetchingCategory || errorFetchingBrands) {
  //     // WILL BE CAUGHT BY ERROR.TSX IN SEGMENT
  //     const error =
  //       errorFetchingCategory || errorFetchingProducts || errorFetchingBrands;

  //     throw new Error(
  //       // @ts-ignore
  //       error?.response?.data?.error ||
  //         // @ts-ignore
  //         error?.message ||
  //         'An error occured'
  //     );
  //   }
  // }, [errorFetchingCategory, errorFetchingProducts, errorFetchingBrands]);

  const error =
    errorFetchingProducts || errorFetchingCategory || errorFetchingBrands;

  // @ts-ignore
  if (error?.message === 'Network Error') {
    console.log('network error');
    return <GlobalNetworkError />;
  }

  if (
    // @ts-ignore
    error?.response?.data?.error === 'Internal Server Error' ||
    // @ts-ignore
    error?.response?.status === 500
  ) {
    console.log('server error');
    return <GlobalServerError />;
  }

  if (error) {
    // @ts-ignore
    return <GlobalError message={error?.message} />;
  }

  return (
    <>
      {/* banner skeleton */}
      {/* {isFetchingCategory && <Skeleton className="h-[50vh] w-full" />} */}

      {/* {(isFetchingProducts || isFetchingBrands) && <CategoryPageSkeleton />} */}

      {/* {category && ( */}
      <CategoryPageHero
        category={category}
        isFetchingCategory={isFetchingCategory}
        // isError={isErrorFetchingCategory}
        // error={errorFetchingCategory}
      />
      {/* )} */}

      {/* {category && ( */}
      <>
        <CategoryPageProducts
          isFetchingProducts={isFetchingProducts}
          products={products}
          isFetchingCategory={isFetchingCategory}
          category={category}
          isFetchingFilters={isFetchingBrands}
          filters={[
            {
              label: 'Brands',
              filterItems: brands,
              searchParamKey: 'brand',
            },
          ]}
        />
      </>
      {/* )} */}
    </>
  );
};

export default CategoryPage;
