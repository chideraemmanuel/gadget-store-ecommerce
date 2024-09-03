'use client';

import Error from '@/components/error/Error';
import NetworkError from '@/components/network-error/NetworkError';
import ProductDetails from '@/containers/product-details/ProductDetails';
import ProductsCarousel from '@/containers/products-carousel/ProductsCarousel';
import ServerError from '@/components/server-error/ServerError';
import Services from '@/containers/services/Services';
import useGetProductById from '@/lib/hooks/useGetProductById';
import useGetRandomProducts from '@/lib/hooks/useGetRandomProducts';
import { FC } from 'react';

interface Props {
  params: {
    productId: string;
  };
}

const ProductDetailsPage: FC<Props> = ({ params: { productId } }) => {
  const {
    data: product,
    isLoading: isFetchingProduct,
    isError: isErrorFetchingProduct,
    error: errorFetchingProduct,
  } = useGetProductById(productId);

  const {
    data: similarProducts,
    isLoading: isFetchingSimilarProducts,
    isError: isErrorFetchingSimilarProducts,
    error: errorFetchingSimilarProducts,
  } = useGetRandomProducts({
    category: product?.category._id,
    exclude: productId,
  });

  const error = errorFetchingProduct || errorFetchingSimilarProducts;

  // @ts-ignore
  if (error?.message === 'Network Error') {
    console.log('network error');
    return <NetworkError />;
  }

  if (
    // @ts-ignore
    error?.response?.data?.error === 'Internal Server Error' ||
    // @ts-ignore
    error?.response?.status === 500
  ) {
    console.log('server error');
    return <ServerError />;
  }

  if (error) {
    // @ts-ignore
    return <Error message={error?.message} />;
  }

  return (
    <>
      {/* <span>Bread crumb goes here</span> */}
      {/* TODO: add breadcrumb */}

      <ProductDetails
        product={product}
        isLoading={isFetchingProduct}
        isError={isErrorFetchingProduct}
        error={errorFetchingProduct}
      />

      {product && (
        <>
          {/* <ProductsCarousel header="Similar products" products={[]} /> */}
          <ProductsCarousel
            header="Similar products"
            products={similarProducts}
            isLoading={isFetchingSimilarProducts}
          />
          <Services />
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
