import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import Shrimmer from "./Shrimmer";
import "../index.css";
import useRestraunt from "../utils/useRestraunt";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  const { id } = useParams();

  // const [restaurant, setRestaurant] = useState({});

  const restaurant = useRestraunt(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      <div className="res-menu">
        <h1>{restaurant.name}</h1>
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        />
        <div className="res-detail">
          <h3 className="area">{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
          <h3>{restaurant?.avgRating}</h3>
        </div>
      </div>
     
      <div>
        <h1>Menu</h1>
        {restaurant?.menu?.items === undefined ? (
          <Shrimmer />
        ) : (
          Object.values(restaurant?.menu?.items).map((item) => (
            <div key={item?.id}>
              {item?.name} <button className="p-2 bg-red-100" onClick={()=> addFoodItem(item)}>Add</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RestrauntMenu;
