import { FC } from 'react';
import CategoriesCarousel from './CategoriesCarousel';
import SectionHeader from '@/components/SectionHeader';

interface Props {}

const Categories: FC<Props> = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <SectionHeader>Shop our top categories</SectionHeader>

        <CategoriesCarousel />
      </div>
    </section>
  );
};

export default Categories;
