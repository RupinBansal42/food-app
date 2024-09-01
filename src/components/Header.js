import { useState } from "react";
import { headerURL } from "../../config/constants";

const Header = () => {
  let [buttonName, setButtonValue] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={headerURL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
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
