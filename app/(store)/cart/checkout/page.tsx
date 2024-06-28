'use client';

import FormInput from '@/components/FormInput';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DollarSignIcon } from 'lucide-react';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaCcMastercard, FaCcPaypal, FaPaypal } from 'react-icons/fa';

interface Props {}

interface FormEntries {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  country: string;
  state: string;
  postal_code: string;
}

const CheckoutPage: FC<Props> = () => {
  const form = useForm<FormEntries>();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;

  const onSubmit: SubmitHandler<FormEntries> = (data) => {
    console.log('submitted data', data);
  };

  return (
    <>
      <div className="container mx-auto py-5 flex flex-col-reverse md:grid md:grid-cols-[6fr_4fr] lg:grid-cols-[6fr_3fr] gap-5">
        {/* cart items */}
        {/* <Card className="p-3 max-h-[80vh] overflow-scroll"> */}
        <Card className="px-3 py-7 md:self-start">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* <SectionHeader></SectionHeader> */}
              <CardTitle className="pb-1">Billing Address</CardTitle>

              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-start gap-2">
                  <FormInput
                    label="First Name"
                    placeholder="e.g. John"
                    {...register('first_name', {
                      required: {
                        value: true,
                        message: "Receipent's first name is required",
                      },
                    })}
                    error={errors.first_name?.message}
                  />
                  <FormInput
                    label="Last Name"
                    placeholder="e.g. Doe"
                    {...register('last_name', {
                      required: {
                        value: true,
                        message: "Receipent's last name is required",
                      },
                    })}
                    error={errors.last_name?.message}
                  />
                </div>

                <FormInput
                  label="Email"
                  error={errors.email?.message}
                  placeholder="e.g johndoe@email.com"
                  id="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Please enter an email',
                    },
                    pattern: {
                      value: emailRegex,
                      message: 'Invalid email format',
                    },
                  })}
                />

                <FormInput
                  label="Address"
                  placeholder="e.g. 2, Ace street"
                  {...register('address', {
                    required: {
                      value: true,
                      message: 'Please enter an address to deliver to',
                    },
                  })}
                  error={errors.address?.message}
                />

                <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-start gap-2">
                  <FormInput
                    label="Country"
                    placeholder="e.g. Nigeria"
                    {...register('country', {
                      required: {
                        value: true,
                        message: 'Please fill in this field',
                      },
                    })}
                    error={errors.country?.message}
                  />
                  <FormInput
                    label="State"
                    placeholder="e.g. Lagos"
                    {...register('state', {
                      required: {
                        value: true,
                        message: 'Please fill in this field',
                      },
                    })}
                    error={errors.state?.message}
                  />
                  <FormInput
                    label="Postal Code"
                    placeholder="e.g. 54790"
                    {...register('postal_code', {
                      required: {
                        value: true,
                        message: 'Please fill in this field',
                      },
                    })}
                    error={errors.country?.message}
                  />
                </div>
              </div>
            </div>

            <div>
              {/* <SectionHeader>Payment</SectionHeader> */}

              {/* payment method */}
              {/* {cartReturn && cartReturn.cart_items.length > 0 && ( */}
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
                  <DollarSignIcon className="" />
                  <span className="text-xs">Pay on delivery</span>
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="border flex flex-col gap-2 p-3 h-auto"
                  value="paypal"
                  aria-label="Toggle PayPal"
                >
                  <FaPaypal className="" />
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
              </ToggleGroup>

              <Button className="w-full">Checkout</Button>
              {/* )} */}
            </div>
          </form>
        </Card>

        {/* order details */}
        <div className="md:sticky md:top-[90px] md:self-start flex flex-col gap-3 pb-5">
          {/* coupon */}
          {/* {cartReturn && cartReturn.cart_items.length > 0 && (
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
          )} */}

          {/* order summary */}
          <Card className="p-5">
            <CardTitle className="">Order Summary</CardTitle>
            <Separator className="mt-2 mb-5" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3.5">
                <span className="text-sm">Discount</span>
                <span className="font-medium">
                  {/* {cartReturn && cartReturn?.cart_items.length > 0
                    ? '₦0.00'
                    : '---'} */}
                  ₦0.00
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm">Sub-total</span>
                <span className="font-medium">
                  {/* {cartReturn && cartReturn?.cart_items.length > 0
                    ? `₦${getSubTotal(cartReturn.cart_items).toFixed(2)}`
                    : '---'} */}
                  ₦0.00
                </span>
              </div>
            </div>

            <Separator className="my-2" />

            <div className="flex items-center justify-between gap-3">
              <span className="font-medium">Total</span>
              <span className="font-semibold text-lg">
                {/* {cartReturn && cartReturn?.cart_items.length > 0
                  ? `₦${getTotal(cartReturn.cart_items, 0).toFixed(2)}`
                  : '---'} */}
                ₦0.00
              </span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
