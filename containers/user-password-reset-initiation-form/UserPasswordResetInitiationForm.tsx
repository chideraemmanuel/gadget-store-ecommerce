'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import FormInput from '@/components/FormInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import useResetPassword from '@/lib/hooks/auth/useResetPassword';

interface Props {}

const UserPasswordResetInitiationForm: FC<Props> = () => {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;

  const form = useForm<{ email: string }>();

  const { initiate } = useResetPassword();
  const { mutate: initiatePasswordReset, isLoading: isSendingResetEmail } =
    initiate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit: SubmitHandler<{ email: string }> = (data) => {
    console.log('submitted email', data);
    initiatePasswordReset(data.email);
  };

  return (
    <>
      <Card className="shadow-md lg:shadow-none lg:bg-transparent lg:border-none lg:dark:border-none  lg:dark:bg-transparent dark:bg-slate-900 py-3">
        <CardHeader className="text-center">
          <CardTitle>Reset your password</CardTitle>
          <CardDescription className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
            Please enter the email address associated with your account. We will
            send you an email with instructions on how to recover your password.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-3">
              <div>
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                {/* <Input placeholder="e.g johndoe@gmail.com" id="email" /> */}
                <FormInput
                  label="Email"
                  placeholder="e.g johndoe@gmail.com"
                  id="email"
                  disabled={isSendingResetEmail}
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Please enter an email address',
                    },
                    pattern: {
                      value: emailRegex,
                      message: 'Invalid email format',
                    },
                  })}
                  error={errors.email?.message}
                />
              </div>

              <Button
                className="w-full flex items-center gap-2"
                disabled={isSendingResetEmail}
              >
                {isSendingResetEmail && <div className="spinner"></div>}
                <span>Send reset email</span>
              </Button>
            </div>
          </form>
        </CardContent>

        {/* <CardFooter className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          <p className="text-muted-foreground text-sm w-full">
            <span>Didn't receive OTP? </span>
            <Button
              type="button"
              variant={'link'}
              asChild
              className="h-auto px-0 py-0 text-xs text-primary "
            >
              <Link href={'#'}>Resend here</Link>
            </Button>
          </p>
        </CardFooter> */}
      </Card>
    </>
  );
};

export default UserPasswordResetInitiationForm;
