import Link from 'next/link';
import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';
import image from '@/assets/phone.png';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

interface Props {}

const ProductCard: FC<Props> = () => {
  return (
    <Card className="inline-block shadow-md dark:bg-slate-900">
      <Link href={'#'}>
        <CardHeader>
          <Image src={image.src} alt="product name" width={300} height={300} />
        </CardHeader>

        <Separator />

        <CardContent className="flex flex-col gap-2 md:gap-3 p-3 md:p-4 pb-2 md:pb-3">
          <CardTitle className="text-base lg:text-lg line-clamp-2">
            Product namee Product namee Product namee Product namee
          </CardTitle>

          <CardDescription className="text-xs lg:text-sm line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur temporibus dolores iure aperiam rem? Quibusdam sint
            aliquam rerum cumque molestiae?
          </CardDescription>

          <span className="font-semibold text-base lg:text-lg">$999.99</span>
        </CardContent>
      </Link>

      <CardFooter className="px-3 md:px-4 pb-3 md:pb-4">
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
