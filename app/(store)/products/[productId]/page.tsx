import { FC } from 'react';

interface Props {
  params: {
    productId: string;
  };
}

const ProductDetailsPage: FC<Props> = ({ params: { productId } }) => {
  return (
    <>
      <span>{productId}</span>
    </>
  );
};

export default ProductDetailsPage;
