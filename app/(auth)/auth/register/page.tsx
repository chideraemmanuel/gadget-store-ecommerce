import Image from 'next/image';
import { FC } from 'react';
import image from '@/assets/home-hero-image.jpg';
import Logo from '@/components/Logo';
import UserRegistrationForm from '@/containers/user-registration-form/UserRegistrationForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {}

const UserRegistrationPage: FC<Props> = () => {
  return (
    // <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="">
      <div className="absolute lg:fixed top-6 left-6 z-50 lg:text-[hsl(210_40%_98%)]">
        <Logo />
      </div>

      <Button
        asChild
        variant={'outline'}
        className="absolute top-6 right-6 z-50 bg-transparent"
      >
        <Link href={'/auth/login'}>Login</Link>
      </Button>

      <section className="fixed left-0 w-[50vw] min-h-screen hidden lg:flex items-end after:content-[''] after:w-full after:h-full after:bg-slate-950 after:bg-opacity-70 after:absolute after:top-0">
        <Image
          src={image.src}
          alt=""
          width={300}
          height={300}
          className="absolute w-full h-full"
        />

        <div className="container relative z-10 pb-7 text-[hsl(210_40%_98%)] ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aperiam iure pariatur consectetur voluptates? Sint sunt aspernatur
            tempora quos dolore, molestiae esse. Adipisci pariatur fugit quo
            modi officiis recusandae illo.
          </p>
        </div>
      </section>

      {/* <section className="flex items-center justify-center py-7 min-h-screen bg-red-500 after:content-[''] after:inset-0 after:bg-white dark:after:bg-slate-950 after:bg-opacity-90 dark:after:bg-opacity-95  after:absolute after:top-0 lg:after:hidden"> */}
      <section
        className="relative flex items-center justify-center py-7 min-h-screen after:content-[''] after:inset-0 after:bg-[hsl(210_40%_98%)] lg:after:bg-white dark:after:bg-slate-950 lg:dark:after:bg-slate-950 after:bg-opacity-95 dark:after:bg-opacity-95  after:absolute lg:ml-[50vw]"
        // className="relative flex items-center justify-center py-7 min-h-screen after:content-[''] after:inset-0 after:bg-red-500 after:absolute lg:after:hidden"
        style={{
          background: `url(${image.src}) no-repeat center center/cover`,
        }}
      >
        {/* <Image
          src={image.src}
          alt=""
          width={300}
          height={300}
          className="absolute inset-0 min-h-screen w-screen block lg:hidden"
        /> */}

        <div className="relative z-10 w-[min(90%,_600px)] pt-20">
          <UserRegistrationForm />
        </div>
      </section>
    </div>
  );
};

export default UserRegistrationPage;
