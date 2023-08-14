import { useContext, useState } from "react";
import { HEADER_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");

  const activeStatus = useOnlineStatus();

  // const contextData = useContext(UserContext)
  // console.log({contextData});

  // Subscribing to the store using a selector

  const cartItems = useSelector((state) => state.cart.items);
  // console.log({ cartItems });

  const { loggedInUser, cartData } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-gray-200 shadow-lg sm:bg-green-200 lg:bg-gray-400 xl:bg-pink-100">
      <div className="logo-container">
        <img className="w-20" src={HEADER_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-8 p-4 m-4">
          <li>Online Status:{activeStatus ? "✅" : "❌"}</li>
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

          <li className="font-semibold">
            <Link to="/cart">
              Cart ({cartItems.length > 0 ? cartItems.length : 0} items)
            </Link>
          </li>

          {/* <li>{cartData}</li> */}

          <button
            className="login"
            onClick={() => {
              btnState === "Login"
                ? setBtnState("Logout")
                : setBtnState("Login");
            }}
          >
            {btnState}
          </button>
          <li className="px-4 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
