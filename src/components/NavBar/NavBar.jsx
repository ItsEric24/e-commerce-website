import { useContext } from "react";
import Logo from "./../../assets/icon.svg";
import {
  NavLinksContainer,
  NavigationContainer,
  LogoContainer,
  NavLink,
} from "./nav-bar.styles";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";

function NavBar() {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);
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
