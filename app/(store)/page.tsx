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
import { Button } from '@/components/ui/button';
import GlobalNetworkError from '@/containers/network-error/GlobalNetworkError';
import GlobalServerError from '@/containers/server-error/GlobalServerError';

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

  const {
    data: products,
    isLoading: isFetchingProducts,
    isError: isErrorFetchingProducts,
    error: errorFetchingProducts,
  } = useGetProducts({ featured: 'false' });

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

  if (
    isFetchingFeaturedProducts ||
    isFetchingProducts ||
    isFetchingHomeBillboard
  ) {
    return <SplashScreen />;
  }

  const error =
    errorFetchingHomeBillboard ||
    errorFetchingFeaturedProducts ||
    errorFetchingProducts;

  // @ts-ignore
  if (error?.message === 'Network Error') {
    console.log('network error');
    return <GlobalNetworkError />;
  }

  if (
    // @ts-ignore
    error?.response?.data?.error === 'Internal Server Error' ||
    // @ts-ignore
    error?.response?.status === 500
  ) {
    console.log('server error');
    return <GlobalServerError />;
  }

  if (error) {
    // @ts-ignore
    return <GlobalError message={error?.message} />;
  }

  return (
    <>
      {homeBillboard && <Hero {...homeBillboard?.[0]} />}
      <Categories />
      {featuredProducts && (
        <ProductsCarousel
          header="New Arrivals"
          products={featuredProducts.data}
        />
      )}
      {/* new products? popular products? */}
      <Brands />
      {products && <Products products={products.data} />}
      <Services />
      {/* <Products products={productss} /> */}
    </>
  );
}
