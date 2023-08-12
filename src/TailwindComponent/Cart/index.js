import { useDispatch, useSelector } from "react-redux";
import ItemList from "../ItemList";
import { clearCart } from "../../Redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

//   Never subscribe whole  store at a time, always subscribe a small portion of store as of requirement
  const cartItems = useSelector((store) => store.cart.items);
  console.log({ cartItems });
  const r = "check";

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold">cart</h1>
      <div className="w-6/12 mx-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          {cartItems.length > 0 ? "Clear Cart" : "Add to cart"}
        </button>

        <ItemList items={cartItems} dummyE={r} />
      </div>
    </div>
  );
};
export default Cart;
