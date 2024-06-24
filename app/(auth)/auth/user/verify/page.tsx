'use client';

import { Button } from '@/components/ui/button';
import UserVerificationForm from '@/containers/user-verification-form/UserVerificationForm';
import useLogoutUser from '@/lib/hooks/auth/useLogoutUser';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface Props {}

const UserVerificationPage: FC<Props> = () => {
  const router = useRouter();

  const { mutateAsync: logout } = useLogoutUser();

  return (
    <>
      <Button
        // asChild
        variant={'outline'}
        className="absolute top-6 right-6 z-50 bg-transparent"
        onClick={async () => {
          await logout();
          router.replace('/auth/login');
        }}
      >
        {/* <Link href={'/auth/register'}>Logout</Link> */}
        Logout
      </Button>

      <div className="relative z-10 w-[min(90%,_600px)] pt-20">
        <UserVerificationForm />
      </div>
    </>
  );
};

export default UserVerificationPage;
