'use client';

import { Button } from '@/components/ui/button';
import { FC } from 'react';
import errorImage from '@/assets/error.svg';
import Image from 'next/image';

interface Props {
  retry: () => void;
}

const NetworkError: FC<Props> = ({ retry }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-7 min-h-[calc(100vh-70px)] container mx-auto p-10">
      <div className="max-w-[300px] h-auto">
        <Image
          src={errorImage}
          alt=""
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-bold text-2xl md:3xl">Network Error</h2>

        <p className="text-muted-foreground w-[90%] mx-auto">
          Please check your internet connection and try again
        </p>

        <Button onClick={() => retry()} className="w-[200px] mx-auto">
          Retry
        </Button>
      </div>
    </div>
  );
};

export default NetworkError;
