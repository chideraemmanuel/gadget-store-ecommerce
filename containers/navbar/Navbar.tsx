'use client';

import Logo from '@/components/Logo';
import { FC } from 'react';
import NavbarLinks from './NavbarLinks';
import { MenuIcon, ShoppingCart, ShoppingCartIcon, User } from 'lucide-react';
import Link from 'next/link';
import NavbarSearchInput from './NavbarSearchInput';
import MobileNavigationMenu from '../mobile-navigation-menu/MobileNavigationMenu';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <>
      <div className="container mx-auto relative h-[70px] flex items-center justify-between">
        <MobileNavigationMenu />

        <Logo />

        <NavbarLinks />

        <div className="inline-flex items-center justify-center gap-2 text-accent-foreground">
          <NavbarSearchInput />

          {/* <div className="relative border"> */}
          <Button
            asChild
            variant={'ghost'}
            size={'sm'}
            className="px-1 sm:px-2"
          >
            <Link
              href={'/'}
              className="inline-flex items-center justify-center gap-1 text-sm"
            >
              <ShoppingCartIcon // width={20}
                className="w-full md:w-1/2"
              />
              <span className="hidden md:inline-block">Cart</span>
            </Link>
          </Button>

          {/* <span className="inline-block absolute right-0 top-0 translate-x-1/2 translate-y-1/2 bg-red-500 rounded-full p-1 text-xs text-white">
              10000000000
            </span>
          </div> */}

          <Button
            asChild
            variant={'ghost'}
            size={'sm'}
            className="px-1 sm:px-2"
          >
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
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
