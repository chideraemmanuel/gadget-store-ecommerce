import { CartTypes } from '@/types';

export const getSubTotal = (cartItems: CartTypes[]) => {
  let subTotal = 0;

  cartItems.forEach((cartItem) => {
    subTotal = subTotal + cartItem.product.price * cartItem.quantity;
  });

  return subTotal;
};

export const getTotal = (cartItems: CartTypes[], discount: number) => {
  const subTotal = getSubTotal(cartItems);
  const total = subTotal - discount;

  return total;
};
