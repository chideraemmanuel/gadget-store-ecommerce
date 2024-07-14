import { CartItemTypes } from '@/types';

const getNumberOfItemsInCart = (cartItems: CartItemTypes[]) => {
  let numberOfItems = 0;
  cartItems.forEach((cartItem) => {
    numberOfItems += cartItem.quantity;
  });

  return numberOfItems;
};

export default getNumberOfItemsInCart;
