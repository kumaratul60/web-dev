import { HEADER_URL } from "../../utils/constants";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={ HEADER_URL }
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
