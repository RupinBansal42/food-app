import { useState } from "react";
import ItemList from "./itemList";

const ResturantCategory = ({ data, showItem, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex()
    }

  return (
    <div className="">
      <div className="  shadow-lg w-10/12 bg-gray-50 p-4 mx-auto my-2 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>-</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
