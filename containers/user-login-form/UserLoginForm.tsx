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
import useLoginUser from '@/lib/hooks/auth/useLoginUser';
import { LoginCredentialsTypes } from '@/types';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
// import { DevTool } from '@hookform/devtools';

interface Props {}

const UserLoginForm: FC<Props> = () => {
  const searchParams = useSearchParams();
  const redirect_to = searchParams.get('redirect_to');

  console.log('redirect_to', redirect_to);

  const { mutate: login, isLoading } = useLoginUser();

  const form = useForm<LoginCredentialsTypes>();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = form;

  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;

  const onSubmit: SubmitHandler<LoginCredentialsTypes> = (data) => {
    console.log('submitted login credentials', data);

    login({
      credentials: data,
      redirectPath: redirect_to ?? '/',
    });
  };

  return (
    <>
      {/* <Form {...form}> */}
      <Card className="shadow-md lg:shadow-none lg:bg-transparent lg:border-none lg:dark:border-none  lg:dark:bg-transparent dark:bg-slate-900 py-3">
        <CardHeader className="text-center">
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            a, veritatis rem ratione qui explicabo!
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-3">
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
                addForgotPassword
                error={errors.password?.message}
                placeholder="Enter your password"
                id="password"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Please enter a password',
                  },
                })}
                disabled={isLoading}
              />

              <Button className="w-full" disabled={isLoading}>
                Login
              </Button>
            </div>
          </form>

          <FormBreak />

          <Button variant="outline" className="bg-transparent" asChild>
            <Link
              // href={generateGoogleOauthUrl()}
              href={'/'}
              className="flex items-center gap-2"
            >
              <FcGoogle />
              <span>Login in with google</span>
            </Link>
          </Button>
        </CardContent>

        {/* <CardFooter className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
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
        </CardFooter> */}
      </Card>
      {/* </Form> */}
    </>
  );
};

export default UserLoginForm;

const FormBreak: FC = () => {
  return (
    <div className="relative w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2">
      <div className="bg-border h-[1px]"></div>
      <span className="text-muted-foreground">or</span>
      <div className="bg-border h-[1px]"></div>
    </div>
  );
};

// TODO: update password fields to use type password
