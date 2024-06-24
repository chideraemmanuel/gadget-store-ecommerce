'use client';

import { FC, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import useGetUserCart from '@/lib/hooks/cart/useGetUserCart';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import useAddItemToCart from '@/lib/hooks/cart/useAddItemToCart';
import useIncrementItemQuantity from '@/lib/hooks/cart/useIncrementItemQuantity';
import useDecrementItemQuantity from '@/lib/hooks/cart/useDecrementItemQuantity';
import { ProductTypes } from '@/types';
import { usePathname, useRouter } from 'next/navigation';
import useRemoveItemFromCart from '@/lib/hooks/cart/useRemoveItemFromCart';

interface Props {
  //   productId: string;
  product: ProductTypes;
}

const AddToCartButton: FC<Props> = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();

  const { data: cartReturn, isLoading, isError, error } = useGetUserCart();

  const { mutate: addToCart } = useAddItemToCart();

  const { mutate: incrementQuantity } = useIncrementItemQuantity();

  const { mutate: decrementQuantity } = useDecrementItemQuantity();

  const { mutate: removeItem } = useRemoveItemFromCart();

  const itemIsInCart = cartReturn?.cart_items.find(
    (cartItem) => cartItem.product._id === product._id
  );

  useEffect(() => {
    // IF ERROR IS A NETWORK ERROR, THROW ERROR (WILL BE CAUGHT BY ERROR.TSX IN SEGMENT)
    // @ts-ignore
    if (error?.message === 'Network Error') {
      console.log('network error');
      throw new Error('Network Error');
    }

    if (
      // @ts-ignore
      error?.response?.data?.error === 'Internal Server Error' ||
      // @ts-ignore
      error?.response?.status === 500
    ) {
      console.log('server error');
      throw new Error('Internal Server Error');
    }
  }, [error]);

  //   IF ERROR IS WITHIN THE 400 RANGE (NO USER IS LOGGED IN)
  // @ts-ignore
  if (error?.response?.status > 400 && error?.response?.status < 500) {
    return (
      <Button
        className="w-full"
        onClick={() => router.push(`/auth/login?redirect_to=${pathname}`)}
      >
        Add to cart
      </Button>
    );
  }

  if (isLoading) {
    return <Skeleton className="h-10 w-full rounded-md" />;
  }

  return (
    <>
      {cartReturn &&
        (itemIsInCart && itemIsInCart.quantity > 0 ? (
          <div className="flex items-center gap-2 md:gap-3 w-full">
            <div className="flex-1 flex items-center justify-between gap-2 md:gap-3">
              <Button
                size={'icon'}
                variant={'secondary'}
                className="p-1 h-auto w-auto"
                onClick={() => {
                  if (itemIsInCart.quantity === 1) {
                    removeItem(product);
                  } else {
                    decrementQuantity(product);
                  }
                }}
              >
                <Minus className="w-1/2" />
              </Button>

              <span>{itemIsInCart.quantity}</span>

              <Button
                size={'icon'}
                variant={'secondary'}
                className="p-1 h-auto w-auto"
                onClick={() => incrementQuantity(product)}
              >
                <Plus className="w-1/2" />
              </Button>
            </div>

            <Button
              size={'icon'}
              variant={'ghost'}
              className="p-1 h-auto w-auto hover:bg-destructive hover:text-destructive-foreground"
              onClick={() => removeItem(product)}
            >
              <Trash2 className="md:w-2/3" />
            </Button>
          </div>
        ) : (
          <Button className="w-full" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        ))}
    </>
  );
};

export default AddToCartButton;
