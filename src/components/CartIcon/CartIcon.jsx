import { setIsCartOpen } from "../../store/cart/cart-reducer";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart-selector";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import ShoppingBag from "./ShoppingBag";
import { useSelector, useDispatch } from "react-redux";

function CartIcon() {
  const isOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIsCartOpen(!isOpen));
  };
  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingBag className="shopping" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
export default CartIcon;
