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
import NavbarCartLink from '@/components/NavbarCartLink';
import NavbarAccountButton from '@/components/NavbarAccountButton';
import useGetCategories from '@/lib/hooks/useGetCategories';

interface Props {}

const Navbar: FC<Props> = () => {
  const { data: categories, isLoading: isFetchingCategories } =
    useGetCategories();

  return (
    <>
      <div className="xs:container px-3 mx-auto relative h-[70px] flex items-center justify-between">
        <MobileNavigationMenu />

        <Logo />

        <NavbarLinks />

        <div className="inline-flex items-center justify-center gap-2 xs:gap-4 text-accent-foreground">
          <NavbarSearchInput />

          <NavbarCartLink />

          <NavbarAccountButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
