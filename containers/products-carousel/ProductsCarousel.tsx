import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { FC } from 'react';

interface Props {}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const ProductsCarousel: FC<Props> = () => {
  return (
    <div className="container mx-auto py-7">
      {/* <SectionHeader>Popular Products</SectionHeader> */}
      <h2 className="font-bold text-xl md:text-2xl pb-7">Popular Products</h2>

      <Carousel>
        <CarouselContent>
          {array.map((num, index) => (
            <CarouselItem
              key={index}
              className="basis-[55%] xs:basis-[40%]  md:basis-[30%] lg:basis-[23%]"
            >
              <ProductCard />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
