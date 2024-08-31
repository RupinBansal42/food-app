import ResturantCard from "./ResturantCard";
import resList from "../../config/swiggyData";
import { useState } from "react";
const Body = () => {
  const [resturantList, setResturantList] = useState(resList); // Gives you state varaible
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            {
              filterList = resList.filter(
                (resturant) => resturant.info.avgRating === 4.3
              );
            }
            setResturantList(filterList);
          }}
        >
          Top Rated Resturants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            {
              filterList = resList.filter(
                (resturant) => resturant.info.sla.deliveryTime < 15
              );
            }
            setResturantList(filterList);
          }}
        >
          Rapid Delivery
        </button>
      </div>
      <div className="res-container">
        {resturantList.map((resturant) => (
          <ResturantCard resInfo={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
