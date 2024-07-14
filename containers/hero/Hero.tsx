import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import blobScene from '@/assets/blob-scene.svg';
import bg from '@/assets/blob-scatter-haikei.svg';
import iphoneXR from '@/assets/iphone-xr.png';
import { BillboardTypes } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  billboard?: BillboardTypes;
  isFetchingBillboard: boolean;
}

const Hero: FC<Props> = ({ billboard, isFetchingBillboard }) => {
  return (
    // <section
    //   className="h-[70vh] relative flex justify-center items-center text-center after:content-[''] after:w-full after:h-full after:bg-slate-950 after:bg-opacity-70  after:absolute"
    //   // style={{
    //   //   background: `url(${homeHeroImage.src}) no-repeat center center/cover`,
    //   // }}
    //   style={{
    //     background: `url(${billboard_image}) no-repeat center center/cover`,
    //   }}
    // >
    //   <div className="container mx-auto flex flex-col justify-center items-center gap-5 relative z-10 text-[hsl(210_40%_98%)]">
    //     <h1 className="font-bold text-4xl md:text-5xl">{head_text}</h1>

    //     <p className="text-base sm:text-lg w-[min(90%,_1000px)]">{paragraph}</p>

    //     <Button
    //       asChild
    //       size={'lg'}
    //       // variant={'secondary'}
    //       // className="bg-[hsl(210_40%_98%)] text-[hsl(222.2_47.4%_11.2%)] hover:bg-[rgba(248,250,252,0.8)]"
    //     >
    //       <Link
    //         href={'/products'}
    //         //   className="text-base sm:text-lg"
    //       >
    //         Shop now
    //       </Link>
    //     </Button>
    //   </div>
    // </section>
    <>
      {isFetchingBillboard && <Skeleton className="h-[50vh] w-full" />}

      {!isFetchingBillboard && billboard && (
        <section
          // className="bg-accent text-slate-900 py-5"
          className="bg-accent py-5"
          // style={{
          //   background: `url(${bg.src}) no-repeat center center/cover`,
          // }}
        >
          <div className="h-[50vh] container mx-auto flex items-center justify-between gap-7">
            <div className="flex-1 flex flex-col items-start gap-3">
              <h1 className="font-bold text-2xl [@media_(min-width:_380px)]:text-3xl">
                {/* Your one-stop-shop for all your technology needs! */}
                {billboard.head_text}
              </h1>
              <p>
                {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            vero? */}
                {billboard.paragraph}
              </p>

              <Button>Shop now</Button>
            </div>

            <div className="flex-1 h-full hidden sm:flex justify-center">
              <Image
                // src={iphoneXR.src}
                src={billboard.billboard_image}
                alt=""
                width={1000}
                height={1000}
                className="w-auto h-full"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
