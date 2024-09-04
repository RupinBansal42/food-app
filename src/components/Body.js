import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import { APIURL } from "../../config/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filteredresturantList, setSearchResturantList] = useState([]);
  console.log("RES LIST", resturantList);
  const [searchText, setSearchText] = useState([]);

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

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
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black py-2 px-10"
            placeholder="Enter Resturant Name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="h-10 px-6 m-4 font-semibold rounded-md bg-gray-600 text-white"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="h-10 px-6 font-semibold rounded-md bg-gray-600 text-white"
            onClick={() => {
              {
                filterList = filteredresturantList.filter(
                  (resturant) => resturant.info.avgRating > 4.3
                );
              }
              setResturantList(filterList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="h-10 px-6 font-semibold rounded-md bg-gray-600 text-white"
            onClick={() => {
              {
                filterList = filteredresturantList.filter(
                  (resturant) => resturant.info.sla.deliveryTime < 15
                );
              }
              setResturantList(filterList);
            }}
          >
            Rapid Delivery
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredresturantList.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturant/" + resturant.info.id}>
            {resturant ? <ResturantCardPromoted resInfo = {resturant}/> : <ResturantCard resInfo={resturant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
