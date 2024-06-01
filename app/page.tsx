import { Separator } from '@/components/ui/separator';
import Navbar from '@/containers/navbar/Navbar';
import { LaptopIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <header className="">
        <Navbar />
        <Separator />
      </header>
    </main>
  );
}
