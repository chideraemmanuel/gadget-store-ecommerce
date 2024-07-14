import { ProductTypes } from '@/types';
import { FC } from 'react';

interface Props {
  product: ProductTypes;
  quantity: number;
}

const OrderItem: FC<Props> = ({ product, quantity }) => {
  const { product_name, product_image, price } = product;

  return (
    <>
      <span>Order Item</span>
    </>
  );
};

export default OrderItem;
