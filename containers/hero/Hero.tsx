import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import homeHeroImage from '@/assets/home-hero-image.jpg';

interface Props {}

const Hero: FC<Props> = () => {
  return (
    <section
      className="h-[70vh] relative flex justify-center items-center text-center after:content-[''] after:w-full after:h-full after:bg-slate-950 after:bg-opacity-70  after:absolute"
      style={{
        background: `url(${homeHeroImage.src}) no-repeat center center/cover`,
      }}
    >
      {/* <Image src={homeHeroImage.src} alt="Hero" /> */}
      <div className="container mx-auto flex flex-col justify-center items-center gap-5 relative z-10 text-[hsl(210_40%_98%)]">
        <h1 className="font-bold text-4xl md:text-5xl">
          Your one-stop-shop form all your technology needs!
        </h1>

        <p className="text-base sm:text-lg w-[min(90%,_1000px)]">
          We offer the latest gadgets and electronics from the most trusted
          brands in the industry. Need a wide range of accessories and
          peripherals to enhance your device's performance and protest your
          investment? You're in the right place!
        </p>

        <Button
          asChild
          size={'lg'}
          // variant={'secondary'}
          className="bg-[hsl(210_40%_98%)] text-[hsl(222.2_47.4%_11.2%)] hover:bg-[rgba(248,250,252,0.8)]"
        >
          <Link
            href={'/'}
            //   className="text-base sm:text-lg"
          >
            Shop now
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
