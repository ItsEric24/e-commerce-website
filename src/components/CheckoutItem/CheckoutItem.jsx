/* eslint-disable react/prop-types */
import {
  CheckoutItemContainer,
  Image,
  ImageContainer,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  Arrow,
  QuantityValue,
  RemoveItemButton,
} from "./check-out-item";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

function CheckoutItem({ checkoutItem }) {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const { clearItemFromCart, addToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(checkoutItem);
  };

  const addCartItemHandler = () => addToCart(checkoutItem);

  const removeCartItemHandler = () => removeItemFromCart(checkoutItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="check-out-item" />
      </ImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <Arrow onClick={removeCartItemHandler}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={addCartItemHandler}>&#10095;</Arrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <RemoveItemButton onClick={clearItemHandler}>&#10005;</RemoveItemButton>
    </CheckoutItemContainer>
  );
}
export default CheckoutItem;
