'use client';

import CartItem from '@/components/CartItem';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { getSubTotal, getTotal } from '@/lib/helpers/getTotals';
import useClearCart from '@/lib/hooks/cart/useClearCart';
import useGetUserCart from '@/lib/hooks/cart/useGetUserCart';
import { DollarSign } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { FaPaypal, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

interface Props {}

const CartPage: FC<Props> = () => {
  const { data: cartReturn, isLoading, isError, error } = useGetUserCart();

  const { mutate: clearCart } = useClearCart();

  return (
    <>
      <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-[6fr_4fr] lg:grid-cols-[6fr_3fr] gap-5">
        {/* cart items */}
        {/* <Card className="p-3 max-h-[80vh] overflow-scroll"> */}
        <Card className="px-3 py-7 self-start">
          <SectionHeader>Shopping cart</SectionHeader>

          <div className="flex flex-col gap-3">
            {isLoading && (
              <>
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </>
            )}

            {!isLoading && (
              <>
                {cartReturn && cartReturn.cart_items.length > 0 ? (
                  cartReturn.cart_items.map((cartItem) => (
                    <CartItem
                      key={cartItem.product._id}
                      // {...cartItem.product}
                      product={cartItem.product}
                      quantity={cartItem.quantity}
                    />
                  ))
                ) : (
                  <div className="flex flex-col gap-3 items-center justify-center h-full p-5">
                    {/* add empty cart image..? */}
                    {/* <span className="text-muted-foreground">No items in cart</span> */}
                    <span className="text-muted-foreground">
                      Your cart is currently empty
                    </span>

                    <Button asChild>
                      <Link href={'/products'}>Shop now</Link>
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>

          {cartReturn && cartReturn.cart_items.length > 0 && (
            <div className="flex items-center gap-3 pt-5">
              <Button variant={'outline'} asChild>
                <Link href={'/products'}>Continue shopping</Link>
              </Button>
              <Button variant={'destructive'} onClick={() => clearCart()}>
                Clear cart
              </Button>
            </div>
          )}
        </Card>

        {/* order details */}
        <div className="md:sticky md:top-[90px] self-start flex flex-col gap-3 pb-5">
          {/* coupon */}
          {cartReturn && cartReturn.cart_items.length > 0 && (
            <Card className="p-5">
              <CardTitle className="pb-1">Coupon Code</CardTitle>
              <CardDescription>
                Have a coupon code? Apply it here!
              </CardDescription>

              <Separator className="mt-2 mb-3" />

              <div className="flex flex-col gap-3">
                <Input placeholder="Enter coupon code" />
                <Button>Apply</Button>
              </div>
            </Card>
          )}

          {/* order summary */}
          <Card className="p-5">
            <CardTitle className="">Order Summary</CardTitle>
            <Separator className="mt-2 mb-5" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3.5">
                <span className="text-sm">Discount</span>
                <span className="font-medium">
                  {cartReturn && cartReturn?.cart_items.length > 0
                    ? '₦0.00'
                    : '---'}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm">Sub-total</span>
                <span className="font-medium">
                  {cartReturn && cartReturn?.cart_items.length > 0
                    ? `₦${getSubTotal(cartReturn.cart_items).toFixed(2)}`
                    : '---'}
                </span>
              </div>
            </div>

            <Separator className="my-2" />

            <div className="flex items-center justify-between gap-3">
              <span className="font-medium">Total</span>
              <span className="font-semibold text-lg">
                {' '}
                {cartReturn && cartReturn?.cart_items.length > 0
                  ? `₦${getTotal(cartReturn.cart_items, 0).toFixed(2)}`
                  : '---'}
              </span>
            </div>
          </Card>

          {/* payment method */}
          {cartReturn && cartReturn.cart_items.length > 0 && (
            <Card className="p-5">
              <CardTitle className="pb-1">Payment method</CardTitle>
              <CardDescription>
                Please select your preferred payment method
              </CardDescription>

              <Separator className="mt-2 mb-3" />

              <ToggleGroup
                //   className="pb-3 justify-start flex-wrap"
                className="pb-3 grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] justify-start"
                type="single"
                onValueChange={(value) => console.log('value', value)}
              >
                <ToggleGroupItem
                  className="border flex flex-col gap-2 p-3 h-auto"
                  value="pay-on-delivery"
                  aria-label="Toggle Pay On Delivery"
                >
                  <DollarSign className="" />
                  <span className="text-xs">Pay on delivery</span>
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="border flex flex-col gap-2 p-3 h-auto"
                  value="paypal"
                  aria-label="Toggle PayPal"
                >
                  <FaCcPaypal className="" />
                  <span className="text-xs">PayPal</span>
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="border flex flex-col gap-2 p-3 h-auto"
                  value="debit-mastercard"
                  aria-label="Toggle Debit Mastercard"
                >
                  <FaCcMastercard className="" />
                  <span className="text-xs">Mastercard</span>
                </ToggleGroupItem>
                {/* <ToggleGroupItem
                className="border flex flex-col gap-2 p-3 h-auto"
                value="pay-on-delivery"
                aria-label="Toggle pay on delivery"
              >
                <DollarSign className="" />
                <span className="text-xs">Pay on delivery</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                className="border flex flex-col gap-2 p-3 h-auto"
                value="pay-on-delivery"
                aria-label="Toggle pay on delivery"
              >
                <DollarSign className="" />
                <span className="text-xs">Pay on delivery</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                className="border flex flex-col gap-2 p-3 h-auto"
                value="pay-on-delivery"
                aria-label="Toggle pay on delivery"
              >
                <DollarSign className="" />
                <span className="text-xs">Pay on delivery</span>
              </ToggleGroupItem> */}
              </ToggleGroup>

              <Button className="w-full">Checkout</Button>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
