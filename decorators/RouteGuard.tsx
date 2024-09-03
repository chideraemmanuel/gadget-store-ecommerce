'use client';

import Error from '@/components/error/Error';
import NetworkError from '@/components/network-error/NetworkError';
import ServerError from '@/components/server-error/ServerError';
import useGetCurrentUser from '@/lib/hooks/auth/useGetCurrentUser';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const RouteGuard: FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const {
    data: user,
    isLoading,
    error,
    isError,
    isSuccess,
    refetch,
  } = useGetCurrentUser();

  useEffect(() => {
    // // IF ERROR IS A NETWORK ERROR, THROW ERROR (WILL BE CAUGHT BY ERROR.TSX IN SEGMENT)
    // // @ts-ignore
    // if (error?.message === 'Network Error') {
    //   console.log('network error');
    //   throw new Error('Network Error');
    // }

    // if (
    //   // @ts-ignore
    //   error?.response?.data?.error === 'Internal Server Error' ||
    //   // @ts-ignore
    //   error?.response?.status === 500
    // ) {
    //   console.log('server error');
    //   throw new Error('Internal Server Error');
    // }

    // NAVIGATE TO LOGIN PAGE IF SERVER SENDS BACK AN ERROR (USER NOT AUTHENTICATED)
    if (
      error &&
      // @ts-ignore
      error?.response?.status > 400 &&
      // @ts-ignore
      error?.response?.status < 500
    ) {
      router.replace(`/auth/login?redirect_to=${pathname}`);
    }

    if (user && !user?.verified) {
      router.replace('/auth/user/verify');
    }
  }, [error, user]);

  // @ts-ignore
  if (error?.message === 'Network Error') {
    console.log('network error');
    return <NetworkError />;
  }

  if (
    // @ts-ignore
    error?.response?.data?.error === 'Internal Server Error' ||
    // @ts-ignore
    error?.response?.status === 500
  ) {
    console.log('server error');
    return <ServerError />;
  }

  if (
    error &&
    // @ts-ignore
    !(error?.response?.status > 400 && error?.response?.status < 500)
  ) {
    // @ts-ignore
    return <Error message={error?.response?.data?.error || error.message} />;
  }

  // RENDER CHILDREN ONLY WHEN FETCH IS SUCCESSFUL
  return <>{isSuccess && !isLoading && user && user.verified && children}</>;
  // return <>{children}</>;
};

export default RouteGuard;
