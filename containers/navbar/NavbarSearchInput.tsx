import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { FC } from 'react';

interface Props {}

const NavbarSearchInput: FC<Props> = () => {
  return (
    <div className="relative">
      <Input
        className="hidden md:block rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
        placeholder="Search products"
      />
      <SearchIcon
        className="md:absolute right-2 top-1/2 md:translate-y-[-50%] text-slate-700 md:text-muted-foreground cursor-pointer md:cursor-default"
        width={20}
      />
    </div>
  );
};

export default NavbarSearchInput;
