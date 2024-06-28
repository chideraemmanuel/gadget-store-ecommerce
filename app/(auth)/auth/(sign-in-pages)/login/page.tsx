import Image from 'next/image';
import { FC } from 'react';
import image from '@/assets/home-hero-image.jpg';
import Logo from '@/components/Logo';
import UserRegistrationForm from '@/containers/user-registration-form/UserRegistrationForm';
import { Button } from '@/components/ui/button';
import UserLoginForm from '@/containers/user-login-form/UserLoginForm';
import Link from 'next/link';

interface Props {}

const UserLoginPage: FC<Props> = () => {
  return (
    <>
      <Button
        asChild
        variant={'outline'}
        className="absolute top-6 right-6 z-50 bg-transparent"
      >
        <Link href={'/auth/register'}>Sign up</Link>
      </Button>

      <div className="relative z-10 w-[min(90%,_600px)] pt-20">
        <UserLoginForm />
      </div>
    </>
  );
};

export default UserLoginPage;
