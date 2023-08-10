import { CDN_URL } from "../../utils/constants";

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
        <h4 className="py-1">{deliveryTime ?? "10 "}min</h4>
      </div>
      <div className=" flex justify-center">
        <h5 className="py-1">₹{costForTwo / 100 ? "NaN" : "400 "} FOR TWO</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
