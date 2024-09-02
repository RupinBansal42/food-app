import Shimmer from "./Shimmer";
import { cloudinaryImageIdLink } from "../../config/constants";
import { useParams } from "react-router-dom";
import useResturantMenu from "../../utils/useResturantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resturantInfo = useResturantMenu(resId);

  if (resturantInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    resturantInfo.cards[2].card.card.info;
  const { itemCards } =
    resturantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

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
            <li key={item.card.info.id}>
              {item.card.info.name} - {costForTwoMessage}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
