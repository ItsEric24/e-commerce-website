/* eslint-disable react/prop-types */
import "./check-out-item.scss";
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="check-out-item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeCartItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addCartItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}
export default CheckoutItem;
