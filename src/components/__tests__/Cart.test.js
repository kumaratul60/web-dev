import { render, act, screen, fireEvent } from "@testing-library/react";
import Header from "../TailwindComponent/Header/Header";
import RestaurantCustomMenu from "../TailwindComponent/RestaurantMenu/RestaurantCustomMenu";
import Cart from "../TailwindComponent/Cart";
import RES_MENU_MOCK_DATA from "../../mocks/fetchResMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../Redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// if we use toBeInTheDocument() so import "@testing-library/jest-dom"

// Mock fetch function

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA),
//   });
// });

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RES_MENU_MOCK_DATA),
  })
);

it("Should load restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantCustomMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Kulcha Burger (6)");

  fireEvent.click(accordionHeader);

  //   const accordionItems = screen.getAllByTestId("accordion-item")
  //   expect(accordionItems.length).toBe(6)

  expect(screen.getAllByTestId("accordion-item").length).toBe(6);

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  //   console.log(addBtns.length);
  fireEvent.click(addBtns[0]);

  const cartItem = screen.getByText("Cart (1 items)");
  expect(cartItem).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("accordion-item").length).toBe(8);
  const cartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(cartBtn);
  expect(screen.getAllByTestId("accordion-item").length).toBe(6);
  expect(
    screen.getByRole("button", { name: "Add to cart" })
  ).toBeInTheDocument();
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
});

// const renderWithProviders = () => {
//   return render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//         <RestaurantCustomMenu />
//         <Cart />
//       </Provider>
//     </BrowserRouter>
//   );
// };

// describe("Cart component test cases", () => {
//   it("Should render cart component", async () => {
//     await act(async () => {
//       renderWithProviders();
//     });

//     // Test logic for rendering cart component
//     const accordionHeader = screen.getByText("Kulcha Burger (6)");
//     fireEvent.click(accordionHeader);

//     expect(screen.getAllByTestId("accordion-item").length).toBe(6);
//   });

//   it("Should update cart on add button click", async () => {
//     await act(async () => {
//       renderWithProviders();
//     });

//     // Test logic for updating cart on add button click
//     const addBtns = screen.getAllByRole("button", { name: "Add +" });
//     fireEvent.click(addBtns[0]);

//     expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

//     fireEvent.click(addBtns[1]);
//     expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

//     expect(screen.getAllByTestId("accordion-item").length).toBe(8);
//   });

//   it("Should clear cart and reset items", async () => {
//     await act(async () => renderWithProviders());

//     // Test logic for clearing cart and resetting items
//     const cartBtn = screen.getByRole("button", { name: "Clear Cart" });
//     fireEvent.click(cartBtn);

//     expect(screen.getAllByTestId("accordion-item").length).toBe(6);
//     expect(
//       screen.getByRole("button", { name: "Add to cart" })
//     ).toBeInTheDocument();
//     expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
//   });
// });
