import { restrautList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shrimmer from "./Shrimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";

const NoRestaurants = ({ searchText }) => {
  return (
    <h1 className="noRestsurant">
      Sorry. No restaurant found!!! with {searchText}..
    </h1>
  );
};

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    //console.log(json);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>You are offline.</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <Shrimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input
          value={user.name}
          onChange={(e) => {
            setUser({ ...user,name: e.target.value });
          }}
        /> */}
        {/* <input
          value={user.email}
          onChange={(e) => {
            setUser({ ...user,email: e.target.value });
          }}
        /> */}
      </div>
      <div className="outer-body">
        <div className="body">
          {filteredRestaurants?.length === 0 ? (
            <NoRestaurants searchText={searchText} />
          ) : (
            filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.data?.id}
                  key={restaurant?.data?.id}
                >
                  <RestaurantCard {...restaurant?.data} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
