import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";
import "../index.css";

const Title = () => {
  return (
    <a href="/">
      <img
        className="title"
        alt="image"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

const loggedInUser = () => {
  return true;
};

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // const {user} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">Cart{cartItems.length}</Link>
          </li>
        </ul>
      </div>
      {/* {user.name} */}
      {loggedIn ? (
        <button
          className="logInlogOut"
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          LogOut
        </button>
      ) : (
        <button
          className="logInlogOut"
          onClick={() => {
            setLoggedIn(true);
          }}
        >
          LogIn
        </button>
      )}
    </div>
  );
};

export default Header;
