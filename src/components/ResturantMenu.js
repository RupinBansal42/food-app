import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../../config/constants";
import { cloudinaryImageIdLink } from "../../config/constants";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resturantInfo, setResturantInfo] = useState(null);
  const {resId} = useParams()
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log(
      "jsonData",
      jsonData.data.cards[2]
    );
    setResturantInfo(jsonData.data);
  };

  if (resturantInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    resturantInfo.cards[2].card.card.info;
  const { itemCards } =
    resturantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log("ITEM CARD", itemCards);

  return (
    <div className="menu">
      <div className="menu-item">
        <img
          className="resturant-menu"
          alt="res-logo"
          src={cloudinaryImageIdLink + cloudinaryImageId}
        ></img>
        <h1>{name}</h1>
        <h3>{cuisines}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwoMessage}</h3>
        <h3>Resturant Menu Details</h3>
        <ul>
          {itemCards.map((item) => (
              <li key = {item.card.info.id}>
                {item.card.info.name} - {costForTwoMessage}
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
