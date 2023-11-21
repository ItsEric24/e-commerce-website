import "./check-out-page.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

function CheckOutPage() {
  const { cartItems, totalAmount } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} checkoutItem={item} />;
      })}
      <span className="total">Total: ${totalAmount}</span>
    </div>
  );
}
export default CheckOutPage;