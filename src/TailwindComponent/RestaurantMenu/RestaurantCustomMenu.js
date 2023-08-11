import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory";

const RestaurantCustomMenu = () => {
  const { resId } = useParams();

  const dummy = "dummy check12"

  const [showIndex, setShowIndex] = useState(null);

  const resCustomInfo = useRestaurantMenu(resId);

  if (resCustomInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resCustomInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resCustomInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resCustomInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" mt-4 text-center  ">
      <h1 className="font-bold text-2xl my-5">{name}</h1>
      <p>
        <span className="font-bold text-lg">{cuisines.join(", ")}</span> -{" "}
        {costForTwoMessage}
      </p>
      {/* category accordions */}
      {categories.map((categoryItem, index) => (
        <>
          {/*  controlled component */}
          <RestaurantCategory
            key={categoryItem?.card?.card?.title}
            cardData={categoryItem?.card?.card}
            //  if  want to show first item in accordions
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummyC = {dummy}
          />
        </>
      ))}
    </div>
  );
};

export default RestaurantCustomMenu;
