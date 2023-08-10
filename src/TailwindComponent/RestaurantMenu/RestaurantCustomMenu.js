import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";

const RestaurantCustomMenu = () => {
  const { resId } = useParams();

  const resCustomInfo = useRestaurantMenu(resId);

  if (resCustomInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resCustomInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resCustomInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <ul>
        {itemCards !== undefined ? (
          <>
            {itemCards.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} -{" Rs."}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            ))}
          </>
        ) : (
          "no items available here now"
        )}
      </ul>
    </div>
  );
};

export default RestaurantCustomMenu;
