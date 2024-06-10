import { Button } from '@/components/ui/button';
import UserVerificationForm from '@/containers/user-verification-form/UserVerificationForm';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const UserVerificationPage: FC<Props> = () => {
  return (
    <>
      <Button
        // asChild
        variant={'outline'}
        className="absolute top-6 right-6 z-50 bg-transparent"
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
