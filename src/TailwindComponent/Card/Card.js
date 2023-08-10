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
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn-search"
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
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="card-container">
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
