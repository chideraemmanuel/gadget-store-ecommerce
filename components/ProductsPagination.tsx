'use client';

import { FC } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  total_records: number;
  total_pages: number;
  //   current_page: number;
}

const ProductsPagination: FC<Props> = ({
  total_records,
  total_pages,
  //   current_page,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current_page = searchParams.get('page') || 1;

  const updateSearchParam = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.set('page', value);

    // return `${searchParamKey}=${value}`
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // console.log('passed value', value);

    if (value !== '') {
      newSearchParams.set('page', value);
    } else if (isNaN(+value)) {
      //   console.log('delete 1');
      newSearchParams.delete('page');
    } else if (value === '') {
      //   console.log('delete 2');
      newSearchParams.delete('page');
    } else {
      //   console.log('delete 3');
      newSearchParams.delete('page');
    }

    // console.log('new search params', newSearchParams.get(searchParamKey));

    router.replace(`?${newSearchParams}`);
  };

  return (
    <>
      {total_pages > 0 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => updateSearchParam(`${+current_page - 1}`)}
                className={`${
                  +current_page === 1 &&
                  'text-muted-foreground cursor-not-allowed hover:bg-transparent hover:text-muted-foreground'
                }`}
              />
            </PaginationItem>

            {+current_page - 1 > 0 && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => updateSearchParam(``)}
                  //   isActive={false}
                >
                  {+current_page - 1}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink
                onClick={() => updateSearchParam(``)}
                isActive={true}
              >
                {current_page}
              </PaginationLink>
            </PaginationItem>

            {+current_page + 1 <= total_pages && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => updateSearchParam(``)}
                  //   isActive={false}
                >
                  {+current_page + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {+current_page === 1 && +current_page + 2 <= total_pages && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => updateSearchParam(``)}
                  //   isActive={false}
                >
                  {+current_page + 2}
                </PaginationLink>
              </PaginationItem>
            )}

            {+current_page + 3 < total_pages && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                onClick={() => updateSearchParam(``)}
                className={`${
                  +current_page === total_pages &&
                  'text-muted-foreground cursor-not-allowed hover:bg-transparent hover:text-muted-foreground'
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default ProductsPagination;
