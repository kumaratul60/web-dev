import { CDN_URL } from "../../../utils/constants";

const styleColor = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log({resCardData:resData});

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    sla,
    cloudinaryImageId,
  } = resData;

  return (
    <div
      data-testid="resCard"
      className="relative m-4 p-4 w-[250px] rounded-xl transition transform hover:scale-105 hover:shadow-lg bg-white"
    >
      <img
        className="rounded-lg w-full h-40 object-cover"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3 className="py-2 font-semibold text-lg">{name}</h3>
      <h4 className="py-1 break-words text-gray-600">{cuisines.join(", ")}</h4>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">⭐</span>
          <span className="py-1 text-sm">{avgRating}</span>
        </div>
        <span className="py-1 text-sm">
          {sla?.deliveryTime ? `${sla.deliveryTime} min` : "10 min"}
        </span>
      </div>
      <div className="flex justify-center">
        <h5 className="py-1 text-green-600">{costForTwo}</h5>
      </div>
    </div>
  );
};

//  Higher Order Component ==> take input as component and return a enhanced component as the output. HOC are pure functions

//  input -> RestaurantCard
//  output -> RestaurantCardPromoted
// {...props} => we receive all the props which is passed to PromotedRestaurantCard component

export const withPromotedLabel = (RestaurantCardComponentAsParam) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="m-2 p-2  bg-gray-900  rounded-lg text-white absolute top-0 left-0 z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
