import { CartTypes } from '@/types';

const getNumberOfItemsInCart = (cartItems: CartTypes[]) => {
  let numberOfItems = 0;
  cartItems.forEach((cartItem) => {
    numberOfItems += cartItem.quantity;
  });

  return numberOfItems;
};

export default getNumberOfItemsInCart;
