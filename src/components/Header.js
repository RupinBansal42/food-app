import { useState , lazy} from "react";
import { headerURL } from "../../config/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header = () => {
  let [buttonName, setButtonValue] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div class="flex justify-between bg-blue-400 text-cyan-50 shadow-lg m-2 mb-4 mt-4 px-2">
      <div className="">
        <img className="logo" src={headerURL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-8 m-8 space-x-10 ">
          <li> Online Status : {onlineStatus ? "Green" : "Red"}</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>
            <Link to="/">Home</Link>
          </li>
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
