import AuthRoutesGuard from '@/decorators/AuthRoutesGuard';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const SignInPagesLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <AuthRoutesGuard>{children}</AuthRoutesGuard>
      {/* {children} */}
    </>
  );
};

export default SignInPagesLayout;
