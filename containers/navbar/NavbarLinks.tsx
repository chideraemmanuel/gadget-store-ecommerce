'use client';

import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import './navbar.css';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Props {}

const NavbarLinks: FC<Props> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ul className="hidden lg:flex items-center justify-center gap-3 text-sm text-foreground">
      {/* <li className="dropdown">
        <button className="dropdown__trigger flex items-center justify-center gap-[2px] cursor-pointer">
          <span>Categories</span>
          <ChevronDown width={15} />
        </button>

        <Card className="dropdown__menu shadow absolute w-[min(20vw,_200px)] p-2">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href={'/'}
                className="inline-block w-full p-2 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Laptops
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="inline-block w-full p-2 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Phones
              </Link>
            </li>
          </ul>
        </Card>
      </li> */}
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger
          className={`flex items-center justify-center gap-[2px] opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity ${
            dropdownOpen && 'opacity-100'
          }`}
        >
          <span>Categories</span>
          <ChevronDown width={15} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="hidden lg:block">
          <DropdownMenuItem>Laptops</DropdownMenuItem>
          <DropdownMenuItem>Phones</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <li>
        <Link
          href={'/'}
          className="opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity"
        >
          Deals
        </Link>
      </li>
      <li>
        <Link
          href={'/'}
          className="opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity"
        >
          What's New
        </Link>
      </li>
      <li>
        <Link
          href={'/'}
          className="opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity"
        >
          Delivery
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
