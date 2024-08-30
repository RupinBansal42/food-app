import {headerURL} from "../../config/constants"

const Header = () => {
  return (
    <div className="header" >
      <div className="logo-container">
        <img className="logo" src={headerURL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
