import { cloudinaryImageIdLink } from "../../config/constants";

const ResturantCard = (props) => {
  const { name, id, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    props?.resInfo?.info;
  // Destructuring
  return (
    <div className="resturant-card">
      <img
        className="card-image"
        alt="res-logo"
        src={cloudinaryImageIdLink + cloudinaryImageId}
      ></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default ResturantCard;
