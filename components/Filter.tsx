'use client';

import { FC } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useRouter, useSearchParams } from 'next/navigation';
import { BrandTypes, CategoryTypes } from '@/types';

interface Props {
  label: string;
  filterItems: CategoryTypes[] | BrandTypes[];
  searchParamKey: string;
}

const Filter: FC<Props> = ({ label, filterItems, searchParamKey }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filterValue = searchParams.get(searchParamKey);

  //   console.log('filter value in search param', filterValue);

  const updateSearchParam = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // console.log('passed value', value);

    if (value !== '') {
      newSearchParams.set(searchParamKey, value);
    } else if (value === '') {
      //   console.log('delete 1');
      newSearchParams.delete(searchParamKey);
    } else {
      //   console.log('delete 2');
      newSearchParams.delete(searchParamKey);
    }

    // console.log('new search params', newSearchParams.get(searchParamKey));

    router.replace(`?${newSearchParams}`);
  };

  return (
    <>
      <div>
        <span className="inline-block pb-2">{label}</span>

        <ToggleGroup
          // className="bg-blue-500 justify-start"
          className="justify-start flex-wrap"
          type="single"
          defaultValue={filterValue ?? undefined}
          //   value={filterValue ?? undefined}
          //   value={filterValue !== null ? filterValue : undefined}
          //   onValueChange={(value) => console.log(value)}
          onValueChange={(value) => updateSearchParam(value)}
        >
          {filterItems.map((filterItem) => (
            <ToggleGroupItem
              key={filterItem._id}
              value={filterItem._id}
              aria-label={`Toggle ${filterItem.name}`}
              className="border rounded-full capitalize"
            >
              {/* <Bold className="h-4 w-4" /> */}
              {filterItem.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </>
  );
};

export default Filter;
