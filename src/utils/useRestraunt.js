import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestraunt = (id) => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurant(json?.data);
    console.log(json);
  }
  return restaurant;
};

export default useRestraunt;
