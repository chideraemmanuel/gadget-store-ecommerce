import { FC } from 'react';
import Filter from './Filter';
import { BrandTypes, CategoryTypes } from '@/types';

interface FilterTypes {
  label: string;
  filterItems: CategoryTypes[] | BrandTypes[];
  searchParamKey: string;
}

interface Props {
  filters: FilterTypes[];
}

// const filters = [
//     {
//         label: '',
//         filterItems: '',
//         searchParamKey: ''
//     }
// ]

const ProductsFilters: FC<Props> = ({ filters }) => {
  return (
    <div>
      {filters.map((filter) => (
        <Filter
          label={filter.label}
          filterItems={filter.filterItems}
          searchParamKey={filter.searchParamKey.toLowerCase()}
        />
      ))}

      {/* <Filter label="Brands" filterItems={brands} searchParamKey="brand" /> */}
    </div>
  );
};

export default ProductsFilters;
