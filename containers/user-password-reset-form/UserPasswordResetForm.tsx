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
import { notFound, useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormInput from '@/components/FormInput';
import useResetPassword from '@/lib/hooks/auth/useResetPassword';

interface Props {}

const UserPasswordResetForm: FC<Props> = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get('email');
  const reset_string = searchParams.get('reset_string');

  if (!email || !reset_string) {
    notFound();
  }

  const { complete } = useResetPassword();
  const { mutate: resetPassword, isLoading: isResettingPassword } = complete();

  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.* ).{8,16}$/;

  const form = useForm<{
    new_password: string;
    confirm_new_password: string;
  }>();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = form;

  const onSubmit: SubmitHandler<{
    new_password: string;
    confirm_new_password: string;
  }> = (data) => {
    console.log('submitted data', data);

    resetPassword({
      email: Array.isArray(email)
        ? decodeURIComponent(email[0])
        : decodeURIComponent(email),
      reset_string: Array.isArray(reset_string)
        ? reset_string[0]
        : reset_string,
      new_password: data.new_password,
    });
  };

  return (
    <>
      <Card className="shadow-md lg:shadow-none lg:bg-transparent lg:border-none lg:dark:border-none  lg:dark:bg-transparent dark:bg-slate-900 py-3">
        <CardHeader className="text-center">
          <CardTitle>Reset your password</CardTitle>
          {/* <CardDescription className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            a, veritatis rem ratione qui explicabo!
          </CardDescription> */}
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-3">
              <FormInput
                label="New password"
                placeholder="Enter your new password"
                id="new_password"
                type="password"
                disabled={isResettingPassword}
                {...register('new_password', {
                  required: {
                    value: true,
                    message: 'Please enter a password',
                  },
                  pattern: {
                    value: passwordRegex,
                    message:
                      'Password must be 8-16 characters long, and contain at least one numeric digit, and a special character',
                  },
                })}
                error={errors.new_password?.message}
              />

              <FormInput
                label="Confirm new password"
                placeholder="Confirm your new password"
                id="confirm_new_password"
                type="password"
                disabled={isResettingPassword}
                error={errors.confirm_new_password?.message}
                {...register('confirm_new_password', {
                  required: {
                    value: true,
                    message: 'Please confirm your password',
                  },
                  validate: (fieldValue) => {
                    return (
                      fieldValue === getValues('new_password') ||
                      'Passwords do not match'
                    );
                  },
                })}
              />

              <Button className="w-full" disabled={isResettingPassword}>
                Reset password
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

export default UserPasswordResetForm;
