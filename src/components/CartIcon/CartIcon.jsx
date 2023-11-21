import "./CartIcon.scss";
import ShoppingBag from "./ShoppingBag";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function CartIcon() {
  const { isOpen, setIsOpen } = useContext(CartContext);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingBag className="shopping" />
      <span className="item-count">0</span>
    </div>
  );
}
export default CartIcon;
