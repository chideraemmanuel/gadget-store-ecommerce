'use client';

import { Button } from '@/components/ui/button';
import GlobalNetworkError from '@/components/network-error/GlobalNetworkError';
import NetworkError from '@/components/network-error/NetworkError';
import GlobalServerError from '@/components/server-error/GlobalServerError';
import ServerError from '@/components/server-error/ServerError';
import { ErrorPageProps } from '@/types';
import { FC } from 'react';

const HomePageError: FC<ErrorPageProps> = ({ error, reset }) => {
  // CATCHES NETWORK ERROR
  if (error.message === 'Network Error' || error.message === 'failed fetch') {
    // return <NetworkError retry={reset} />;
    return <GlobalNetworkError retry={reset} />;
  }

  // CATCHES SERVER ERROR
  if (error.message === 'Internal Server Error') {
    return <GlobalServerError retry={reset} />;
  }

  return (
    <>
      <h2>An error occured</h2>
      <span>{error.message}</span>
      <Button onClick={() => reset()}>Retry</Button>
    </>
  );
};

export default HomePageError;
