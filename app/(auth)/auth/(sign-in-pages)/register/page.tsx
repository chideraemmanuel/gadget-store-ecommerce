import { FC } from 'react';
import UserRegistrationForm from '@/containers/user-registration-form/UserRegistrationForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {}

const UserRegistrationPage: FC<Props> = () => {
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
        <UserRegistrationForm />
      </div>
    </>
  );
};

export default UserRegistrationPage;
