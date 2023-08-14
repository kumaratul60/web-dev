import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../TailwindComponent/Card/Card";
import FETCH_CARD_MOCK_DATA from "../../mocks/fetchCardMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

// defining fetch mock function for js-dom
//  fetch function return a promise, promise return a json, json return a object

// when you are using state,fetch in react component and want to test, wrap it  render(<Card />) inside act(),
// act() return a promise so use async & await

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(FETCH_CARD_MOCK_DATA);
    },
  });
});

it("Should render Card body component with Search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    )
  );

  // Debug: Output the entire document structure to console
  // console.log(document.body.innerHTML);

  const cardBeforeSearch = screen.getAllByTestId("resCard");
  console.log(cardBeforeSearch.length);
  expect(cardBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  // console.log(searchBtn);

  const searchInput = screen.getByTestId("searchInput");
  //   console.log(searchInput);

  // fireEvent.change(searchInput, { target: { value: "pizza" } });

  // fireEvent.click(searchBtn);

  //   Assert: screen should load res cards containing pizza

  // const cardAfterSearch = screen.getAllByTestId("resCardData");
  // console.log(cardAfterSearch.length);

  expect(searchBtn).toBeInTheDocument();
  // expect(cardAfterSearch.length).toBe(2);
});
