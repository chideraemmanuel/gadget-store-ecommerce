import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface Props {}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Products: FC<Props> = () => {
  return (
    <section className="py-7">
      <div className="container mx-auto">
        <SectionHeader>Today's deals for you!</SectionHeader>
        <span>Products filter goes here</span>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pb-7">
          {array.map((num, index) => (
            <ProductCard key={index} />
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Button
            size={'lg'}
            variant={'outline'}
            className="border-primary hover:bg-primary hover:text-primary-foreground"
          >
            See more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
