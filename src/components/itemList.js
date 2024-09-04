import { cloudinaryImageIdLink } from "../../config/constants";
const ItemList = ({ items }) => {
  return (
    <div className="w-9/12 ">
      <div className="py-2">
        {items.map((item) => (
          <div
            key={item.card.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div>
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span> - ₹ {item.card.info.price / 100}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-2">
              <div className="absolute">
                <button className=" h-10 px-6 mx-16 font-semibold rounded-md bg-gray-500 text-white">
                  ADD +
                </button>
              </div>
              <img
                className="w-full"
                src={cloudinaryImageIdLink + item.card.info.imageId}
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
