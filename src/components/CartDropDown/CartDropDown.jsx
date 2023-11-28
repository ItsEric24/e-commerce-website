import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-drop-down";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";

function CartDropDown() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleNavigation}>Go to checkout</Button>
    </CartDropDownContainer>
  );
}
export default CartDropDown;
