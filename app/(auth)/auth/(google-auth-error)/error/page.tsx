import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import errorImage from '@/assets/access-denied.svg';

interface Props {}

const AuthErrorPage: FC<Props> = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 min-w-screen min-h-screen bg-background z-50 flex flex-col justify-center items-center gap-7 mx-auto py-10 px-7">
        <div className="absolute top-6 container flex justify-between items-center">
          <Logo />
          {/* <ThemeSwitcher /> */}
        </div>

        <div className="max-w-[300px] h-auto">
          <Image
            src={errorImage}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-3 text-center">
          <h2 className="font-bold text-2xl md:3xl">Authentication Failed</h2>

          <p className="text-muted-foreground w-[90%] mx-auto">
            Something went wrong while trying to authenticate user with Google.
          </p>

          <Button className="w-[250px] mx-auto" asChild>
            <Link href={'/auth/login'}>Back to Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AuthErrorPage;
