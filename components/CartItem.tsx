import { FC } from 'react';
import image from '@/assets/phone.png';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ProductTypes } from '@/types';

interface Props extends ProductTypes {
  quantity: number;
}

const CartItem: FC<Props> = ({
  product_name,
  product_image,
  price,
  quantity,
}) => {
  return (
    <Card className="flex items-center flex-wrap justify-between gap-5 p-2">
      {/* <CardContent> */}
      {/* <div className="flex items-center gap-3"> */}
      <div className="flex items-center gap-3">
        <div className="w-20 h-20">
          <Image
            src={product_image}
            alt={product_name}
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>

        <div>
          <CardTitle className="text-lg">{product_name}</CardTitle>
          <span>{price}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 border p-1 rounded-lg">
        {/* quantity */}
        {/* <div className="border p-1 rounded-lg">
          <span className="text-xs block pb-1 text-center">Quantity</span>
          <Separator />
          <div className="flex items-center gap-3 pt-1">
            <Button
              size={'icon'}
              variant={'secondary'}
              className="p-1 h-auto w-auto"
            >
              <Plus className="w-1/2" />
            </Button>

            <span>1</span>

            <Button
              size={'icon'}
              variant={'secondary'}
              className="p-1 h-auto w-auto"
            >
              <Minus className="w-1/2" />
            </Button>
          </div>
        </div> */}

        <div className="flex items-center gap-3 pt-1">
          <Button
            size={'icon'}
            variant={'secondary'}
            className="p-1 h-auto w-auto"
          >
            <Plus className="w-1/2" />
          </Button>

          <span>{quantity}</span>

          <Button
            size={'icon'}
            variant={'secondary'}
            className="p-1 h-auto w-auto"
          >
            <Minus className="w-1/2" />
          </Button>
        </div>

        <Separator orientation="vertical" />

        <Button
          size={'icon'}
          variant={'ghost'}
          className="p-1 h-auto w-auto hover:bg-destructive hover:text-destructive-foreground"
        >
          <Trash2 />
        </Button>
      </div>

      {/* </div> */}

      {/* </CardContent> */}
    </Card>
  );
};

export default CartItem;
