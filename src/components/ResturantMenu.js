import Shimmer from "./Shimmer";
import { cloudinaryImageIdLink } from "../../config/constants";
import { useParams } from "react-router-dom";
import useResturantMenu from "../../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resturantInfo = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resturantInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    resturantInfo.cards[2].card.card.info;
  const { itemCards } =
    resturantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resturantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);
  return (
    <div className="text-center my-10">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/**
       * Accordian - Header / Body[Collapsable]
       */}
      {categories.map((category, index) => (
        <ResturantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItem = { index === showIndex && true}
          setShowIndex ={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
