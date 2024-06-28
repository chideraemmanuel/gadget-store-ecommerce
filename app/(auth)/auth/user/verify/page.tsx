'use client';

import FullScreenLoader from '@/components/FullScreenLoader';
import SplashScreen from '@/components/SplashScreen';
import { Button } from '@/components/ui/button';
import Error from '@/containers/error/Error';
import GlobalError from '@/containers/error/GlobalError';
import GlobalNetworkError from '@/containers/network-error/GlobalNetworkError';
import NetworkError from '@/containers/network-error/NetworkError';
import GlobalServerError from '@/containers/server-error/GlobalServerError';
import ServerError from '@/containers/server-error/ServerError';
import UserVerificationForm from '@/containers/user-verification-form/UserVerificationForm';
import useGetCurrentUser from '@/lib/hooks/auth/useGetCurrentUser';
import useLogoutUser from '@/lib/hooks/auth/useLogoutUser';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

interface Props {}

const UserVerificationPage: FC<Props> = () => {
  const router = useRouter();

  const { mutateAsync: logout, isLoading: isLoggingOut } = useLogoutUser();

  const { data: user, isLoading, isError, error } = useGetCurrentUser();

  useEffect(() => {
    if (user && user.verified) {
      console.log('user already verified, redirecting...');
      router.replace('/');
    }

    // NO USER IS LOGGED IN
    // @ts-ignore
    if (error?.response?.status > 400 && error?.response?.status < 500) {
      console.log('no user logged in, redirecting...');
      router.replace('/auth/login');
    }

    // if (error) {
    //   throw new Error( // @ts-ignore
    //     error?.response?.data?.error ||
    //       // @ts-ignore
    //       error?.message ||
    //       'An error occured'
    //   );
    // }
  }, [user]);

  // if (isLoggingOut) {
  //   return <FullScreenLoader />;
  // }

  if (isLoading) {
    return <SplashScreen />;
  }

  // @ts-ignore
  if (error?.message === 'Network Error') {
    console.log('network error');
    return <GlobalNetworkError />;
  }

  if (
    // @ts-ignore
    error?.response?.data?.error === 'Internal Server Error' ||
    // @ts-ignore
    error?.response?.status === 500
  ) {
    console.log('server error');
    return <GlobalServerError />;
  }

  if (
    error &&
    // @ts-ignore
    !(error?.response?.status > 400 && error?.response?.status < 500)
  ) {
    // @ts-ignore
    return <GlobalError message={error?.message} />;
  }

  return (
    <>
      {isLoggingOut && <FullScreenLoader />}

      {!isLoading && user && (
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
            <UserVerificationForm user={user} />
          </div>
        </>
      )}
    </>
  );
};

export default UserVerificationPage;
