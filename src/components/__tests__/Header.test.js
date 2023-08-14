import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../TailwindComponent/Header/Header";
import { Provider } from "react-redux";
import appStore from "../Redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Header component tests", () => {
  it("Should render Header component with login button", () => {
    // because header component is using redux code we have to provide it provider to wrap it.
    //   Also we use Link  inside header component so we provide router context here
    render(
      <BrowserRouter>
        <Provider store={ appStore }>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //   Good way -> getByRole > getByText

    //   const loginBtn = screen.getByRole("button");
    //   const loginBtn = screen.getByText("Login");

    // if we have multiple btn and want to find especially
    //   const loginBtn = screen.getByRole("button", { text: "Login" });
    const loginBtn = screen.getByRole("button", { name: "Login" });

    expect(loginBtn).toBeInTheDocument();
  });

  it("Should render Header component with cart button", () => {
    render(
      <BrowserRouter>
        <Provider store={ appStore }>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const cartItem = screen.getByText("Cart (0 items)");

    // want to check Cart is there to not
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  });

  it("Should change Login Button to Logout on click Header component ", () => {
    render(
      <BrowserRouter>
        <Provider store={ appStore }>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //  to integrate click event in test we use fireEvent
    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { text: "Logout" });

    expect(logoutBtn).toBeInTheDocument();
  });
});
