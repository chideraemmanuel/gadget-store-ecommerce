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
import { ProductTypes } from '@/types';

interface Props {
  product: ProductTypes;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Card className="inline-block shadow-md dark:bg-slate-900">
      <Link href={'/products/1'}>
        <CardHeader>
          {/* <Image src={image.src} alt="product name" width={300} height={300} /> */}
          <Image
            src={product.product_image}
            alt={`${product.product_name}`}
            width={300}
            height={300}
          />
        </CardHeader>

        <Separator />

        <CardContent className="flex flex-col gap-2 md:gap-3 p-3 md:p-4 pb-2 md:pb-3">
          <CardTitle className="text-base lg:text-lg line-clamp-2">
            {product.product_name}
          </CardTitle>

          <CardDescription className="text-xs lg:text-sm line-clamp-2">
            {product.description}
          </CardDescription>

          <span className="font-semibold text-base lg:text-lg">
            ₦{product.price}
          </span>
        </CardContent>
      </Link>

      <CardFooter className="px-3 md:px-4 pb-3 md:pb-4">
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
