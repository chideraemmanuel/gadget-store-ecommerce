import RouteGuard from '@/decorators/RouteGuard';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const CartPageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      {/* <RouteGuard>{children}</RouteGuard> */}
      {children}
    </>
  );
};

export default CartPageLayout;
