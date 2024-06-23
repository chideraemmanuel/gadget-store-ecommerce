'use client';

import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { Separator } from '@/components/ui/separator';
import { FC, useEffect } from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Drawer, DrawerTrigger, DrawerContent } from '@/components/ui/drawer';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Bold, FilterIcon, Italic, Underline } from 'lucide-react';
import Filter from '@/components/Filter';
import ProductsPagination from '@/components/ProductsPagination';
import { Button } from '@/components/ui/button';
import ProductsPagination2 from '@/components/ProductsPagination2';
import useGetCategories from '@/lib/hooks/useGetCategories';
import useGetBrands from '@/lib/hooks/useGetBrands';
import useGetProducts from '@/lib/hooks/useGetProducts';
import { Skeleton } from '@/components/ui/skeleton';
import { SearchParams } from '@/types';
import ProductsFilters from '@/components/ProductsFilters';

interface Props {
  searchParams: SearchParams;
}

const array = [1, 2, 3, 4, 5, 6];

const ProductsPage: FC<Props> = ({ searchParams }) => {
  const {
    data: products,
    isLoading: isFetchingproducts,
    isError: isErrorFetchingProducts,
    error: errorFetchingProducts,
  } = useGetProducts(searchParams);

  const {
    data: categories,
    isLoading: isFetchingCategories,
    isError: isErrorFetchingCategories,
    error: errorFetchingCategories,
  } = useGetCategories();

  const {
    data: brands,
    isLoading: isFetchingBrands,
    isError: isErrorFetchingBrands,
    error: errorFetchingBrands,
  } = useGetBrands();

  useEffect(() => {
    if (
      isErrorFetchingProducts ||
      isErrorFetchingCategories ||
      isErrorFetchingBrands
    ) {
      const error =
        errorFetchingProducts || errorFetchingCategories || errorFetchingBrands;

      throw new Error(
        // @ts-ignore
        error?.message?.data?.error ||
          // @ts-ignore
          error?.message ||
          'An error occured while loading page'
      );
    }
  }, [
    isErrorFetchingProducts,
    isErrorFetchingCategories,
    isErrorFetchingBrands,
  ]);

  return (
    <section className="">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr,_5fr] pt-7">
        <aside className="self-start sticky md:top-20 hidden md:flex md:flex-col md:gap-3 max-h-[80vh]">
          {(isFetchingCategories || isFetchingBrands) && (
            // <div className="flex items-center justify-center">
            //   <span className="text-muted-foreground">Loading filters...</span>
            // </div>
            <>
              {/* filter header */}
              <Skeleton className="w-20 h-7 mb-2" />

              {/* toggle group */}
              <div className="flex items-center justify-start flex-wrap gap-1">
                <Skeleton className="w-16 h-7 rounded-full" />
                <Skeleton className="w-16 h-7 rounded-full" />
                <Skeleton className="w-16 h-7 rounded-full" />
              </div>
            </>
          )}

          {/* {(isErrorFetchingCategories || isErrorFetchingBrands) && (
            <div className="flex items-center justify-center">
              <span className="text-muted-foreground">
                An error occured while loading filters
              </span>
            </div>
          )} */}

          {categories && brands && (
            <ProductsFilters
              filters={[
                {
                  label: 'Categories',
                  filterItems: categories,
                  searchParamKey: 'category',
                },
                {
                  label: 'Brands',
                  filterItems: brands,
                  searchParamKey: 'brand',
                },
              ]}
            />
          )}
          {/* <Filter
              label="Categories"
              filterItems={categories}
              searchParamKey="category"
            />
            <Filter
              label="Brands"
              filterItems={brands}
              searchParamKey="brand"
            /> */}
        </aside>

        <div className="px-0 md:px-2 md:border-l">
          <div className="flex items-start justify-between">
            <SectionHeader>Products</SectionHeader>

            {/* show drawer only on mobile */}
            <Drawer>
              <DrawerTrigger asChild className="inline-block md:hidden">
                <Button variant={'outline'} className="flex items-center gap-1">
                  <FilterIcon className="w-1/2" />
                  <span>Filter</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                {(isFetchingCategories || isFetchingBrands) && (
                  <div className="p-5 flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Loading filters...
                    </span>
                  </div>
                )}

                <div className="p-5 flex flex-col gap-3 min-h-[40vh] max-h-[80vh]">
                  {categories && brands && (
                    <ProductsFilters
                      filters={[
                        {
                          label: 'Categories',
                          filterItems: categories,
                          searchParamKey: 'category',
                        },
                        {
                          label: 'Brands',
                          filterItems: brands,
                          searchParamKey: 'brand',
                        },
                      ]}
                    />
                  )}
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-7">
            {isFetchingproducts &&
              array.map((num, index) => (
                <Skeleton
                  // className="h-20 sm:h-24 md:h-32 lg:h-40"
                  className="min-h-[350px]"
                  key={index}
                />
              ))}

            {!isFetchingproducts &&
              products &&
              (products.data.length > 0 ? (
                products?.data?.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div className="flex items-center justify-center h-full p-5">
                  <span className="text-muted-foreground">
                    No products to display
                  </span>
                </div>
              ))}
          </div>

          <div>
            {products && products?.pagination.total_pages > 1 && (
              <ProductsPagination2
                totalPages={products?.pagination.total_pages}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;

// TODO: Customize scroll on aside

// [&:checked+label]:bg-[#bfb]
