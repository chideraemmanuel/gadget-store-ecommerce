'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import useGetUserCart from '@/lib/hooks/cart/useGetUserCart';
import getNumberOfItemsInCart from '@/lib/helpers/getNumberOfItemsInCart';

interface Props {}

const NavbarCartLink: FC<Props> = () => {
  const { data: cartReturn, isLoading, isError, error } = useGetUserCart();

  if (isLoading) {
    return <Skeleton className="w-10 h-10" />;
  }

  if (error) {
    return (
      <Button asChild variant={'ghost'} size={'sm'} className="px-1 sm:px-2">
        <Link
          href={'/cart'}
          className="inline-flex items-center justify-center gap-1 text-sm relative"
        >
          <ShoppingCartIcon // width={20}
            className="w-full md:w-1/2"
          />
          <span className="hidden md:inline-block">Cart</span>

          {/* <span className="absolute bg-destructive text-destructive-foreground rounded-[50%] py-[2px] px-[4px] text-xs -top-[25%] -right-[15%]">
            10
          </span> */}
        </Link>
      </Button>
    );
  }

  return (
    <>
      {cartReturn && (
        <>
          <Button
            asChild
            variant={'ghost'}
            size={'sm'}
            className="px-1 sm:px-2"
          >
            <Link
              href={'/cart'}
              className="inline-flex items-center justify-center gap-1 text-sm relative"
            >
              <ShoppingCartIcon // width={20}
                className="w-full md:w-1/2"
              />
              <span className="hidden md:inline-block">Cart</span>

              {cartReturn.cart_items.length > 0 && (
                <span className="absolute bg-destructive text-destructive-foreground rounded-[50%] py-[2px] px-[4px] text-xs -top-[25%] -right-[15%]">
                  {/* {cartReturn.cart_items.length} */}
                  {getNumberOfItemsInCart(cartReturn.cart_items)}
                </span>
              )}
            </Link>
          </Button>
        </>
      )}

      {/* {data && data.cart_items.length === 0 && (
        <Button asChild variant={'ghost'} size={'sm'} className="px-1 sm:px-2">
          <Link
            href={'/cart'}
            className="inline-flex items-center justify-center gap-1 text-sm"
          >
            <ShoppingCartIcon // width={20}
              className="w-full md:w-1/2"
            />

            <span className="hidden md:inline-block">Cart</span>
          </Link>
        </Button>
      )} */}
    </>
  );
};

export default NavbarCartLink;
