import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-drop-down.scss";
import { useNavigate } from "react-router-dom";

function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={handleNavigation}>Go to checkout</Button>
    </div>
  );
}
export default CartDropDown;
