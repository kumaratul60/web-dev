import { useState } from "react";
import { HEADER_URL } from "../../utils/constants";
import "./Header.css";

const Header = () => {
  // let btnName = "Login";
  const [btnState,setBtnState] = useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact </li>
          <li>Cart</li>
          {/* <button
            className="login"
            onClick={() => {
              btnName = "Logout";
            }}
          > */}
          <button
            className="login"
            onClick={() => {
             btnState === "Login"? setBtnState("Logout"): setBtnState("Login")
            }}
          >
            {/* {btnName} */}
            {btnState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
