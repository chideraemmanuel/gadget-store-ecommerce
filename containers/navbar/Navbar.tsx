import Logo from '@/components/Logo';
import { FC } from 'react';
import NavbarLinks from './NavbarLinks';
import { MenuIcon, ShoppingCart, ShoppingCartIcon, User } from 'lucide-react';
import Link from 'next/link';
import NavbarSearchInput from './NavbarSearchInput';
import MobileNavigationMenu from '../mobile-navigation-menu/MobileNavigationMenu';

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <nav className="container mx-auto sticky top-0 h-[70px] flex items-center justify-between">
      <MobileNavigationMenu />

      <Logo />

      <NavbarLinks />

      <div className="inline-flex items-center justify-center gap-4 md:gap-4 sm:gap-6 text-slate-700">
        <NavbarSearchInput />

        <Link
          href={'/'}
          className="inline-flex items-center justify-center gap-1 text-sm"
        >
          <ShoppingCartIcon // width={20}
            className="w-full md:w-1/2"
          />
          <span className="hidden md:inline-block">Cart</span>
        </Link>

        <Link
          href={'/'}
          className="inline-flex items-center justify-center gap-1 text-sm"
        >
          <User
            // width={20}
            className="w-full md:w-1/2"
          />
          <span className="hidden md:inline-block">Account</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
