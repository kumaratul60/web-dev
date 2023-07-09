import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import "./App.css";

/***
* Header
  - Logo
  - Nav Items
  - Cart
* Body
  - Search components
  - card container
    - img
    - name of restaurant
    - price
    - cuisines
    - star rating
    - deliver time
* Footer
  -copyright
  - links
  - contact info
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
