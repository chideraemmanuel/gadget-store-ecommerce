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

export default function Home() {
  const {
    data: homeBillboard,
    isLoading: isFetchingHomeBillboard,
    isError: isErrorFetchingHomeBillboard,
    error: errorFetchingHomeBillboard,
  } = useGetHomeBillboard();

  const {
    data: newProducts,
    isLoading: isFetchingNewProducts,
    isError: isErrorFetchingNewProducts,
    error: errorFetchingNewProducts,
  } = useGetProducts();

  const {
    data: products,
    isLoading: isFetchingProducts,
    isError: isErrorFetchingNProducts,
    error: errorFetchingProducts,
  } = useGetProducts({ pege: '2' });

  useEffect(() => {
    if (
      errorFetchingHomeBillboard ||
      errorFetchingNewProducts ||
      errorFetchingProducts
    ) {
      // WILL BE CAUGHT BY ERROR.TSX IN SEGMENT
      const error =
        errorFetchingHomeBillboard ||
        errorFetchingNewProducts ||
        errorFetchingProducts;

      throw new Error(
        // @ts-ignore
        error?.message?.data?.error ||
          // @ts-ignore
          error?.message ||
          'An error occured'
      );
    }
  }, [
    errorFetchingHomeBillboard,
    errorFetchingNewProducts,
    errorFetchingProducts,
  ]);

  if (isFetchingNewProducts || isFetchingProducts || isFetchingHomeBillboard) {
    return <SplashScreen />;
  }

  return (
    <>
      {homeBillboard && <Hero {...homeBillboard?.[0]} />}
      <Categories />
      {newProducts && (
        <ProductsCarousel header="New Arrivals" products={newProducts.data} />
      )}
      {/* new products? popular products? */}
      <Brands />
      {products && <Products products={products.data} />}
      <Services />
    </>
  );
}
