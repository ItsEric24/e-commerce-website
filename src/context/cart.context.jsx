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

function removeItem(cartItems, productToRemove) {
  //*Find the cart item to remove
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  //*Check if the quantity of item to remove is 1, if it is, remove item
  if (existingCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  //*if it is not, return cart items with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

function clearItem(cartItems, itemToRemove) {
  const removedItem = cartItems.filter(
    (cartItem) => cartItem.id !== itemToRemove.id
  );

  return removedItem;
}

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  totalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (totalAcc, cartItem) => totalAcc + cartItem.quantity * cartItem.price,
      0
    );

    setTotalAmount(total);
  }, [cartItems]);

  const addToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (itemToRemove) => {
    setCartItems(clearItem(cartItems, itemToRemove));
  };
  const value = {
    isOpen,
    setIsOpen,
    addToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    totalAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
