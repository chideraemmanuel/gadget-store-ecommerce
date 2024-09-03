'use client';

import SplashScreen from '@/components/SplashScreen';
import { Separator } from '@/components/ui/separator';
import Brands from '@/containers/brands/Brands';
import Categories from '@/containers/categories/Categories';
import Footer from '@/containers/footer/Footer';
import Hero from '@/containers/hero/Hero';
import Navbar from '@/containers/navbar/Navbar';
import ProductsCarousel from '@/containers/products-carousel/ProductsCarousel';
import Products from '@/containers/products/Products';
import Services from '@/containers/services/Services';
import useGetHomeBillboard from '@/lib/hooks/useGetHomeBillboard';
import useGetProducts from '@/lib/hooks/useGetProducts';
import { LaptopIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import iphoneX from '@/assets/iphone-x.png';
import iphoneXR from '@/assets/iphone-xr.png';
import test from '@/assets/test.png';
import billboard_image from '@/assets/blob-scatter-haikei.svg';
import { Button } from '@/components/ui/button';
import GlobalNetworkError from '@/components/network-error/GlobalNetworkError';
import GlobalServerError from '@/components/server-error/GlobalServerError';
import useGetRandomProducts from '@/lib/hooks/useGetRandomProducts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeader from '@/components/SectionHeader';

export default function Home() {
  const {
    data: homeBillboard,
    isLoading: isFetchingHomeBillboard,
    isError: isErrorFetchingHomeBillboard,
    error: errorFetchingHomeBillboard,
  } = useGetHomeBillboard();

  const {
    data: featuredProducts,
    isLoading: isFetchingFeaturedProducts,
    isError: isErrorFetchingFeaturedProducts,
    error: errorFetchingFeaturedProducts,
  } = useGetProducts({ featured: 'true' });

  // const {
  //   data: products,
  //   isLoading: isFetchingProducts,
  //   isError: isErrorFetchingProducts,
  //   error: errorFetchingProducts,
  // } = useGetProducts({ featured: 'false' });

  const {
    data: randomProducts,
    isLoading: isFetchingRandomProducts,
    isError: isErrorFetchingRandomProducts,
    error: errorFetchingRandomProducts,
  } = useGetRandomProducts({ featured: 'false' });

  // const productss = [
  //   {
  //     _id: 'hzxis',
  //     product_name: 'iPhone X',
  //     brand: {
  //       _id: 'kodkjid',
  //       name: 'string',
  //       brand_logo: '',
  //     },
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis eaque, ducimus animi dolores aspernatur id ea quod aut quas exercitationem? Quos quisquam itaque odit iure vero! Sit, velit cumque.',
  //     price: 746.65,
  //     category: {
  //       _id: 'jkxjs',
  //       name: 'Phones',
  //       billboard: {
  //         _id: 'isoijcoi',
  //         name: 'Phone Billboard',
  //         head_text: 'Discover the right phone for you',
  //         paragraph:
  //           'Lorem ipsurnatur id ea quod aut quas exercitationem? Quos quisquam itaque odit iure vero! Sit, velit cumque.',
  //         billboard_image: '',
  //       },
  //     },
  //     product_image: iphoneX.src,
  //     count_in_stock: 3,
  //     featured: true,
  //   },
  //   {
  //     _id: 'hzxis',
  //     product_name: 'iPhone XR',
  //     brand: {
  //       _id: 'kodkjid',
  //       name: 'string',
  //       brand_logo: '',
  //     },
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis eaque, ducimus animi dolores aspernatur id ea quod aut quas exercitationem? Quos quisquam itaque odit iure vero! Sit, velit cumque.',
  //     price: 746.65,
  //     category: {
  //       _id: 'jkxjs',
  //       name: 'Phones',
  //       billboard: {
  //         _id: 'isoijcoi',
  //         name: 'Phone Billboard',
  //         head_text: 'Discover the right phone for you',
  //         paragraph:
  //           'Lorem ipsurnatur id ea quod aut quas exercitationem? Quos quisquam itaque odit iure vero! Sit, velit cumque.',
  //         billboard_image: '',
  //       },
  //     },
  //     product_image: iphoneXR.src,
  //     count_in_stock: 2,
  //     featured: true,
  //   },
  // ];

  // useEffect(() => {
  //   if (
  //     errorFetchingHomeBillboard ||
  //     errorFetchingFeaturedProducts ||
  //     errorFetchingProducts
  //   ) {
  //     // WILL BE CAUGHT BY ERROR.TSX IN SEGMENT
  //     const error =
  //       errorFetchingHomeBillboard ||
  //       errorFetchingFeaturedProducts ||
  //       errorFetchingProducts;

  //     throw new Error(
  //       // @ts-ignore
  //       error?.response?.data?.error ||
  //         // @ts-ignore
  //         error?.message ||
  //         'An error occured'
  //     );
  //   }
  // }, [
  //   errorFetchingHomeBillboard,
  //   errorFetchingFeaturedProducts,
  //   errorFetchingProducts,
  // ]);

  // if (
  //   isFetchingFeaturedProducts ||
  //   isFetchingProducts ||
  //   isFetchingHomeBillboard
  // ) {
  //   return <SplashScreen />;
  // }

  // const error =
  //   errorFetchingHomeBillboard ||
  //   errorFetchingFeaturedProducts ||
  //   errorFetchingProducts;

  // // @ts-ignore
  // if (error?.message === 'Network Error') {
  //   console.log('network error');
  //   return <GlobalNetworkError />;
  // }

  // if (
  //   // @ts-ignore
  //   error?.response?.data?.error === 'Internal Server Error' ||
  //   // @ts-ignore
  //   error?.response?.status === 500
  // ) {
  //   console.log('server error');
  //   return <GlobalServerError />;
  // }

  // if (error) {
  //   // @ts-ignore
  //   return <GlobalError message={error?.message} />;
  // }

  return (
    <>
      <Hero
        billboard={homeBillboard?.[0]}
        isFetchingBillboard={isFetchingHomeBillboard}
      />
      <Categories />
      {/* {featuredProducts && ( */}
      <ProductsCarousel
        // header="New Arrivals"
        header="Featured Products"
        products={featuredProducts?.data}
        isLoading={isFetchingFeaturedProducts}
      />
      {/* )} */}
      {/* new products? popular products? */}
      {/* make skeleton */}
      <Brands />
      <Products
        products={randomProducts}
        isLoading={isFetchingRandomProducts}
      />
      <Services />

      <section className="container mx-auto py-7">
        <SectionHeader>FAQs</SectionHeader>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>
              than almost planet fruit sand pen blew industrial bear each least
              scared canal must victory?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nihil omnis optio tenetur, odit fugiat aliquam dolores praesentium
              dignissimos ipsum accusantium. Tempora, beatae? Error, sunt
              debitis! At aliquid quasi in velit mollitia aperiam quaerat sed!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>
              edge carefully moving someone trouble fly swimming art hidden noun
              round?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              repellendus ea excepturi nesciunt non doloremque, vel ipsum
              ratione. Praesentium odit cumque at aliquid laboriosam placeat
              soluta temporibus, voluptatibus magni vitae?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>
              structure stomach teeth shirt directly construction burn accurate
              jump younger hit over easier?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda nisi inventore minus odit officiis natus vero!
              Cupiditate sed officiis accusamus dignissimos soluta corrupti,
              magni earum blanditiis doloribus reiciendis consequuntur totam
              perspiciatis eaque. Nam laboriosam omnis, delectus minus dolore
              corrupti eum.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      {/* <Products products={productss} /> */}
      {/* ************************* */}
      {/* ************************* */}
      {/* <section
        className="bg-accent text-slate-900 py-5"
        style={{
          background: `url(${billboard_image.src}) no-repeat center center/cover`,
        }}
      >
        <div className="h-[50vh] container mx-auto flex items-center justify-between gap-7">
          <div className="flex-1 flex flex-col items-start gap-3">
            <h1 className="font-bold text-2xl [@media_(min-width:_380px)]:text-3xl">
              Your one-stop-shop for all your technology needs!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
              vero?
            </p>

            <Button>Shop now</Button>
          </div>

          <div className="flex-1 h-full hidden sm:flex justify-center">
            <Image
              src={test.src}
              alt=""
              width={1000}
              height={1000}
              className="w-auto h-full"
            />
          </div>
        </div>
      </section> */}
    </>
  );
}
