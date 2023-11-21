import Button from "../Button/Button";
import "./cart-drop-down.scss";

function CartDropDown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go to checkout</Button>
    </div>
  );
}
export default CartDropDown;
