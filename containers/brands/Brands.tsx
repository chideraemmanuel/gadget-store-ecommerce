'use client';

import BrandCard from '@/components/BrandCard';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import useGetBrands from '@/lib/hooks/useGetBrands';
import { BrandTypes } from '@/types';
import { FC } from 'react';

interface Props {}

const array = [1, 2, 3, 4, 5, 6];

const Brands: FC<Props> = () => {
  const { data: brands, isLoading, isError, error, refetch } = useGetBrands();

  if (isError) {
    return (
      <div className="container mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-5">
        <p>An error occured while fetching brands</p>
        <Button onClick={() => refetch()}>Retry</Button>
      </div>
    );
  }

  return (
    <section className="py-7">
      <div className="container mx-auto">
        <SectionHeader>Choose by brand</SectionHeader>

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-3">
          {isLoading &&
            array.map((number, index) => (
              <Skeleton className="h-16" key={index} />
            ))}

          {brands &&
            brands.length > 0 &&
            brands?.map((brand) => <BrandCard key={brand._id} brand={brand} />)}
        </div>

        {brands && brands.length === 0 && (
          <div className="text-center p-6">
            <span className="text-muted-foreground">No brand to display.</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Brands;
