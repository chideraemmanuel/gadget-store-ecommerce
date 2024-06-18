import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ProductTypes } from '@/types';
import { FC } from 'react';

interface Props {
  header: string;
  products: ProductTypes[];
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const ProductsCarousel: FC<Props> = ({ header, products }) => {
  return (
    <div className="container mx-auto py-7">
      {/* <SectionHeader>Popular Products</SectionHeader> */}
      {/* <h2 className="font-bold text-xl md:text-2xl pb-7">Popular Products</h2> */}
      <h2 className="font-bold text-xl md:text-2xl pb-7">{header}</h2>

      <Carousel>
        <CarouselContent>
          {products?.map((product) => (
            <CarouselItem
              key={product._id}
              className="basis-[55%] xs:basis-[40%] md:basis-[30%] lg:basis-[23%]"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
