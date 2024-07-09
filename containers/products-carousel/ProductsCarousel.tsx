import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductTypes } from '@/types';
import { FC } from 'react';

interface Props {
  header: string;
  products?: ProductTypes[];
  isLoading: boolean;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const ProductsCarousel: FC<Props> = ({ header, products, isLoading }) => {
  return (
    <div className="container mx-auto py-7">
      {/* <SectionHeader>Popular Products</SectionHeader> */}
      {/* <h2 className="font-bold text-xl md:text-2xl pb-7">Popular Products</h2> */}
      <h2 className="font-bold text-xl md:text-2xl pb-7">{header}</h2>

      {/* {!isLoading && products && products.length > 0 && ( */}
      <Carousel>
        <CarouselContent>
          {isLoading &&
            array.map((num, index) => (
              <CarouselItem className="basis-[55%] xs:basis-[40%] md:basis-[30%] lg:basis-[23%]">
                <Skeleton
                  // className="h-20 sm:h-24 md:h-32 lg:h-40"
                  className="min-h-[350px]"
                  key={index}
                />
              </CarouselItem>
            ))}

          {!isLoading &&
            products &&
            products.length > 0 &&
            products.map((product) => (
              <CarouselItem
                key={product._id}
                className="basis-[55%] xs:basis-[40%] md:basis-[30%] lg:basis-[23%]"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      {/* )} */}

      {products && products.length === 0 && (
        <div className="text-center p-6 w-full">
          <span className="text-muted-foreground">No products to display.</span>
        </div>
      )}
    </div>
  );
};

export default ProductsCarousel;
