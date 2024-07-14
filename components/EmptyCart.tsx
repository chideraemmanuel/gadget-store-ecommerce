import { FC } from 'react';
import emptyCartImage from '@/assets/empty-cart.svg';
import emptyCartImage2 from '@/assets/empty-cart2.svg';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

interface Props {}

const EmptyCart: FC<Props> = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 min-h-[calc(100vh-70px)] container mx-auto p-10">
        <div className="max-w-[300px] h-auto">
          <Image
            src={emptyCartImage}
            alt="Illustration of an empty cart"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-3 text-center">
          {/* <h2 className="font-bold text-2xl md:3xl">Network Error</h2> */}

          <p className="text-muted-foreground w-[90%] mx-auto">
            There are no items in your cart
          </p>

          <Button asChild>
            <Link href={'/products'}>Shop now</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
