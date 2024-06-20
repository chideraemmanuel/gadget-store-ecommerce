import { FC } from 'react';
import Logo from './Logo';
import { LaptopIcon } from 'lucide-react';

interface Props {}

const SplashScreen: FC<Props> = () => {
  return (
    <div className="fixed top-0 left-0 right-0 min-w-screen min-h-screen bg-background z-50 flex items-center justify-center">
      <div className="inline-flex items-center justify-center gap-1 animate-pulse">
        <LaptopIcon width={30} />
        <span className="font-xl">Gadget Store</span>
      </div>
    </div>
  );
};

export default SplashScreen;
