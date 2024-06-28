import Filter from '@/components/Filter';
import ProductCard from '@/components/ProductCard';
import ProductsFilters from '@/components/ProductsFilters';
import ProductsPagination from '@/components/ProductsPagination';
import ResourcePagination from '@/components/ResourcePagination';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Skeleton } from '@/components/ui/skeleton';
import { BrandTypes, CategoryTypes, ProductsReturnTypes } from '@/types';
import { FilterIcon } from 'lucide-react';
import { FC } from 'react';

interface Props {
  isFetchingFilters: boolean;
  filters: [
    {
      label: string;
      filterItems: BrandTypes[] | CategoryTypes[] | undefined;
      searchParamKey: string;
    }
  ];
  isFetchingCategory: boolean;
  category: CategoryTypes | undefined;
  isFetchingProducts: boolean;
  products: ProductsReturnTypes | undefined;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CategoryPageProducts: FC<Props> = ({
  isFetchingFilters,
  filters,
  isFetchingCategory,
  category,
  isFetchingProducts,
  products,
}) => {
  return (
    <>
      <section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr,_5fr] pt-7">
          <aside className="self-start sticky md:top-20 hidden md:flex md:flex-col md:gap-3 max-h-[80vh]">
            {/* {!isFetchingFilters && filters && ( */}
            <ProductsFilters
              filters={filters}
              isFetchingFilters={isFetchingFilters}
            />
            {/* )} */}
          </aside>

          <div className="px-0 md:px-2 md:border-l">
            <div className="flex items-start justify-between">
              {/* header text skeleton */}
              {isFetchingCategory && <Skeleton className="w-60 h-9 mb-7" />}

              {!isFetchingCategory && category && (
                <SectionHeader>
                  {`${category.name
                    .charAt(0)
                    .toUpperCase()}${category.name.slice(1)}`}{' '}
                  for you!
                </SectionHeader>
              )}

              {/* show drawer only on mobile */}
              <Drawer>
                <DrawerTrigger asChild className="inline-block md:hidden">
                  <Button
                    variant={'outline'}
                    className="flex items-center gap-1"
                  >
                    <FilterIcon className="w-1/2" />
                    <span>Filter</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="p-5 max-h-[80vh]">
                    {/* {!isFetchingFilters && filters && ( */}
                    <ProductsFilters
                      filters={filters}
                      isFetchingFilters={isFetchingFilters}
                    />
                    {/* )} */}
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            <div
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 ${
                products && products?.data.length > 0 && 'pb-7'
              }`}
            >
              {isFetchingProducts &&
                array.map((num, index) => (
                  <Skeleton key={index} className="min-h-[350px]" />
                ))}

              {products &&
                products.data.length > 0 &&
                products.data.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>

            {!isFetchingProducts && products?.data.length === 0 && (
              <div className="flex items-center justify-center h-full p-5 w-full col-span-full">
                <span className="text-muted-foreground">
                  No products to display
                </span>
              </div>
            )}

            {/* <div className=""> */}
            {products && products?.pagination?.total_pages > 1 && (
              <ResourcePagination
                totalPages={products?.pagination?.total_pages}
              />
            )}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPageProducts;

// #003420: illustration color
