// 'use client';

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
import AddToCartButton from './AddToCartButton';
import useAddItemToCart from '@/lib/hooks/cart/useAddItemToCart';

interface Props {
  product: ProductTypes;
}

const ProductCard: FC<Props> = ({ product }) => {
  // const { mutate: addToCart } = useAddItemToCart();

  return (
    // <Card className="inline-block shadow-md dark:bg-slate-900 [@media_(min-width:_375px)]:max-h-fit max-h-[50vh]">
    <Card className="inline-flex flex-col justify-between shadow-md dark:bg-slate-900 h-full [@media_(min-width:_375px)]:max-h-fit max-h-[50vh]">
      <Link href={`/products/${product._id}`}>
        <CardHeader className="p-3 md:p-4">
          {/* <Image src={image.src} alt="product name" width={1000} height={1000} /> */}
          <Image
            src={product.product_image}
            alt={`${product.product_name}`}
            width={1000}
            height={1000}
            className="aspect-square max-h-full w-auto"
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
        <AddToCartButton product={product} />
        {/* <Button className="w-full" onClick={() => addToCart(product)}>
          Add to cart
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
