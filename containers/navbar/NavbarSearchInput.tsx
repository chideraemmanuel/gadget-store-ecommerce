import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { FC } from 'react';

interface Props {}

const NavbarSearchInput: FC<Props> = () => {
  return (
    <>
      <div className="relative hidden md:inline-block">
        <Input
          className="hidden md:block rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-2"
          placeholder="Search products"
        />
        <SearchIcon
          // className="md:absolute right-2 top-1/2 md:translate-y-[-50%] text-foreground md:text-muted-foreground cursor-pointer md:cursor-default"
          className="absolute right-2 top-1/2 translate-y-[-50%] text-accent-foreground "
          width={20}
        />
      </div>

      <Button
        variant={'ghost'}
        size={'sm'}
        className="px-1 sm:px-2 inline-block md:hidden"
      >
        <SearchIcon className="text-accent-foreground" width={20} />
      </Button>
    </>
  );
};

export default NavbarSearchInput;
