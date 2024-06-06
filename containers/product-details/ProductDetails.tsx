import Image from 'next/image';
import { FC } from 'react';
import phone from '@/assets/phone.png';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface Props {
  productId: string;
}

const ProductDetails: FC<Props> = ({ productId }) => {
  return (
    <section className="py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center items-center bg-accent p-10 rounded-lg max-h-[40vh] md:max-h-[50vh]">
          <Image
            src={phone.src}
            alt=""
            width={300}
            height={300}
            className="aspect-square max-h-full w-auto"
          />
        </div>

        <div className="">
          <div className="flex flex-col gap-5 pb-7">
            <h2 className="font-semibold text-xl md:text-2xl">
              Product name goes here
            </h2>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quod. Adipisci, porro? Deleniti eius accusamus cum in
              asperiores, voluptate exercitationem!
            </p>
            <span className="font-semibold text-2xl md:text-3xl">$115.00</span>
          </div>

          <div>
            <Button className="flex items-center gap-1" size={'lg'}>
              <ShoppingCart />
              <span>Add to cart</span>
            </Button>
          </div>
        </div>
        {/* <span>Product Details {productId}</span> */}
      </div>
    </section>
  );
};

export default ProductDetails;
