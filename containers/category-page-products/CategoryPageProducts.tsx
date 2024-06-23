import Filter from '@/components/Filter';
import ProductCard from '@/components/ProductCard';
import ProductsFilters from '@/components/ProductsFilters';
import ProductsPagination from '@/components/ProductsPagination';
import ProductsPagination2 from '@/components/ProductsPagination2';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { BrandTypes, ProductsReturnTypes } from '@/types';
import { FilterIcon } from 'lucide-react';
import { FC } from 'react';

interface Props {
  products: ProductsReturnTypes;
  filters: [
    {
      label: string;
      filterItems: BrandTypes[];
      searchParamKey: string;
    }
  ];
  categoryName: string;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CategoryPageProducts: FC<Props> = ({
  products,
  filters,
  categoryName,
}) => {
  return (
    <>
      <section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr,_5fr] pt-7">
          <aside className="self-start sticky md:top-20 hidden md:flex md:flex-col md:gap-3 max-h-[80vh]">
            {filters && <ProductsFilters filters={filters} />}
          </aside>

          <div className="px-0 md:px-2 md:border-l">
            <div className="flex items-start justify-between">
              <SectionHeader>
                {`${categoryName.charAt(0).toUpperCase()}${categoryName.slice(
                  1
                )}`}{' '}
                for you!
              </SectionHeader>

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
                  <div className="p-5 flex flex-col gap-3 max-h-[80vh]">
                    {filters && <ProductsFilters filters={filters} />}
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-7">
              {products.data.length > 0 ? (
                products.data.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div className="text-center p-6">
                  <span className="text-muted-foreground">
                    No products to display.
                  </span>
                </div>
              )}
            </div>

            {/* <div className=""> */}
            {products.pagination.total_pages > 1 && (
              <ProductsPagination2
                totalPages={products.pagination.total_pages}
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
