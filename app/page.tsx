import { Separator } from '@/components/ui/separator';
import Hero from '@/containers/hero/Hero';
import Navbar from '@/containers/navbar/Navbar';
import { LaptopIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="bg-background sticky top-0">
        <Navbar />
        <Separator />
      </header>

      <main>
        <Hero />
      </main>
    </>
  );
}
