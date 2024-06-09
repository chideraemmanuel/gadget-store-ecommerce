import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, SearchIcon } from 'lucide-react';
import { FC, useState } from 'react';

interface Props {}

const NavbarSearchInput: FC<Props> = () => {
  const [mobileSearchActive, setMobileSearchActive] = useState(false);

  return (
    <>
      <div className="relative hidden md:inline-block">
        <Input
          className="hidden md:block rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-2"
          placeholder="Search products"
        />
        <SearchIcon
          className="absolute right-2 top-1/2 translate-y-[-50%] text-accent-foreground "
          width={20}
        />
      </div>

      {/* mobile search */}
      {mobileSearchActive && (
        <div className="flex md:hidden items-center gap-2 absolute px-8 left-0 top-0 w-full h-full bg-background">
          <Button
            variant={'ghost'}
            size={'sm'}
            className="px-1 sm:px-2"
            onClick={() => setMobileSearchActive(false)}
          >
            <ArrowLeft className="text-accent-foreground" width={20} />
          </Button>

          <div className="relative w-full">
            <Input
              autoFocus
              className="block rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-2"
              placeholder="Search products"
            />
            <SearchIcon
              className="absolute right-2 top-1/2 translate-y-[-50%] text-accent-foreground "
              width={20}
            />
          </div>
        </div>
      )}

      <Button
        variant={'ghost'}
        size={'sm'}
        className="px-1 sm:px-2 inline-block md:hidden"
        onClick={() => setMobileSearchActive(true)}
      >
        <SearchIcon className="text-accent-foreground" width={20} />
      </Button>
    </>
  );
};

export default NavbarSearchInput;
