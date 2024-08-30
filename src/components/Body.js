import ResturantCard from "./ResturantCard";
import resList from "../../config/swiggyData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resturant) => {<ResturantCard resData={resturant} />})}
        <ResturantCard resData={resList[0]} />
        <ResturantCard resData={resList[1]} />
        <ResturantCard resData={resList[2]} />
        <ResturantCard resData={resList[3]} />
        <ResturantCard resData={resList[4]} />
        <ResturantCard resData={resList[5]} />
        <ResturantCard resData={resList[6]} />
        <ResturantCard resData={resList[7]} />
      </div>
    </div>
  );
};

export default Body;
