'use client';

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

export default function Home() {
  const {
    data: homeBillboard,
    isLoading: isFetchingHomeBillboard,
    isError: isErrorFetchingHomeBillboard,
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
    error: errorFetchingNProducts,
  } = useGetProducts({ pege: '2' });

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
