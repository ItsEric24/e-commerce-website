/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import shopData from "../shopData.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products] = useState(shopData);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
