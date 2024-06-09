'use client';

import CartItem from '@/components/CartItem';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DollarSign } from 'lucide-react';
import { FC } from 'react';

interface Props {}

const CartPage: FC<Props> = () => {
  return (
    <>
      <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-[6fr_4fr] lg:grid-cols-[6fr_3fr] gap-5">
        {/* cart items */}
        {/* <Card className="p-3 max-h-[80vh] overflow-scroll"> */}
        <Card className="px-3 py-7">
          <SectionHeader>Shopping cart</SectionHeader>

          <div className="flex flex-col gap-3">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="flex items-center gap-3 pt-5">
            <Button variant={'outline'}>Continue shopping</Button>
            <Button variant={'destructive'}>Clear cart</Button>
          </div>
        </Card>

        {/* order details */}
        <div className="md:sticky md:top-[90px] self-start flex flex-col gap-3 pb-5">
          {/* coupon */}
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

          {/* order summary */}
          <Card className="p-5">
            <CardTitle className="">Order Summary</CardTitle>
            <Separator className="mt-2 mb-5" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3.5">
                <span className="text-sm">Discount</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm">Discount</span>
                <span className="font-medium">$0.00</span>
              </div>
            </div>

            <Separator className="my-2" />

            <div className="flex items-center justify-between gap-3">
              <span className="font-medium">Total</span>
              <span className="font-semibold text-lg">$1799.99</span>
            </div>
          </Card>

          {/* payment method */}
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
              </ToggleGroupItem>
              <ToggleGroupItem
                className="border flex flex-col gap-2 p-3 h-auto"
                value="pay-on-delivery"
                aria-label="Toggle pay on delivery"
              >
                <DollarSign className="" />
                <span className="text-xs">Pay on delivery</span>
              </ToggleGroupItem>
            </ToggleGroup>

            <Button className="w-full">Checkout</Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CartPage;
