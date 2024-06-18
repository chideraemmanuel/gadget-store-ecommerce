import { FC } from 'react';
import Logo from './Logo';

interface Props {}

const SplashScreen: FC<Props> = () => {
  return (
    <div className="fixed top-0 left-0 right-0 min-w-screen min-h-screen bg-background z-50 flex items-center justify-center">
      <Logo />
    </div>
  );
};

export default SplashScreen;
