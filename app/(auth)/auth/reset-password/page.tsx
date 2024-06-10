import { Button } from '@/components/ui/button';
import UserPasswordResetForm from '@/containers/user-password-reset-form/UserPasswordResetForm';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const UserPasswordResetPage: FC<Props> = () => {
  return (
    <>
      <Button
        asChild
        variant={'outline'}
        className="absolute top-6 right-6 z-50 bg-transparent"
      >
        <Link href={'/auth/login'}>Login</Link>
      </Button>

      <div className="relative z-10 w-[min(90%,_600px)] pt-20">
        <UserPasswordResetForm />
      </div>
    </>
  );
};

export default UserPasswordResetPage;
