import Logo from '@/components/Logo';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <section className="pt-7">
      <Separator />

      <footer className="py-5">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />

          <div className="flex items-center justify-center gap-4">
            <Link
              href={'/'}
              className="opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity"
            >
              Terms of use
            </Link>
            <Link
              href={'/'}
              className="opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity"
            >
              Privacy policy
            </Link>
          </div>

          <div className="">
            <span>&copy; 2024 Gadget Store</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
