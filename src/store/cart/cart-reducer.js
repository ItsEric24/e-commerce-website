import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  isOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setIsCartOpen(state, action) {
      state.isOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeCartItem(state, action) {
      state.cartItems = removeItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = clearItem(state.cartItems, action.payload);
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeCartItem,
  clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
