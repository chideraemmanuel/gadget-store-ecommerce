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
    return <Skeleton className="w-5 h-3" />;
  }

  if (error) {
    return (
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
    );
  }

  return (
    <>
      {data && data.cart_items.length > 0 && (
        <>
          {/* <div className="relative border"> */}
          <Button
            asChild
            variant={'ghost'}
            size={'sm'}
            className="px-1 sm:px-2"
          >
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
          {/* <span className="inline-block absolute right-0 top-0 translate-x-1/2 translate-y-1/2 bg-red-500 rounded-full p-1 text-xs text-white">
              10000000000
            </span>
          </div> */}
        </>
      )}

      {}
    </>
  );
};

export default NavbarCartLink;
