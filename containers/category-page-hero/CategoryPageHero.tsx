import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import heroImage from '@/assets/home-hero-image.jpg';
import { CategoryTypes } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  category?: CategoryTypes;
  isFetchingCategory: boolean;
  // isError: boolean;
  // error: unknown;
}

const CategoryPageHero: FC<Props> = ({
  category,
  isFetchingCategory,
  // isError,
  // error,
}) => {
  return (
    <>
      {isFetchingCategory && <Skeleton className="h-[50vh] w-full" />}

      {!isFetchingCategory && category && (
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
                {category.billboard.head_text}
              </h1>
              <p>
                {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            vero? */}
                {category.billboard.paragraph}
              </p>

              {/* <Button>Shop now</Button> */}
            </div>

            <div className="flex-1 h-full hidden sm:flex justify-center">
              <Image
                // src={iphoneXR.src}
                src={category.billboard.billboard_image}
                alt={category.name}
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

export default CategoryPageHero;

//  {!isFetchingCategory && category && (
//         <section
//           className="h-[50vh] relative flex justify-center items-center text-center after:content-[''] after:w-full after:h-full after:bg-slate-950 after:bg-opacity-70  after:absolute"
//           style={{
//             background: `url(${category.billboard.billboard_image}) no-repeat center center/cover`,
//           }}
//         >
//           {/* <Image src={homeHeroImage.src} alt="Hero" /> */}
//           <div className="container mx-auto flex flex-col justify-center items-center gap-5 relative z-10 text-[hsl(210_40%_98%)]">
//             <h1 className="font-bold text-4xl md:text-5xl">
//               {/* Your one-stop-shop form all your technology needs! */}
//               {category.billboard.head_text}
//             </h1>

//             {category.billboard.name && (
//               <p className="text-base sm:text-lg w-[min(90%,_1000px)]">
//                 {/* We offer the latest gadgets and electronics from the most trusted
//               brands in the industry. Need a wide range of accessories and
//               peripherals to enhance your device's performance and protest your
//               investment? You're in the right place! */}
//                 {category.billboard.paragraph}
//               </p>
//             )}

//             {/* probably incluse button and make scroll down to products..? */}
//             {/* <Button
//               asChild
//               size={'lg'}
//               // variant={'secondary'}
//               className="bg-[hsl(210_40%_98%)] text-[hsl(222.2_47.4%_11.2%)] hover:bg-[rgba(248,250,252,0.8)]"
//             >
//               <Link
//                 href={'/'}
//                 //   className="text-base sm:text-lg"
//               >
//                 Shop now
//               </Link>
//             </Button> */}
//           </div>
//         </section>
//       )}
