import { FC } from 'react';
import CategoriesCarousel from './CategoriesCarousel';

interface Props {}

const Categories: FC<Props> = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl pb-7">
          Shop our top categories
        </h2>

        <CategoriesCarousel />
      </div>
    </section>
  );
};

export default Categories;
