'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { FC } from 'react';
import image from '@/assets/home-hero-image.jpg';
import Link from 'next/link';
import useGetCategories from '@/lib/hooks/useGetCategories';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

interface Props {}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const CategoriesCarousel: FC<Props> = () => {
  const {
    data: categories,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetCategories();

  if (isError) {
    return (
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-5">
        <p>An error occured while fetching categories</p>
        <Button onClick={() => refetch()}>Retry</Button>
      </div>
    );
  }

  return (
    <Carousel opts={{}}>
      <CarouselContent className="-ml-2 md:-ml-3">
        {isLoading &&
          array.map((num, index) => (
            <CarouselItem
              key={index}
              className="basis-2/5 md:basis-[22%] pl-2 md:pl-3"
            >
              <Skeleton className="p-4 h-32 md:h-40" />
            </CarouselItem>
          ))}

        {categories?.map((category) => (
          <CarouselItem
            className="basis-2/5 md:basis-[22%] pl-2 md:pl-3"
            key={category._id}
          >
            <Link href={`/products/category/${category._id}`}>
              <Card
                // style={{
                //   background: `url(${image.src}) no-repeat center center/cover`,
                // }}
                style={{
                  background: `url(${category.billboard.billboard_image}) no-repeat center center/cover`,
                }}
                className="p-4 h-32 md:h-40 relative after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-slate-950 after:bg-opacity-50 overflow-hidden"
              >
                <CardContent className="flex items-center justify-center text-center h-full">
                  <span className="relative z-10 inline-block font-bold text-lg text-[hsl(210_40%_98%)]">
                    {category.name}
                  </span>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CategoriesCarousel;
