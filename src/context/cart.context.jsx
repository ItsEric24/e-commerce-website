/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

function addCartItem(cartItems, productToAdd) {
  //*Find if cart items contains product to add
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //*If found, increment quantity
  if (existingCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //*Return new array
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { isOpen, setIsOpen, addToCart, cartItems, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
