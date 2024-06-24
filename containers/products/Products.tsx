import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { ProductTypes } from '@/types';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  products: ProductTypes[];
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Products: FC<Props> = ({ products }) => {
  return (
    <section className="py-7">
      <div className="container mx-auto">
        <SectionHeader>Today's deals for you!</SectionHeader>
        {/* <span>Products filter goes here?</span> */}

        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pb-7">
              {products?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            <div className="flex justify-center items-center">
              <Button
                asChild
                size={'lg'}
                variant={'outline'}
                className="border-primary hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
              >
                <Link href={'/products'}>See more</Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full p-5 w-full col-span-full">
            <span className="text-muted-foreground">
              No products to display
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
