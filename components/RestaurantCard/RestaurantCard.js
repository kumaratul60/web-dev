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
  } = resData?.data;

  return (
    <div
      className="res-container"
      // style={styleColor}
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fill/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>⭐{avgRating}</h4>
      <h5>₹{costForTwo / 100} FOR TWO</h5>
      <h4>{deliveryTime}min</h4>
    </div>
  );
};

export default RestaurantCard;
