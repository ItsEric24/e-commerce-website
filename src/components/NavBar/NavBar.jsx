import { Link } from "react-router-dom";
import Logo from "./../../assets/icon.svg";
import "./Navbar.scss";

function NavBar() {
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
        <Link to="/signin" className="nav-link">
          Signin
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
