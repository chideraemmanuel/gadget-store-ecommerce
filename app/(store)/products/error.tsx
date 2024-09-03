'use client';

import { Button } from '@/components/ui/button';
import NetworkError from '@/components/network-error/NetworkError';
import ServerError from '@/components/server-error/ServerError';
import { ErrorPageProps } from '@/types';
import { FC } from 'react';

const ProductsPageError: FC<ErrorPageProps> = ({ error, reset }) => {
  // CATCHES NETWORK ERROR
  if (error.message === 'Network Error' || error.message === 'failed fetch') {
    return <NetworkError retry={reset} />;
  }

  // CATCHES SERVER ERROR
  if (error.message === 'Internal Server Error') {
    return <ServerError retry={reset} />;
  }

  return (
    <>
      <h2>An error occured while fetching products</h2>
      <span>{error.message}</span>
      <Button onClick={() => reset()}>Retry</Button>
    </>
  );
};

export default ProductsPageError;
