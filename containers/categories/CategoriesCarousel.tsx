import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { FC } from 'react';
import image from '@/assets/home-hero-image.jpg';
import Link from 'next/link';

interface Props {}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const CategoriesCarousel: FC<Props> = () => {
  return (
    <Carousel opts={{}}>
      <CarouselContent className="-ml-2 md:-ml-3">
        {array.map((num, index) => (
          <CarouselItem
            className="basis-2/5 md:basis-[22%] pl-2 md:pl-3"
            key={index}
          >
            <Link href={'#'}>
              <Card
                style={{
                  background: `url(${image.src}) no-repeat center center/cover`,
                }}
                className="p-4 h-32 md:h-40 relative after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-50 overflow-hidden"
              >
                <CardContent className="flex items-center justify-center text-center h-full">
                  <span className="relative z-10 inline-block font-bold text-lg text-[hsl(210_40%_98%)]">
                    Category {num}
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
