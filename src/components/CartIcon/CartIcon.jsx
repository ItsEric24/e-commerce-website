import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import ShoppingBag from "./ShoppingBag";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function CartIcon() {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingBag className="shopping" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
export default CartIcon;
