import AuthRoutesGuard from '@/decorators/AuthRoutesGuard';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const PasswordResetLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <AuthRoutesGuard>{children}</AuthRoutesGuard>
    </>
  );
};

export default PasswordResetLayout;
