import { useEffect, useState } from "react";
import { resList } from "../../utils/mockData";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Card.css";
import Shimmer from "../Shimmer/Shimmer";

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

  // useEffect is a named import function, which is used for side effect in ui and take 2 arguments one is call back function and another is  dependency array.

  //  useEffect call after every time component is rendered

  // if no  dependency array => useEffect is called on every render
  //  if dependency array is empty => useEffect is called on initial render(just once)
  //  if dependency array is  [searchText] => called everytime searchText is updated

  useEffect(() => {
    fetchData();
    console.log("useEffect run");
  }, []);

  const fetchData = async () => {
    //  fetch superpower get from browser JS engine
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6609677&lng=77.2276704&page_type=DESKTOP_WEB_LISTING"
    );
    // fetch return  a promise
    //  convert above data into json
    const result = await data.json();

    // Bad way to handle the data
    // setFilteredRestaurants(result.data.cards[2].data.data.cards)

    // Good way to  handle the data
    setFilteredRestaurants(result?.data?.cards[2]?.data?.data?.cards);
    setNewFilteredRestaurants(result?.data?.cards[2]?.data?.data?.cards);
    console.log({ result, filteredRestaurants, newFilteredRestaurants });
  };

  console.log("card rendered");

  // in above case first card rendered then useEffect render

  const handleClick = () => {
    const updatedList = filteredRestaurants.filter(
      (res) => res.data.avgRating > 4
    );
    setFilteredRestaurants(updatedList);
    console.log({ filteredRestaurants, updatedList });
  };

  // if (filteredRestaurants.length === 0) {
  //   return (
  //   // <h1>Loading....</h1>;
  //   <Shimmer/>
  //   )
  // }

  return filteredRestaurants.length === 0 ? (
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
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setFilteredRestaurants(filterTextRes);
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
        {/* {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data?.id} resData={restaurant} />
        ))} */}

        {newFilteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Card;
