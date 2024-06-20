'use client';

import ProductDetails from '@/containers/product-details/ProductDetails';
import ProductsCarousel from '@/containers/products-carousel/ProductsCarousel';
import Services from '@/containers/services/Services';
import useGetProductById from '@/lib/hooks/useGetProductById';
import { FC } from 'react';

interface Props {
  params: {
    productId: string;
  };
}

const ProductDetailsPage: FC<Props> = ({ params: { productId } }) => {
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductById(productId);

  return (
    <>
      <ProductDetails
        product={product}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />

      {product && (
        <>
          <ProductsCarousel header="Similar products" products={[]} />
          <Services />
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
