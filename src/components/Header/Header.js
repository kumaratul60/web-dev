import { useEffect, useState } from "react";
import { HEADER_URL } from "../../utils/constants";
import "./Header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";


const Header = () => {
  // let btnName = "Login";
  const [btnState, setBtnState] = useState("Login");

  // console.log("header");

  useEffect(() => {
    // console.log("run");
  }, []);

  const activeStatus = useOnlineStatus()

  // console.log("header jsx");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
        <li>
          Online Status:{activeStatus? "✅":"❌"}
        </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery </Link>
          </li>

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
              btnState === "Login"
                ? setBtnState("Logout")
                : setBtnState("Login");
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
