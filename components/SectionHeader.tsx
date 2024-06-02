import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const SectionHeader: FC<Props> = ({ children }) => {
  return (
    <>
      <h2 className="font-bold text-2xl md:text-3xl pb-7">{children}</h2>
    </>
  );
};

export default SectionHeader;
