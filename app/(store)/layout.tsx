import { FC } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/decorators/ThemeProvider';
import Navbar from '@/containers/navbar/Navbar';
import { Separator } from '@/components/ui/separator';
import Footer from '@/containers/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface Props {
  children: React.ReactNode;
}

const StoreLayout: FC<Readonly<Props>> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <html lang="en">
        <body className={inter.className}>
          <header className="bg-background sticky top-0 z-50">
            <Navbar />
            <Separator />
          </header>

          {children}

          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
};

export default StoreLayout;
