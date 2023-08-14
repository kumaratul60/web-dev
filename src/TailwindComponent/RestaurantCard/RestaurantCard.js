import { CDN_URL } from "../../utils/constants";

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
    <div className="m-4 p-4 w-[250px] rounded-xl transition ease-in-out delay-150  hover:-translate-y-2 hover:bg-pink-100">
      <img
        className="rounded-lg"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3 className=" py-2 font-bold text-lg">{name}</h3>
      <h4 className="py-1 break-words">{cuisines.join(",")}</h4>
      <div className="flex justify-between">
        <h4 className="py-1">⭐{avgRating}</h4>
        <h4 className="py-1">{sla.deliveryTime ?? "10 "}min</h4>
      </div>
      <div className=" flex justify-center">
        <h5 className="py-1">{costForTwo}</h5>
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
      <div>
        <label className="m-2 p-2 bg-gray-900 rounded-lg text-white absolute">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
