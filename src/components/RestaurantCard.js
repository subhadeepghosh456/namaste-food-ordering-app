import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { IMG_CDN_URL } from "../constant";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, area }) => {
  // const { user } = useContext(UserContext);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
      <div className="body-bottom">
        <h2 className="resturant-name">{name}</h2>
        <h3 className="cuisines">{cuisines.join(", ")}</h3>
        
        <h4 className="area">{area}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
