import { FC } from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';
import serviceImage from '@/assets/service.png';

interface Props {}

const ServiceCard: FC<Props> = () => {
  return (
    <>
      {/* <Card className="overflow-hidden grid grid-rows-2 max-h-[350px] max-w-none md:max-w-[300px] dark:bg-slate-900"> */}
      <Card className="overflow-hidden grid grid-rows-2 max-h-[350px] max-w-none md:max-w-[400px] dark:bg-slate-900">
        <CardHeader className=" flex flex-col justify-center">
          <CardTitle className="">Frequently asked questions</CardTitle>
          <CardDescription>
            Updates on safe shopping in our store
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-0">
          <Image
            src={serviceImage.src}
            alt=""
            width={300}
            height={300}
            className="w-full h-full"
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default ServiceCard;
