import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default",
    cartData: "add details"
});

export default UserContext;
