import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, {
  withPromotedLabel,
} from "../RestaurantCard/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";

import { RESTRA_API } from "../../../utils/constants";
import UserContext from "../../../utils/userContext";

import useOnlineStatus from "../../../hooks/useOnlineStatus";

const Card = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetching restaurants data from API
  const fetchData = async () => {
    const data = await fetch(RESTRA_API);

    const json = await data.json();

    // console.log({ cardJSON: json });

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const renderFilteredRestaurants = () => {
    return listOfRestaurants
      .filter(
        (restaurant) =>
          restaurant?.info?.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          restaurant?.info.cuisines
            .toString()
            .toLowerCase()
            .includes(searchText.toLowerCase())
      )
      .map((restaurant) => (
        <Link
          key={restaurant?.info.id}
          to={"/restaurants/" + restaurant?.info.id}
        >
          {restaurant?.info.veg ? (
            <RestaurantCardPromoted resData={restaurant?.info} />
          ) : (
            <RestaurantCard resData={restaurant?.info} />
          )}
        </Link>
      ));
  };

  const handleSearchRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaurant) =>
        restaurant?.info?.name
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        restaurant?.info.cuisines
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );

    setFilteredRestaurants(filteredRestaurants);
  };
  const handleFilteredRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant?.info
    );
    setFilteredRestaurants(filteredRestaurants);
  };
  const handleFilteredVegRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant?.info.veg === true
    );
    setFilteredRestaurants(filteredRestaurants);
  };
  const handleFilteredTopRatingRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant?.info.avgRating >= 4
    );
    setFilteredRestaurants(filteredRestaurants);
  };
  const handleFilteredLowBudgetRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaurant) =>
        parseInt(restaurant?.info.costForTwo.match(/\d+/)[0], 10) < 300
    );
    setFilteredRestaurants(filteredRestaurants);
  };
  const handleLowToHigh = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant?.info
    );

    filteredRestaurants.sort(
      (res1, res2) =>
        parseInt(res1?.info.costForTwo.match(/\d+/)[0], 10) -
        parseInt(res2?.info.costForTwo.match(/\d+/)[0], 10)
    );

    setFilteredRestaurants(filteredRestaurants);
  };
  const handleHighToLow = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant?.info
    );
    filteredRestaurants.sort(
      (res1, res2) =>
        parseInt(res2?.info.costForTwo.match(/\d+/)[0], 10) -
        parseInt(res1?.info.costForTwo.match(/\d+/)[0], 10)
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  // To show whether user in online or offline
  const onlineStatus = useOnlineStatus();
  // if (onlineStatus === false) {
  //   return (
  //     <h3 className=" text-center ">
  //       Looks like you're offline!{" "}
  //       <em>Please check your internet connection</em>
  //     </h3>
  //   );
  // }

  if (!onlineStatus) {
    return (
      <h3 className=" text-center ">
        Looks like you're offline!{" "}
        <em>Please check your internet connection</em>
      </h3>
    );
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100 min-h-screen">
      {/* Search for restaurants and cuisines */}
      <div className="mx-16 mt-5 mb-6 p-2 text-center">
        <input
          type="text"
          data-testid="searchInput"
          placeholder="Search for restaurants and cuisines"
          className="py-2 px-2 w-6/12 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-500"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="px-4 py-2 mx-2 rounded font-medium text-white bg-orange-400 hover:bg-orange-500"
          onClick={handleSearchRestaurants}
        >
          Search
        </button>
      </div>

      <div className="flex justify-between mx-16 px-3">
        <div className="p-1 mb-1 font-bold text-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-lg">
          <p>{filteredRestaurants?.length} Hungry Corners</p>
        </div>
        <div className="flex space-x-4">
          {/* All restaurants */}
          <button
            className="px-4 py-2 text-gray-700 hover:text-orange-500"
            onClick={handleFilteredRestaurants}
          >
            All
          </button>
          {/* Pure Veg restaurants */}
          <button
            className="px-4 py-2 text-gray-700 hover:text-orange-500"
            onClick={handleFilteredVegRestaurants}
          >
            Pure Veg
          </button>
          {/* 4.0+ rating restaurants */}
          <button
            className="px-4 py-2 text-gray-700 hover:text-orange-500"
            onClick={handleFilteredTopRatingRestaurants}
          >
            4.0+
          </button>
          {/* Shows restaurants whose cost is less than 300 */}
          <button
            className="px-4 py-2 text-gray-700 hover:text-orange-500"
            onClick={handleFilteredLowBudgetRestaurants}
          >
            Less than Rs. 300
          </button>
          {/* Sorts restaurants by cost from low to high */}
          <button
            className="px-4 py-2 text-gray-700 hover:text-orange-500"
            onClick={handleLowToHigh}
          >
            Cost: Low To High
          </button>
          {/* Sorts restaurants by cost from high to low */}
          <button
            className="px-4 py-2 text-gray-700 hover:text-orange-500"
            onClick={handleHighToLow}
          >
            Cost: High To Low
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-16 pt-6 gap-x-7 gap-y-12 border-t-[1px] border-gray-300">
        {/* Display a restaurant */}
        {/* {filteredRestaurants &&
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info.id}
            >
              {restaurant?.info.veg ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          ))} */}

        {renderFilteredRestaurants()}
      </div>
    </div>
  );
};
export default Card;
