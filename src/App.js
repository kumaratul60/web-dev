import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import "./App.css";


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
