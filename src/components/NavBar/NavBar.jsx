import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/icon.svg";
import "./Navbar.scss";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase";

function NavBar() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="navigation">
      <Link to="/" className="logo-container">
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            Sign Out
          </span>
        ) : (
          <Link to="/auth" className="nav-link">
            Signin
          </Link>
        )}
      </div>
    </div>
  );
}
export default NavBar;
