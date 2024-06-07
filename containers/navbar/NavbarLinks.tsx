'use client';

import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import './navbar.css';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface Props {}

// block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground

const NavbarLinks: FC<Props> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    // <ul className="hidden lg:flex items-center justify-center gap-3 text-sm text-foreground">
    //   <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
    //     <DropdownMenuTrigger
    //       className={`flex items-center justify-center gap-[2px] opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity ${
    //         dropdownOpen && 'opacity-100'
    //       }`}
    //     >
    //       <span>Categories</span>
    //       <ChevronDown width={15} />
    //     </DropdownMenuTrigger>
    //     <DropdownMenuContent className="hidden lg:block">
    //       <DropdownMenuItem>Laptops</DropdownMenuItem>
    //       <DropdownMenuItem>Phones</DropdownMenuItem>
    //     </DropdownMenuContent>
    //   </DropdownMenu>

    //   <li>
    //     <Link
    //       href={'/'}
    //       className="opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity"
    //     >
    //       Deals
    //     </Link>
    //   </li>
    //   <li>
    //     <Link
    //       href={'/'}
    //       className="opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity"
    //     >
    //       What's New
    //     </Link>
    //   </li>
    //   <li>
    //     <Link
    //       href={'/'}
    //       className="opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity"
    //     >
    //       Delivery
    //     </Link>
    //   </li>
    // </ul>

    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="hidden lg:flex items-center justify-center gap-1 text-sm text-foreground">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="inline-flex items-center justify-center gap-1 text-sm px-1 sm:px-2">
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/*
                NavigationMenuContent, while in display, starts from wherever the NavigationMenu container starts, so if the entire navbar is covered with the NavigationMenu container, it starts from the edge of the screen
              */}
              {/* <ul className="p-3 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]"> */}
              <ul className="grid grid-cols-2 gap-2 p-3 w-[300px]">
                <ListItem href={'/'}>Laptops</ListItem>
                <ListItem href={'/'}>Phones</ListItem>
                <ListItem href={'/'}>Chargers</ListItem>
                <ListItem href={'/'}>Headphones</ListItem>
                <ListItem href={'/'}>Mouses</ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
              <NavigationMenuLink
                className={cn(
                  'inline-flex items-center justify-center gap-1 text-sm px-1 sm:px-2',
                  navigationMenuTriggerStyle()
                )}
              >
                Deals
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  'inline-flex items-center justify-center gap-1 text-sm px-1 sm:px-2',
                  navigationMenuTriggerStyle()
                )}
              >
                What's New
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  'inline-flex items-center justify-center gap-1 text-sm px-1 sm:px-2',
                  navigationMenuTriggerStyle()
                )}
              >
                Delivery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavbarLinks;

// const ListItem = React.forwardRef<
//   React.ElementRef<'a'>,
//   React.ComponentPropsWithoutRef<'a'>
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = 'ListItem';

interface ListItemProps {
  children: React.ReactNode;
  href: string;
}

const ListItem: FC<ListItemProps> = ({ children, href }) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), 'w-full justify-start')}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </li>
  );
};
