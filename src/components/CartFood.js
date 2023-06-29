import { IMG_CDN_URL } from "../constant";
import { useState } from "react";


const CartFood = ({ name, description, price, cloudinaryImageId, key }) => {
 
  const [state, setState] = useState(false);
  return (
    <div className="w-60 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>{price / 100}</h4>
      <button
        className="bg-green-100 p-2 m-2"
       
      >
        Delete
      </button>
      <h2 className="text-bold">
        Description
        {state ? (
          <button onClick={() => setState(false)}>See Less...</button>
        ) : (
          <button onClick={() => setState(true)}>See More...</button>
        )}
      </h2>
      {state && <h4>{description}</h4>}
    </div>
  );
};

export default CartFood;
