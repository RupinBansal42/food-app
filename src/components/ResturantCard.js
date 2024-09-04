import { cloudinaryImageIdLink } from "../../config/constants";

const ResturantCard = (props) => {
  const { name, id, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    props?.resInfo?.info;
  // Destructuring
  return (
    <div className=" m-4 p-4 w-[250px] bg-gray-100 backdrop-blur-2xl hover:bg-gray-200	">
      <img
        className="w-40 rounded-lg "
        alt="res-logo"
        src={cloudinaryImageIdLink + cloudinaryImageId}
      ></img>
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h4 className="font-bold">{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default ResturantCard;
