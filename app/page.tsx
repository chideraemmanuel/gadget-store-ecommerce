import { Separator } from '@/components/ui/separator';
import Categories from '@/containers/categories/Categories';
import Hero from '@/containers/hero/Hero';
import Navbar from '@/containers/navbar/Navbar';
import ProductsCarousel from '@/containers/products-carousel/ProductsCarousel';
import { LaptopIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="bg-background sticky top-0 z-50">
        <Navbar />
        <Separator />
      </header>

      <main>
        <Hero />
        <Categories />
        <ProductsCarousel />
      </main>
    </>
  );
}
