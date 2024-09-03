import { FC } from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image, { StaticImageData } from 'next/image';
import serviceImage from '@/assets/service.png';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
}

const ServiceCard: FC<Props> = ({ title, description, href, image }) => {
  return (
    <>
      {/* <Card className="overflow-hidden grid grid-rows-2 max-h-[350px] max-w-none md:max-w-[300px] dark:bg-slate-900"> */}
      <Link href={href}>
        <Card className="overflow-hidden grid grid-rows-2 h-[370px] max-w-none md:max-w-[400px] bg-accent dark:bg-slate-900">
          <CardHeader className="flex flex-col justify-center">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>

          <CardFooter className="p-0">
            <Image
              src={image.src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default ServiceCard;
