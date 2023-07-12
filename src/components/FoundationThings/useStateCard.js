import { useState } from "react";
import { resList } from "../../utils/mockData";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Card.css";

//  not using keys (not acceptable) <<< index as key <<<<<<<< uniques id  (best practice)

const Card = () => {
  //  Local state variable

  // const [filteredRestaurants, setFilteredRestaurants] = useState(resList);

  const arrWork = useState(resList);

  // const filteredRestaurants = arrWork[0];
  // const setFilteredRestaurants = arrWork[1];

  const [filteredRestaurants, setFilteredRestaurants] = arrWork;

  // normal js variable

  let listOfRestaurants = [
    {
      data: {
        id: "41892",
        name: "Al Jawahar Restaurant (Jama Masjid)",
        cloudinaryImageId: "l2hcl3u2g1cdgkz6kdd2",
        cuisines: ["Mughlai", "North Indian"],
        costForTwo: 40000,
        deliveryTime: 48,
        avgRating: 3.8,
      },
    },
    {
      data: {
        id: "41891",
        name: "Al MCD",
        cloudinaryImageId: "l2hcl3u2g1cdgkz6kdd2",
        cuisines: ["Mughlai", "North Indian"],
        costForTwo: 40000,
        deliveryTime: 48,
        avgRating: 4.8,
      },
    },
    {
      data: {
        id: "41898",
        name: "Al KFC",
        cloudinaryImageId: "l2hcl3u2g1cdgkz6kdd2",
        cuisines: ["Mughlai", "North Indian"],
        costForTwo: 40000,
        deliveryTime: 48,
        avgRating: 4.1,
      },
    },
  ];

  const handleClick = () => {
    const updatedList = filteredRestaurants.filter(
      (res) => res.data.avgRating > 4
    );
    setFilteredRestaurants(updatedList);
    console.log({ filteredRestaurants, updatedList });
  };

  return (
    <div className="card-body">
      <div className="filter">
        {/* <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );

            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button> */}

        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="card-container">
        {/* key is reserve keyword */}

        {/* {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))} */}

        {/* {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data?.id} resData={restaurant} />
        ))} */}

        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Card;
