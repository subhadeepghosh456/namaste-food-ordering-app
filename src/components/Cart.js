import { useSelector, useDispatch } from "react-redux";
import CartFood from "./CartFood";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);
  return (
    <>
      <button
        className="bg-green-100 p-2 m-2"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((items) => (
          <CartFood
            key={items.key}
            {...items}
            
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
