import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
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
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-center gap-[2px]">
          <span>Categories</span>
          <ChevronDown width={15} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="hidden lg:block">
          <DropdownMenuItem>Laptops</DropdownMenuItem>
          <DropdownMenuItem>Phones</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <li>
        <Link href={'/'}>Deals</Link>
      </li>
      <li>
        <Link href={'/'}>What's New</Link>
      </li>
      <li>
        <Link href={'/'}>Delivery</Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
