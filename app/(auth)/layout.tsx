import { FC } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/decorators/ThemeProvider';
import image from '@/assets/home-hero-image.jpg';
import p1 from '@/assets/p1.webp';
import p2 from '@/assets/p2.webp';
import p3 from '@/assets/p3.webp';
import p4 from '@/assets/p4.webp';
import p5 from '@/assets/p5.webp';
import p6 from '@/assets/p6.webp';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import ReactQueryProvider from '@/decorators/ReactQueryProvider';
import AuthRoutesGuard from '@/decorators/AuthRoutesGuard';

interface Props {
  children: React.ReactNode;
}

const StoreLayout: FC<Readonly<Props>> = ({ children }) => {
  return (
    <main>
      <div className="absolute lg:fixed top-6 left-6 z-50 lg:text-[hsl(210_40%_98%)]">
        <Logo />
      </div>

      {/* button goes here..? */}

      <section className="fixed left-0 w-[50vw] min-h-screen hidden lg:flex items-end after:content-[''] after:w-full after:h-full after:bg-slate-950 after:bg-opacity-70 after:absolute after:top-0">
        <Image
          src={p3.src}
          alt=""
          width={300}
          height={300}
          className="absolute w-full h-full"
        />

        <div className="container relative z-10 pb-7 text-[hsl(210_40%_98%)] ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aperiam iure pariatur consectetur voluptates? Sint sunt aspernatur
            tempora quos dolore, molestiae esse. Adipisci pariatur fugit quo
            modi officiis recusandae illo.
          </p>
        </div>
      </section>

      <section
        className="relative flex items-center justify-center py-7 min-h-screen after:content-[''] after:inset-0 after:bg-[hsl(210_40%_98%)] lg:after:bg-white dark:after:bg-slate-950 lg:dark:after:bg-slate-950 after:bg-opacity-70 after:backdrop-blur-md dark:after:bg-opacity-90  after:absolute lg:ml-[50vw]"
        style={{
          background: `url(${p3.src}) no-repeat center center/cover`,
        }}
      >
        {/* <div className="relative z-10 w-[min(90%,_600px)] pt-20"> */}
        {children}
        {/* </div> */}
      </section>
    </main>
  );
};

export default StoreLayout;
