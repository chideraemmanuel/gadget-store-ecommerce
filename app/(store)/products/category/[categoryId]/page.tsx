import CategoryPageHero from '@/containers/category-page-hero/CategoryPageHero';
import CategoryPageProducts from '@/containers/category-page-products/CategoryPageProducts';
import { FC } from 'react';

interface Props {
  params: {
    categoryId: string;
  };
}

const CategoryPage: FC<Props> = ({ params: { categoryId } }) => {
  //   console.log('params', params);

  return (
    <>
      <CategoryPageHero />
      <CategoryPageProducts />
    </>
  );
};

export default CategoryPage;
