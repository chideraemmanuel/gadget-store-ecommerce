import Link from 'next/link';
import { FC } from 'react';
import logo from '@/assets/apple-logo.jpg';
import Image from 'next/image';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface Props {}

const BrandCard: FC<Props> = () => {
  return (
    <Link
      href={'/'}
      className="flex xs:grid flex-col xs:grid-cols-[auto_1fr] items-start xs:items-center gap-3 bg-accent p-3 rounded-md text-accent-foreground border border-accent hover:border-primary transition"
    >
      {/* <Avatar>
        <AvatarImage src={logo.src} />
        <AvatarFallback>A</AvatarFallback>
      </Avatar> */}

      <div className="rounded-full p-[2px] inline-block">
        <Image
          src={logo.src}
          alt="logo"
          width={30}
          height={30}
          className=" rounded-[inherit]"
        />
      </div>
      <span>Brand Name</span>
    </Link>
  );
};

export default BrandCard;
