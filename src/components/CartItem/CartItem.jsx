/* eslint-disable react/prop-types */
import "./cart-item.scss";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="cart-item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}{" "}
        </span>
      </div>
    </div>
  );
}
export default CartItem;
