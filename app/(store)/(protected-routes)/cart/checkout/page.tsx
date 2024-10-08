'use client';

import EmptyCart from '@/components/EmptyCart';
import FormInput from '@/components/FormInput';
import SectionHeader from '@/components/SectionHeader';
import SplashScreen from '@/components/SplashScreen';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import Error from '@/components/error/Error';
import NetworkError from '@/components/network-error/NetworkError';
import ServerError from '@/components/server-error/ServerError';
import {
  getIndividualItemTotal,
  getSubTotal,
  getTotal,
} from '@/lib/helpers/getTotals';
import useCheckout from '@/lib/hooks/cart/useCheckout';
import useGetUserCart from '@/lib/hooks/cart/useGetUserCart';
import {
  Copy,
  CreditCard,
  DollarSignIcon,
  MoreVertical,
  Truck,
} from 'lucide-react';
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
  city: string;
  payment_method: string;
}

const CheckoutPage: FC<Props> = () => {
  const { data: cartReturn, isLoading, isError, error } = useGetUserCart();

  const {
    mutate: checkout,
    isLoading: isCheckingOut,
    isError: isErrorCheckingOut,
    error: errorCheckingOut,
  } = useCheckout();

  const form = useForm<FormEntries>();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
    clearErrors,
  } = form;

  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;

  const onSubmit: SubmitHandler<FormEntries> = (data) => {
    console.log('submitted data', data);

    checkout({
      order_items: cartReturn?.cart_items!,
      billing_address: {
        receipent_name: `${data.first_name} ${data.last_name}`,
        address: data.address,
        city: data.city,
        postal_code: data.postal_code,
        state: data.state,
        country: data.country,
      },
    });
  };

  if (isLoading) {
    return <SplashScreen />;
  }

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
      {cartReturn && cartReturn.cart_items.length === 0 && <EmptyCart />}

      {cartReturn && cartReturn?.cart_items.length > 0 && (
        <div className="container mx-auto py-5 flex flex-col-reverse md:grid md:grid-cols-[6fr_4fr] lg:grid-cols-[6fr_3fr] gap-5">
          {/* cart items */}
          {/* <Card className="p-3 max-h-[80vh] overflow-scroll"> */}
          <Card className="px-3 py-7 md:self-start shadow-md dark:bg-slate-900">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-7"
            >
              <div>
                {/* <SectionHeader></SectionHeader> */}
                <CardTitle className="pb-3 text-lg">Billing Address</CardTitle>

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
                      disabled={isCheckingOut}
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
                      disabled={isCheckingOut}
                      error={errors.last_name?.message}
                    />
                  </div>

                  <FormInput
                    label="Email"
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
                    disabled={isCheckingOut}
                    error={errors.email?.message}
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
                    disabled={isCheckingOut}
                    error={errors.address?.message}
                  />

                  <FormInput
                    label="Country"
                    placeholder="e.g. Nigeria"
                    {...register('country', {
                      required: {
                        value: true,
                        message: 'Please fill in this field',
                      },
                    })}
                    disabled={isCheckingOut}
                    error={errors.country?.message}
                  />

                  <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-start gap-2">
                    <FormInput
                      label="City"
                      placeholder="e.g. Nigeria"
                      {...register('city', {
                        required: {
                          value: true,
                          message: 'Please fill in this field',
                        },
                      })}
                      disabled={isCheckingOut}
                      error={errors.city?.message}
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
                      disabled={isCheckingOut}
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
                      disabled={isCheckingOut}
                      error={errors.country?.message}
                    />
                  </div>
                </div>
              </div>

              <div>
                {/* <SectionHeader>Payment</SectionHeader> */}

                {/* payment method */}
                {/* {cartReturn && cartReturn.cart_items.length > 0 && ( */}
                <CardTitle className="pb-3 text-lg">Payment method</CardTitle>
                <CardDescription>
                  Please select your preferred payment method
                </CardDescription>

                <Separator className="mt-2 mb-3" />

                <div>
                  <ToggleGroup
                    disabled={isCheckingOut}
                    {...register('payment_method', {
                      required: {
                        value: true,
                        message: 'Please select a payment method',
                      },
                    })}
                    className={`flex flex-wrap p-2 rounded-md border border-transparent ${
                      errors.payment_method?.message && ' border-destructive'
                    }`}
                    // className={`grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] justify-start p-2 rounded-md border border-transparent ${
                    //   errors.payment_method?.message && ' border-destructive'
                    // }`}
                    type="single"
                    onValueChange={(value) => {
                      console.log('value', value);
                      setValue('payment_method', value);

                      if (value === '') {
                        setError('payment_method', {
                          message: 'Please select a payment method',
                        });
                        return;
                      }

                      clearErrors('payment_method');
                    }}
                  >
                    <ToggleGroupItem
                      className="border flex-1 flex flex-col gap-2 p-3 h-auto min-w-fit"
                      value="pay-on-delivery"
                      aria-label="Toggle Pay On Delivery"
                    >
                      <DollarSignIcon className="w-4 h-4" />
                      <span className="text-xs">Pay on delivery</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      className="border flex-1 flex flex-col gap-2 p-3 h-auto min-w-fit"
                      value="paypal"
                      aria-label="Toggle PayPal"
                    >
                      <FaPaypal className="" />
                      <span className="text-xs">PayPal</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      className="border flex-1 flex flex-col gap-2 p-3 h-auto min-w-fit"
                      value="debit-mastercard"
                      aria-label="Toggle Debit Mastercard"
                    >
                      <FaCcMastercard className="" />
                      <span className="text-xs">Mastercard</span>
                    </ToggleGroupItem>
                  </ToggleGroup>

                  <span className="inline-block pb-3 text-xs text-destructive">
                    {errors.payment_method?.message}
                  </span>
                </div>

                <Button
                  className="w-full flex items-center gap-2"
                  disabled={isCheckingOut}
                >
                  {isCheckingOut && <div className="spinner"></div>}
                  <span>Place Order</span>
                </Button>
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
            {/* <Card className="p-5">
            <CardTitle className="">Order Summary</CardTitle>
            <Separator className="mt-2 mb-5" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3.5">
                <span className="text-sm">Discount</span>
                <span className="font-medium"> {cartReturn && cartReturn?.cart_items.length > 0
                  ? '₦0.00'
                  : '---'}</span>{' '}
               
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
                {cartReturn && cartReturn?.cart_items.length > 0
                  ? `₦${getTotal(cartReturn.cart_items, 0).toFixed(2)}`
                  : '---'}
              </span>
            </div>
          </Card> */}

            {cartReturn && (
              <Card className="overflow-hidden">
                {/* <CardHeader className="flex flex-row items-start bg-muted/50">
              <div className="grid gap-0.5">
                <CardTitle className="group flex items-center gap-2 text-lg">
                  {' '}
                  Order Oe31b70H
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Copy className="h-3 w-3" />
                    <span className="sr-only">Copy Order ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>Date: November 23, 2023</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Truck className="h-3.5 w-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Track Order
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <MoreVertical className="h-3.5 w-3.5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Export</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Trash</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader> */}
                <CardHeader className="py-3 bg-muted/50">
                  <CardTitle className="text-lg">Order Details</CardTitle>
                </CardHeader>

                <CardContent className="p-6 text-sm">
                  <div className="grid gap-3">
                    <div className="font-semibold">Order items</div>
                    <ul className="grid gap-3">
                      {cartReturn?.cart_items?.map((cart_item) => (
                        <li
                          key={cart_item.product._id}
                          className="flex items-center justify-between"
                        >
                          <span className="text-muted-foreground">
                            <div className="grid gap-1">
                              <span className="font-semibold">
                                {cart_item.product.product_name}
                              </span>
                              <span className="text-xs">
                                Quantity: {cart_item.quantity}
                              </span>
                            </div>
                            {/* {cart_item.product.product_name} x{' '}
                            <span>{cart_item.quantity}</span> */}
                          </span>
                          <span>{`₦${getIndividualItemTotal(cart_item).toFixed(2)}`}</span>
                        </li>
                      ))}
                    </ul>
                    <Separator className="my-2" />
                    <div className="font-semibold">Price</div>
                    <ul className="grid gap-3">
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>
                          {`₦${getSubTotal(cartReturn?.cart_items).toFixed(2)}`}
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>₦0.00</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>₦0.00</span>
                      </li>
                      <li className="flex items-center justify-between font-semibold">
                        <span className="text-muted-foreground">Total</span>
                        <span>{`₦${getTotal({ items: cartReturn.cart_items }).toFixed(2)}`}</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                {/* <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div className="text-xs text-muted-foreground">
                Updated <time dateTime="2023-11-23">November 23, 2023</time>
              </div>
            </CardFooter> */}
              </Card>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
