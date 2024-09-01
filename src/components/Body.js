import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { APIURL } from "../../config/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filteredresturantList, setSearchResturantList] = useState([]);

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(APIURL);
      const jsonData = await data.json();
      setResturantList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setSearchResturantList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return resturantList === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Enter Resturant Name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              searchResturant = resturantList.filter((resturant) =>
                resturant.info.name.toLowerCase().includes(searchText)
              );
              setSearchResturantList(searchResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            {
              filterList = resturantList.filter(
                (resturant) => resturant.info.avgRating > 4.3
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
              filterList = resturantList.filter(
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
        {filteredresturantList.map((resturant) => (
          <ResturantCard key={resturant.info.id} resInfo={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
