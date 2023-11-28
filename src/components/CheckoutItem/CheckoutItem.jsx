/* eslint-disable react/prop-types */
import {
  addItemToCart,
  clearItemFromCart,
  removeCartItem,
} from "../../store/cart/cart-reducer";
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
import { useDispatch } from "react-redux";

function CheckoutItem({ checkoutItem }) {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const dispatch = useDispatch();

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(checkoutItem));
  };

  const addCartItemHandler = () => dispatch(addItemToCart(checkoutItem));

  const removeCartItemHandler = () => dispatch(removeCartItem(checkoutItem));

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
