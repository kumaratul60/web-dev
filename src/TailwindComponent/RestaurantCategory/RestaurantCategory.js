import { useState } from "react";
import ItemList from "../ItemList";

const RestaurantCategory = ({ cardData, showItems, setShowIndex,dummyC }) => {
  //   const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    //   setShowItems(!showItems);
    setShowIndex();
  };

  /****

if a component has own state is known as uncontrolled component,
if a component has no own state is known as controlled component means it controlled by parent component like RestaurantCategory component

*/

  return (
    <div className=" ">
      {/* Header */}
      {/* width = half of the page => w-6/12 */}
      <div className=" w-6/12 mx-auto my-4 p-4  shadow-lg bg-slate-100  rounded">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold ">
            {cardData.title} (
            {cardData?.itemCards?.length > 0 ? cardData?.itemCards?.length : 0})
          </span>
          <span className="">⬇️</span>
        </div>
        {/* Accordions body */}
        {showItems && <ItemList items={cardData?.itemCards} dummyD  = {dummyC} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
