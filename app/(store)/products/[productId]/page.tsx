import ProductDetails from '@/containers/product-details/ProductDetails';
import ProductsCarousel from '@/containers/products-carousel/ProductsCarousel';
import Services from '@/containers/services/Services';
import { FC } from 'react';

interface Props {
  params: {
    productId: string;
  };
}

const ProductDetailsPage: FC<Props> = ({ params: { productId } }) => {
  return (
    <>
      <ProductDetails productId={productId} />
      <ProductsCarousel />
      <Services />
    </>
  );
};

export default ProductDetailsPage;
