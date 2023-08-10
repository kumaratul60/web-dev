import { useEffect, useState } from "react";
import { resList } from "../../utils/mockData";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { RESTRA_API } from "../../utils/constants";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const Card = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [newFilteredRestaurants, setNewFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    console.log("useEffect run");
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTRA_API);

    const result = await data.json();

    const newData =
      result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setFilteredRestaurants(newData);
    setNewFilteredRestaurants(newData);
    console.log({
      result,
      newData,
      filteredRestaurants,
      newFilteredRestaurants,
    });
  };

  const handleClick = () => {
    const updatedList = filteredRestaurants.filter(
      (res) => res.info.avgRating > 4
    );

    setNewFilteredRestaurants(updatedList);
    console.log({ filteredRestaurants, updatedList });
  };

  const activeStatus = useOnlineStatus();

  if (!activeStatus) {
    return (
      <h1>
        Looks like you are offline, <em>check your internet connection</em>
      </h1>
    );
  }

  return filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="card-body">
      <div className="filter flex">
        <div className="p-4 m-4">
          <input
            className="border-solid border mx-2 border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 border border-double  border-blue-300 rounded-lg   bg-green-300  hover:bg-blue-500 "
            onClick={() => {
              console.log({ searchText });
              const filterTextRes = filteredRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setNewFilteredRestaurants(filterTextRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className=" px-4 py-2 bg-gray-100 rounded-lg"
            onClick={handleClick}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {newFilteredRestaurants &&
          newFilteredRestaurants.map((restaurant) => (
            <>
              <Link
                key={restaurant.info?.id}
                to={"/restaurants/" + restaurant.info?.id}
              >
                <RestaurantCard resData={restaurant?.info} />
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};
export default Card;
