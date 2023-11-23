/* eslint-disable react/prop-types */
import "./cart-item.styles.jsx";
import {
  CartItemContainer,
  CartItemDetails,
  Image,
  CartItemName,
} from "./cart-item.styles.jsx";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer className="cart-item-container">
      <Image src={imageUrl} alt="cart-item" />
      <CartItemDetails className="item-details">
        <CartItemName className="name">{name}</CartItemName>
        <span className="price">
          {quantity} X ${price}{" "}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
}
export default CartItem;
