'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';
import useGetCurrentUserCart from '@/lib/hooks/useGetCurrentUserCart';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {}

const NavbarCartLink: FC<Props> = () => {
  const { data, isLoading, isError, error } = useGetCurrentUserCart();

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

          <span className="absolute bg-red-500 rounded-[50%] py-[2px] px-[4px] text-xs -top-[25%] -right-[15%]">
            10
          </span>
        </Link>
      </Button>
    );
  }

  return (
    <>
      {data && (
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

              {data.cart_items.length > 0 && (
                <span className="absolute bg-red-500 rounded-[50%] py-[2px] px-[4px] text-xs -top-[25%] -right-[15%]">
                  10
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
