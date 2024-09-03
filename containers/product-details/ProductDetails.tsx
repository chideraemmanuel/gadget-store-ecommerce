'use client';

import Image from 'next/image';
import { FC, useEffect } from 'react';
import phone from '@/assets/phone.png';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingBag, ShoppingCart, Trash2 } from 'lucide-react';
import useGetProductById from '@/lib/hooks/useGetProductById';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductTypes } from '@/types';
import useGetUserCart from '@/lib/hooks/cart/useGetUserCart';
import useAddItemToCart from '@/lib/hooks/cart/useAddItemToCart';
import { usePathname, useRouter } from 'next/navigation';
import useRemoveItemFromCart from '@/lib/hooks/cart/useRemoveItemFromCart';
import useIncrementItemQuantity from '@/lib/hooks/cart/useIncrementItemQuantity';
import useDecrementItemQuantity from '@/lib/hooks/cart/useDecrementItemQuantity';
import GlobalNetworkError from '../../components/network-error/GlobalNetworkError';
import GlobalServerError from '../../components/server-error/GlobalServerError';
import GlobalError from '../../components/error/GlobalError';
import ServerError from '../../components/server-error/ServerError';
import Error from '../../components/error/Error';
import NetworkError from '../../components/network-error/NetworkError';

interface Props {
  // productId: string;
  product?: ProductTypes;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const ProductDetails: FC<Props> = ({ product, isLoading, isError, error }) => {
  const router = useRouter();
  const pathname = usePathname();

  const {
    data: cartReturn,
    isLoading: isGettingCart,
    isError: isErrorGettingCart,
    error: errorGettingCart,
  } = useGetUserCart();

  const { mutate: addToCart } = useAddItemToCart();

  const { mutate: incrementQuantity } = useIncrementItemQuantity();

  const { mutate: decrementQuantity } = useDecrementItemQuantity();

  const { mutate: removeItem } = useRemoveItemFromCart();

  const itemIsInCart = cartReturn?.cart_items.find(
    (cartItem) => cartItem.product._id === product?._id
  );

  // useEffect(() => {
  //   if (isError) {
  //     throw new Error(
  //       // @ts-ignore
  //       error?.response?.data?.error ||
  //         // @ts-ignore
  //         error?.message ||
  //         'Could not get the requested product'
  //     );
  //   }
  // }, [isError]);

  // useEffect(() => {
  //   // IF ERROR IS A NETWORK ERROR, THROW ERROR (WILL BE CAUGHT BY ERROR.TSX IN SEGMENT)
  //   // @ts-ignore
  //   if (errorGettingCart?.message === 'Network Error') {
  //     console.log('network error');
  //     throw new Error('Network Error');
  //   }

  //   if (
  //     // @ts-ignore
  //     errorGettingCart?.response?.data?.error === 'Internal Server Error' ||
  //     // @ts-ignore
  //     errorGettingCart?.response?.status === 500
  //   ) {
  //     console.log('server error');
  //     throw new Error('Internal Server Error');
  //   }
  // }, [errorGettingCart]);

  // @ts-ignore
  if (errorGettingCart?.message === 'Network Error') {
    console.log('network error');
    return <NetworkError />;
  }

  if (
    // @ts-ignore
    errorGettingCart?.response?.data?.error === 'Internal Server Error' ||
    // @ts-ignore
    errorGettingCart?.response?.status === 500
  ) {
    console.log('server error');
    return <ServerError />;
  }

  if (
    errorGettingCart &&
    !(
      // @ts-ignore
      (
        errorGettingCart?.response?.status > 400 &&
        // @ts-ignore
        errorGettingCart?.response?.status < 500
      )
    )
  ) {
    // @ts-ignore
    return <Error message={errorGettingCart?.message} />;
  }

  const handleBuyNowClick = () => {
    //   IF ERROR IS WITHIN THE 400 RANGE (NO USER IS LOGGED IN)
    if (
      errorGettingCart &&
      // @ts-ignore
      errorGettingCart?.response?.status > 400 &&
      // @ts-ignore
      errorGettingCart?.response?.status < 500
    ) {
      console.log('no user, redirectinng to login...');
      router.push(`/auth/login?redirect_to=${pathname}`);
      return;
    }

    // IF CART FETCH IS SUCCESSFUL AND ITEM IS ALREADY IN CART
    if (itemIsInCart) {
      console.log('item already in cart, redirecting...');
      router.push('/cart');
      return;
    }

    // IF CART FETCH IS SUCCESSFUL BUT ITEM IS NOT IN CART
    if (!itemIsInCart && product) {
      console.log('adding to cart and redirecting...');
      addToCart(product);
      router.push('/cart');
      return;
    }
  };

  const handleAddToCartClick = () => {
    //   IF ERROR IS WITHIN THE 400 RANGE (NO USER IS LOGGED IN)
    if (
      errorGettingCart &&
      // @ts-ignore
      errorGettingCart?.response?.status > 400 &&
      // @ts-ignore
      errorGettingCart?.response?.status < 500
    ) {
      console.log('no user, redirectinng to login...');
      router.push(`/auth/login?redirect_to=${pathname}`);
      return;
    }

    // IF CART FETCH IS SUCCESSFUL AND ITEM IS ALREADY IN CART
    if (itemIsInCart && product) {
      console.log('remove from cart');
      removeItem(product);
      return;
    }

    // IF CART FETCH IS SUCCESSFUL BUT ITEM IS NOT IN CART
    if (!itemIsInCart && product) {
      console.log('add to cart');
      addToCart(product);
      return;
    }
  };

  return (
    <section className="py-5">
      {(isLoading || isGettingCart) && (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center items-center bg-accent p-10 rounded-lg h-[40vh] md:h-[50vh]">
            <Skeleton className="aspect-square max-h-full w-auto" />
          </div>

          <div>
            <div className="flex flex-col gap-5 pb-7">
              <Skeleton className="w-28 h-7" />

              <div className="flex flex-col gap-2">
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
              </div>

              <Skeleton className="w-20 h-6" />
            </div>

            <div className="flex items-center gap-3">
              <Skeleton className="flex-1 h-11 rounded-md px-8" />
              <Skeleton className="flex-1 h-11 rounded-md px-8" />
            </div>
          </div>
        </div>
      )}

      {product && (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center items-center bg-accent p-10 rounded-lg h-[40vh] md:h-[50vh]">
            <Image
              src={product.product_image}
              alt={product.product_name}
              width={1000}
              height={1000}
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

            {itemIsInCart && itemIsInCart.quantity > 0 && (
              <div className="flex items-center justify-between gap-3 pb-7 w-[min(300px,100%)]">
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
            )}

            <div className="flex items-center flex-wrap gap-3">
              <Button
                variant={'secondary'}
                className="flex-1 flex items-center gap-1"
                size={'lg'}
                onClick={() => handleBuyNowClick()}
              >
                <ShoppingBag />
                <span>Buy now</span>
              </Button>

              <Button
                variant={itemIsInCart ? 'destructive' : 'secondary'}
                className="flex-1 flex items-center gap-1"
                size={'lg'}
                onClick={() => handleAddToCartClick()}
              >
                {itemIsInCart ? (
                  <>
                    <Trash2 />
                    <span>Remove from cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart />
                    <span>Add to cart</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
