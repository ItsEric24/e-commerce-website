import Logo from "./../../assets/icon.svg";
import {
  NavLinksContainer,
  NavigationContainer,
  LogoContainer,
  NavLink,
} from "./nav-bar.styles";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectIsCartOpen } from "../../store/cart/cart-selector";

function NavBar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isOpen = useSelector(selectIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Signin</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isOpen && <CartDropDown />}
      </NavigationContainer>
    </>
  );
}
export default NavBar;
