'use client';

import useGetCurrentUser from '@/lib/hooks/auth/useGetCurrentUser';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthRoutesGuard: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: user, isLoading, isError, error } = useGetCurrentUser();

  // console.log('error:', error);

  useEffect(() => {
    // NAVIGATE TO VERIFICATION PAGE IF FETCH IS SUCCESSFUL (A USER IS LOGGED IN), BUT USER EMAIL HASN'T BEEN VERIFIED
    if (user && !user?.verified && pathname !== '/auth/user/verify') {
      console.log('user not verified, redirecting...');
      router.replace('/auth/user/verify');
      return;
    }

    // NAVIGATE TO HOME IF FETCH IS SUCCESSFUL (A USER IS LOGGED IN), AND USER HAS BEEN VERIFIED
    if (user) {
      console.log('redirect from auth routes guard');
      router.replace('/');
      return;
    }

    // IF ERROR IS A NETWORK ERROR, THROW ERROR (WILL BE CAUGHT BY ERROR.TSX IN ROOT)
    // @ts-ignore
    if (error?.message === 'Network Error') {
      console.log('network error');
      throw new Error('Network Error');
    }

    if (
      // @ts-ignore
      error?.response?.data?.error === 'Internal Server Error' ||
      // @ts-ignore
      error?.response?.status === 500
    ) {
      console.log('server error');
      throw new Error('Internal Server Error');
    }
  }, [user, error]);

  // if (isLoading) {
  //   return <div>Loadingggg</div>;
  // }

  // ONLY RENDER AUTH PAGE IF SERVER SENDS BACK ERROR (USER NOT AUTHENTICATED), OR IF THERE'S A USER THAT HASN'T BEEN VERIFIED, AND IS CURRENTLY ON VERIFICATION PAGE... OTHERWISE, PAGE WILL BE REDIRECTED (FROM USE EFFECT)
  return (
    <>
      {(!user ??
        (user && !user?.verified && pathname === '/auth/user/verify')) &&
        !isLoading &&
        isError &&
        // @ts-ignore
        error?.message !== 'Network Error' &&
        // @ts-ignore
        error?.response?.data?.error !== 'Internal Server Error' &&
        children}
    </>
  );
};

export default AuthRoutesGuard;
