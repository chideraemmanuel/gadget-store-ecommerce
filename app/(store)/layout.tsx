import { FC } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/decorators/ThemeProvider';
import Navbar from '@/containers/navbar/Navbar';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/containers/footer/Footer';
import ReactQueryProvider from '@/decorators/ReactQueryProvider';

interface Props {
  children: React.ReactNode;
}

const StoreLayout: FC<Readonly<Props>> = ({ children }) => {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <header className="bg-background sticky top-0 z-50">
        <Navbar />
        <Separator />
      </header>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default StoreLayout;
