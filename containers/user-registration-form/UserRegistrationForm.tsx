'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import generateGoogleOauthUrl from '@/lib/helpers/generateGoogleOauthUrl';
import useRegisterUser from '@/lib/hooks/auth/useRegisterUser';
import { RegistrationCredentialsTypes } from '@/types';
import Link from 'next/link';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
import { FcGoogle } from 'react-icons/fc';

interface Props {}

const UserRegistrationForm: FC<Props> = () => {
  const { mutate: registerUser, isLoading, isError, error } = useRegisterUser();

  const form = useForm<
    RegistrationCredentialsTypes & { confirm_password: string }
  >();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    getValues,
  } = form;

  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.* ).{8,16}$/;

  const onSubmit: SubmitHandler<RegistrationCredentialsTypes> = (data) => {
    console.log('submitted data', data);
    registerUser({
      credentials: data,
      redirectPath: '/auth/user/verify',
    });
  };

  return (
    <>
      {/* <Form {...form}> */}
      <Card className="shadow-md lg:shadow-none lg:bg-transparent lg:border-none lg:dark:border-none  lg:dark:bg-transparent dark:bg-slate-900 py-3">
        <CardHeader className="text-center">
          <CardTitle>Create account</CardTitle>
          <CardDescription>
            Fill in the details to create an account. Please enter a valid email
            address, as you would have to verify your email upon sign up.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
              {/* <div className="flex flex-col sm:flex-row sm:items-start gap-3"> */}
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-start gap-3">
                {/* FIRST NAME */}
                <FormInput
                  label="First name"
                  error={errors.first_name?.message}
                  placeholder="e.g John"
                  id="first_name"
                  {...register('first_name', {
                    required: 'Please enter your first name',
                  })}
                  disabled={isLoading}
                />

                {/* LAST NAME */}
                <FormInput
                  label="Last name"
                  error={errors.last_name?.message}
                  placeholder="e.g Doe"
                  id="last_name"
                  {...register('last_name', {
                    required: {
                      value: true,
                      message: 'Please enter your last name',
                    },
                  })}
                  disabled={isLoading}
                />
              </div>

              {/* EMAIL */}
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
                disabled={isLoading}
              />

              {/* PASSWORD */}
              <FormInput
                label="Password"
                type="password"
                error={errors.password?.message}
                placeholder="Enter password"
                id="password"
                {...register('password', {
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
                disabled={isLoading}
              />

              {/* CONFIRM PASSWORD */}
              <FormInput
                label="Confirm password"
                type="password"
                error={errors.confirm_password?.message}
                placeholder="Confirm password"
                id="confirm_password"
                {...register('confirm_password', {
                  required: {
                    value: true,
                    message: 'Please confirm your password',
                  },
                  validate: (fieldValue) => {
                    return (
                      fieldValue === getValues('password') ||
                      'Passwords do not match'
                    );
                  },
                })}
                disabled={isLoading}
              />

              <Button
                className="w-full flex items-center gap-2"
                disabled={isLoading}
              >
                {isLoading && <div className="spinner"></div>}
                <span>Create account</span>
              </Button>
            </div>
          </form>
          <FormBreak />

          <Button
            variant="outline"
            className="bg-transparent"
            disabled={isLoading}
            asChild
          >
            <Link
              href={generateGoogleOauthUrl()}
              className="flex items-center gap-2"
            >
              <FcGoogle />
              <span>Sign in with google</span>
            </Link>
          </Button>
        </CardContent>

        <CardFooter className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          <p className="text-muted-foreground text-sm w-full">
            By clicking continue, you agree to our{' '}
            <Link href={'/'} className="underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href={'/'} className="underline">
              Privacy policy
            </Link>
          </p>
        </CardFooter>
      </Card>
      {/* </Form> */}
    </>
  );
};

export default UserRegistrationForm;

const FormBreak: FC = () => {
  return (
    <div className="relative w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2">
      <div className="bg-border h-[1px]"></div>
      <span className="text-muted-foreground">or</span>
      <div className="bg-border h-[1px]"></div>
    </div>
  );
};
