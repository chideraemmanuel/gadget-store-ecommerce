import RouteGuard from '@/decorators/RouteGuard';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const ProtectedPagesLayout: FC<Props> = ({ children }) => {
  return (
    <>
      {/* <RouteGuard>{children}</RouteGuard> */}
      {children}
    </>
  );
};

export default ProtectedPagesLayout;
