import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../Redux/slices/cartSlice";

const ItemList = ({ items, dummyE }) => {
  console.log({ dummyE });

  const dispatch = useDispatch();

  const handleAddItem = (selectedItem) => {
    //  when event raise then dispatch an action
    dispatch(addItem(selectedItem));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2  border-gray-300  border-b-2 text-left flex  justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-2">
              <p className=" "> {item?.card?.info?.name}</p>
              <span className=" ">
                {" "}
                - ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>

            <p className="px-2 break-words text-xs">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className=" w-3/12 p-4 ">
            <div className="absolute">
              <button
                className="bg-white px-4 py-2 mx-10 mt-[120px]  text-green-500 rounded-lg shadow-lg"
                // do not do like this ever => onClick={handleAddItem(item)}

                // onClick={()=>handleAddItem(item)} => when you need to pass additional arguments to the event handler function.
                // onClick={handleAddItem(item)} => it invokes the function immediately during rendering and is incorrect for attaching event handlers.
                // onClick={handleAddItem} =>  when you don't need to pass any additional arguments to the event handler. This is the clean and performant way to attach event handlers in most cases.

                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="rounded-lg w-full"
              src={`${CDN_URL}/${item?.card?.info?.imageId}`}
              alt="items-logo"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
