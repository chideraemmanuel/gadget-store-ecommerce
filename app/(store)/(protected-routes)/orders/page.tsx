'use client';

import OrdersListItem from '@/components/OrdersListItem';
import ResourcePagination from '@/components/ResourcePagination';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Error from '@/components/error/Error';
import NetworkError from '@/components/network-error/NetworkError';
import ServerError from '@/components/server-error/ServerError';
import useGetUserOrders from '@/lib/hooks/orders/useGetUserOrders';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const OrdersPage: FC<Props> = () => {
  const { data: ordersReturn, isLoading, isError, error } = useGetUserOrders();

  // @ts-ignore
  if (error?.message === 'Network Error') {
    console.log('network error');
    return <NetworkError />;
  }

  if (
    // @ts-ignore
    error?.response?.data?.error === 'Internal Server Error' ||
    // @ts-ignore
    error?.response?.status === 500
  ) {
    console.log('server error');
    return <ServerError />;
  }

  if (
    error &&
    // @ts-ignore
    !(error?.response?.status > 400 && error?.response?.status < 500)
  ) {
    // @ts-ignore
    return <Error message={error?.response?.data?.error || error.message} />;
  }

  return (
    <>
      <div className="container mx-auto py-7">
        <div className="sm:px-5">
          <SectionHeader>Orders</SectionHeader>
        </div>

        <span className="sm:px-5 pb-5 inline-block">filters go here</span>

        <div className="flex flex-col gap-5 sm:px-5 pb-5">
          {isLoading && (
            <>
              <Skeleton className="h-32 md:h-28 w-full" />
              <Skeleton className="h-32 md:h-28 w-full" />
              <Skeleton className="h-32 md:h-28 w-full" />
            </>
          )}

          {!isLoading && (
            <>
              {ordersReturn && ordersReturn.data.length > 0 ? (
                ordersReturn.data.map((orderItem) => (
                  <OrdersListItem key={orderItem._id} order={orderItem} />
                ))
              ) : (
                <div className="flex flex-col gap-3 items-center justify-center h-full p-5">
                  {/* add empty order image..? */}
                  <span className="text-muted-foreground">
                    You haven't placed any order
                  </span>

                  <Button asChild>
                    <Link href={'/products'}>Shop now</Link>
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        {/* <ResourcePagination totalPages={5} /> */}
        {ordersReturn && ordersReturn?.pagination.total_pages > 1 && (
          <ResourcePagination
            totalPages={ordersReturn?.pagination.total_pages}
          />
        )}
      </div>
    </>
  );
};

export default OrdersPage;
