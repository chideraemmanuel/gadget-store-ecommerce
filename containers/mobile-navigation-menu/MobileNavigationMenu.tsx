import { FC } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import Logo from '@/components/Logo';
import MobileNavigationMenuLinks from './MobileNavigationMenuLinks';

interface Props {}

const MobileNavigationMenu: FC<Props> = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="lg:hidden px-1 sm:px-2">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side={'left'} className="block lg:hidden">
          <SheetHeader>
            <div className="flex justify-start">
              <Logo />
            </div>
          </SheetHeader>

          {/* <div className=" h-full">
            <DashboardNavLinks SheetClose={SheetClose} />
          </div> */}

          <MobileNavigationMenuLinks />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavigationMenu;
