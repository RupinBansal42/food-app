import { useState } from "react";
import { headerURL } from "../../config/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [buttonName, setButtonValue] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={headerURL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to= "/">Home</Link></li>
          <li>Cart</li>
          <li>
            {" "}
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="Login-button"
            onClick={() =>
              buttonName === "Login"
                ? setButtonValue(`Logout`)
                : setButtonValue(`Login`)
            }
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
