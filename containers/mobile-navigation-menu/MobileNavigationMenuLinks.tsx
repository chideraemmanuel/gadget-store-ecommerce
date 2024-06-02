'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import * as MobileDropdown from '@radix-ui/react-dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';

interface Props {}

const MobileNavigationMenuLinks: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-10 pb-5 text-foreground">
      <ul className="flex flex-col gap-2">
        {/* <MobileDropdown.DropdownMenu>
          <MobileDropdown.DropdownMenuTrigger className="bg-blue-500 inline-flex justify-between w-full p-3">
            <span>Categories M!</span>

            <ChevronDown />
          </MobileDropdown.DropdownMenuTrigger>

          <MobileDropdown.DropdownMenuContent className="relative">
            <span>hi</span>
          </MobileDropdown.DropdownMenuContent>
        </MobileDropdown.DropdownMenu> */}

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <li>
            <CollapsibleTrigger
              className={`inline-flex justify-between items-center w-full p-2 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                isOpen && 'bg-accent text-accent-foreground'
              }`}
            >
              <span>Categories</span>
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>

            <CollapsibleContent asChild>
              <ul className="flex flex-col gap-2 ml-5 mt-2">
                <li>
                  <Link
                    href={'/'}
                    className="inline-block w-full p-2 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Laptops
                  </Link>
                </li>

                <Separator />

                <li>
                  <Link
                    href={'/'}
                    className="inline-block w-full p-2 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Phones
                  </Link>
                </li>
              </ul>
            </CollapsibleContent>
          </li>
        </Collapsible>

        <Separator />

        <li>
          <Link
            href={'/'}
            className="inline-block w-full p-2 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Deals
          </Link>
        </li>

        <Separator />

        <li>
          <Link
            href={'/'}
            className="inline-block w-full p-2 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            What's New
          </Link>
        </li>

        <Separator />

        <li>
          <Link
            href={'/'}
            className="inline-block w-full p-2 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Delivery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigationMenuLinks;
