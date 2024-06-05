import { Separator } from '@/components/ui/separator';
import Brands from '@/containers/brands/Brands';
import Categories from '@/containers/categories/Categories';
import Footer from '@/containers/footer/Footer';
import Hero from '@/containers/hero/Hero';
import Navbar from '@/containers/navbar/Navbar';
import ProductsCarousel from '@/containers/products-carousel/ProductsCarousel';
import Products from '@/containers/products/Products';
import Services from '@/containers/services/Services';
import { LaptopIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <ProductsCarousel />
        <Brands />
        <Products />
        <Services />
      </main>

      <Footer />
    </>
  );
}
