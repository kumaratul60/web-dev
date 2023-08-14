import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../TailwindComponent/RestaurantCard/RestaurantCard";
import { withPromotedLabel } from "../TailwindComponent/RestaurantCard/RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import MOCK_PROMOTED_DATA from "../../mocks/resPromotedCardMock.json";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Nirula's");
  //  expect(name).to.equal("Nirula's");
  expect(name).toBeInTheDocument();
});

describe("RestaurantCard Component", () => {
  it("should renders correctly", () => {
    const resData = MOCK_DATA;

    render(<RestaurantCard resData={resData} />);

    // Test for expected content in the component
    const resName = screen.getByText(resData.name);
    expect(resName).toBeInTheDocument();

    // const resCuisines = screen.getByText(resData.cuisines.join(","));
    // expect(resCuisines).toBeInTheDocument();

   // Handle broken text content for cuisines
   const cuisinesText = resData.cuisines.join(", ");
   const resCuisines = screen.queryByText(cuisinesText);
   expect(resCuisines).toBeInTheDocument();

   // Locate and assert the element containing the average rating
   const avgRatingElement = screen.getByText(
    (content, element) => element.textContent === `⭐${resData.avgRating}`
  );
  expect(avgRatingElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("res-logo");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      expect.stringContaining(resData.cloudinaryImageId)
    );
  });
});

describe("withPromotedLabel Higher-Order Component", () => {
  it("should wraps RestaurantCard with promoted label", () => {
    const resPromoData = MOCK_PROMOTED_DATA;

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    render(<PromotedRestaurantCard resData={resPromoData} />);

    // Test for presence of promoted label and wrapped content
    const promotedText = screen.getByText("Promoted");
    const resPromoDataName = screen.getByText(resPromoData.name);

    expect(promotedText).toBeInTheDocument();
    expect(resPromoDataName).toBeInTheDocument();
  });
});
