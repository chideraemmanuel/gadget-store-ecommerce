import { LaptopIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const Logo: FC<Props> = () => {
  return (
    <Link href={'/'} className="inline-flex items-center justify-center gap-1">
      <LaptopIcon className="text-slate-700" />
      <span className="text-slate-700 font-medium">Gadget Store</span>
    </Link>
  );
};

export default Logo;
