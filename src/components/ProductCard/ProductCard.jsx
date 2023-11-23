/* eslint-disable react/prop-types */
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardFooterName,
  ProductCardFooterPrice,
} from "./product-card";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addToCart(product);
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt="product-image" />
      <ProductCardFooter>
        <ProductCardFooterName>{name}</ProductCardFooterName>
        <ProductCardFooterPrice>${price}</ProductCardFooterPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}
export default ProductCard;
