import Filter from '@/components/Filter';
import ProductCard from '@/components/ProductCard';
import ProductsPagination from '@/components/ProductsPagination';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { FilterIcon } from 'lucide-react';
import { FC } from 'react';

interface Props {}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterItems = [
  {
    _id: '1',
    name: 'Laptop',
  },
  {
    _id: '2',
    name: 'Phones',
  },
  {
    _id: '3',
    name: 'Headphones',
  },
];

const CategoryPageProducts: FC<Props> = () => {
  return (
    <>
      <section className="">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr,_5fr] pt-7">
          <aside className="self-start sticky md:top-20 hidden md:flex md:flex-col md:gap-3 max-h-[80vh]">
            <Filter
              label="Categories"
              filterItems={filterItems}
              searchParamKey="category"
            />
          </aside>

          <div className="px-0 md:px-2 md:border-l">
            <div className="flex items-start justify-between">
              <SectionHeader>[Category name] for you!</SectionHeader>

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
                    <Filter
                      label="Categories"
                      filterItems={filterItems}
                      searchParamKey="category"
                    />
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-7">
              {array.map((num, index) => (
                <ProductCard key={index} />
              ))}
            </div>

            <div className="">
              <ProductsPagination
                // current_page={1}
                total_records={100}
                total_pages={3}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPageProducts;
