import BrandCard from '@/components/BrandCard';
import SectionHeader from '@/components/SectionHeader';
import { FC } from 'react';

interface Props {}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Brands: FC<Props> = () => {
  return (
    <section className="py-7">
      <div className="container mx-auto">
        <SectionHeader>Choose by brand</SectionHeader>

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-3">
          {array.map((num, index) => (
            <BrandCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
