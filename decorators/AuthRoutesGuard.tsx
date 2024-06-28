'use client';

import SplashScreen from '@/components/SplashScreen';
import Error from '@/containers/error/Error';
import GlobalError from '@/containers/error/GlobalError';
import GlobalNetworkError from '@/containers/network-error/GlobalNetworkError';
import NetworkError from '@/containers/network-error/NetworkError';
import GlobalServerError from '@/containers/server-error/GlobalServerError';
import ServerError from '@/containers/server-error/ServerError';
import useGetCurrentUser from '@/lib/hooks/auth/useGetCurrentUser';
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { FC, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthRoutesGuard: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirect_to = searchParams.get('redirect_to');

  const { data: user, isLoading, isError, error } = useGetCurrentUser();

  // console.log('error:', error);

  useEffect(() => {
    console.log('user verified', user?.verified);
    // NAVIGATE TO VERIFICATION PAGE IF FETCH IS SUCCESSFUL (A USER IS LOGGED IN), BUT USER EMAIL HASN'T BEEN VERIFIED
    if (user && !user?.verified && pathname !== '/auth/user/verify') {
      console.log('user not verified, redirecting...');
      router.replace('/auth/user/verify');
      return;
    }

    // NAVIGATE TO HOME IF FETCH IS SUCCESSFUL (A USER IS LOGGED IN), AND USER HAS BEEN VERIFIED
    if (user && user.verified) {
      console.log('redirect from auth routes guard');
      router.replace(redirect_to || '/', { scroll: false });
      return;
    }

    // // IF ERROR IS A NETWORK ERROR, THROW ERROR (WILL BE CAUGHT BY ERROR.TSX IN ROOT)
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
  }, [user]);

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

  // ONLY RENDER AUTH PAGE IF SERVER SENDS BACK ERROR (USER NOT AUTHENTICATED), OTHERWISE, PAGE WILL BE REDIRECTED (FROM USE EFFECT)
  return (
    <>
      {!user &&
        !isLoading &&
        isError &&
        // @ts-ignore
        error?.message !== 'Network Error' &&
        // @ts-ignore
        error?.response?.data?.error !== 'Internal Server Error' && {
          children,
        }}
    </>
    // {children}
  );
};

export default AuthRoutesGuard;
