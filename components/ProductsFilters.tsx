import { FC } from 'react';
import Filter from './Filter';
import { BrandTypes, CategoryTypes } from '@/types';
import { Skeleton } from './ui/skeleton';

interface FilterTypes {
  label: string;
  filterItems: CategoryTypes[] | BrandTypes[] | undefined;
  searchParamKey: string;
}

interface Props {
  filters: FilterTypes[];
  isFetchingFilters: boolean;
}

// const filters = [
//     {
//         label: '',
//         filterItems: '',
//         searchParamKey: ''
//     }
// ]

const ProductsFilters: FC<Props> = ({ filters, isFetchingFilters }) => {
  return (
    <>
      {/* product filters skeleton */}
      {isFetchingFilters && (
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

      {!isFetchingFilters && filters && (
        <div className="flex flex-col gap-2">
          {filters.map((filter) => (
            <Filter
              label={filter.label}
              filterItems={filter.filterItems}
              searchParamKey={filter.searchParamKey.toLowerCase()}
            />
          ))}

          {/* <Filter label="Brands" filterItems={brands} searchParamKey="brand" /> */}
        </div>
      )}
    </>
  );
};

export default ProductsFilters;
