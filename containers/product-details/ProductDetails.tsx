'use client';

import Image from 'next/image';
import { FC, useEffect } from 'react';
import phone from '@/assets/phone.png';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import useGetProductById from '@/lib/hooks/useGetProductById';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductTypes } from '@/types';

interface Props {
  // productId: string;
  product?: ProductTypes;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const ProductDetails: FC<Props> = ({ product, isLoading, isError, error }) => {
  useEffect(() => {
    if (isError) {
      throw new Error(
        // @ts-ignore
        error?.response?.data?.error ||
          // @ts-ignore
          error?.message ||
          'Could not get the requested product'
      );
    }
  }, []);

  return (
    <section className="py-5">
      {isLoading && (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center items-center bg-accent p-10 rounded-lg max-h-[40vh] md:max-h-[50vh]">
            <Skeleton className="aspect-square max-h-full w-auto" />
          </div>

          <div>
            <div className="flex flex-col gap-5 pb-7">
              <Skeleton className="w-28 h-7" />

              <div>
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
              </div>

              <Skeleton className="w-20 h-6" />
            </div>

            <Skeleton className="w-24 h-11 rounded-md px-8" />
          </div>
        </div>
      )}

      {product && (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center items-center bg-accent p-10 rounded-lg max-h-[40vh] md:max-h-[50vh]">
            <Image
              src={product.product_image}
              alt={product.product_name}
              width={300}
              height={300}
              className="aspect-square max-h-full w-auto"
            />
          </div>

          <div>
            <div className="flex flex-col gap-5 pb-7">
              <h2 className="font-semibold text-xl md:text-2xl">
                {product.product_name}
              </h2>
              <p className="text-muted-foreground text-sm">
                {product.description}
              </p>
              <span className="font-semibold text-2xl md:text-3xl">
                ₦{product.price}
              </span>
            </div>

            <div>
              <Button className="flex items-center gap-1" size={'lg'}>
                <ShoppingCart />
                <span>Add to cart</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
