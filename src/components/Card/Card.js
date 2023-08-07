import { useEffect, useState } from "react";
import { resList } from "../../utils/mockData";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { RESTRA_API } from "../../utils/constants";
import "./Card.css";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";

//  not using keys (not acceptable) <<< index as key <<<<<<<< uniques id  (best practice)

/*
CORS policy

browser is blocking this.
Browser are blockers to call our API  from one origin to different origin. so if origin mismatch then browser block this request from fetching data.

ex: out browser which chrome block us to call swiggy api from local host.

*/

/*  we can call api in 2 way

1.  load the component -> immediate make api call ->  populate the data on ui
2. *** load  the component -> render the component body as skeleton -> make api call -> rerender the component ==>(React preferred with the help of useEffect)
*/
const Card = () => {
  // const [filteredRestaurants, setFilteredRestaurants] = useState(resList);

  // const arrWork = useState(resList);

  // const [filteredRestaurants, setFilteredRestaurants] = arrWork;
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [newFilteredRestaurants, setNewFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  //  whenever state variables update, react trigger a reconciliation cycle or re-render the component
  console.log("card body render");

  useEffect(() => {
    fetchData();
    console.log("useEffect run");
  }, []);

  const fetchData = async () => {
    //  fetch superpower get from browser JS engine
    const data = await fetch(RESTRA_API);
    // fetch return  a promise
    //  convert above data into json
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

  console.log("card rendered");

  // in above case first card rendered then useEffect render

  const handleClick = () => {
    const updatedList = filteredRestaurants.filter(
      (res) => res.info.avgRating > 4
    );

    setNewFilteredRestaurants(updatedList);
    console.log({ filteredRestaurants, updatedList });
  };

  // if (filteredRestaurants.length === 0) {
  //   return (
  //   // <h1>Loading....</h1>;
  //   <Shimmer/>
  //   )
  // }

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
              {/* <RestaurantCard
                key={restaurant.info?.id}
                resData={restaurant?.info}
              /> */}

              {/* key should be present  in PARENT jsx */}

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
