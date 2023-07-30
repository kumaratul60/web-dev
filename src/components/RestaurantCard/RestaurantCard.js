import { CDN_URL } from "../../utils/constants";
import "./RestaurantCard.css";

const styleColor = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData;

  return (
    <div
      className="res-container"
      // style={styleColor}
      style={ { backgroundColor: "#f0f0f0" } }
    >
      <img
        className="res-logo"
        src={ `${CDN_URL}/${cloudinaryImageId}` }
        alt="res-logo"
      />
      <h3>{ name }</h3>
      <h4>{ cuisines.join(",") }</h4>
      <h4>⭐{ avgRating }</h4>
      <h5>₹{ costForTwo / 100 } FOR TWO</h5>
      <h4>{ deliveryTime }min</h4>
    </div>
  );
};

export default RestaurantCard;
