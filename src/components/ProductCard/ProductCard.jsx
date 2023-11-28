/* eslint-disable react/prop-types */
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardFooterName,
  ProductCardFooterPrice,
} from "./product-card";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart-reducer";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
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
