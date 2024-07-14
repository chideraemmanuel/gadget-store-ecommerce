import { CartItemTypes, OrderItemTypes } from '@/types';

export const getSubTotal = (items: CartItemTypes[] | OrderItemTypes[]) => {
  let subTotal = 0;

  items.forEach((item) => {
    subTotal = subTotal + item.product.price * item.quantity;
  });

  return subTotal;
};

// export const getTotal = (
//   items: CartItemTypes[] | OrderItemTypes[],
//   discount: number = 0,
//   shipping: number = 0,
//   tax: number = 0
// ) => {
//   const subTotal = getSubTotal(items);
//   const total = subTotal - discount - shipping - tax;

//   return total;
// };

// export const getIndividualItemTotal = (
//   item: CartItemTypes | OrderItemTypes
// ) => {
//   return item.product.price * item.quantity;
// };

interface TotalProps {
  items: CartItemTypes[] | OrderItemTypes[];
  discount?: number;
  shipping?: number;
  tax?: number;
}

export const getTotal = ({
  items,
  discount = 0,
  shipping = 0,
  tax = 0,
}: TotalProps) => {
  const subTotal = getSubTotal(items);
  const total = subTotal - discount - shipping - tax;

  return total;
};

export const getIndividualItemTotal = (
  item: CartItemTypes | OrderItemTypes
) => {
  return item.product.price * item.quantity;
};
