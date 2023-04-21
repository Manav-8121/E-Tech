import React, { useState } from "react";
import { data } from "../Data/Data.js";

const Electronic = () => {
  //   console.log(data);
  const [electronic, setElectronic] = useState(data);

  // Filter type Laptop/Mobile/Camera etc...

  const filterType = (category) => {
    setElectronic(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by  Price

  const filterPrice = (price) => {
    setElectronic(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-blue-600 font-bold text-4xl text-center ">
        Top Rated Electronic Items
      </h1>

      {/* {Filter Row} */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* {Filter type} */}
        <div>
          <p className="font-bold text-gray-700 py-3">Filter Type</p>
          <div className=" flex-wrap justify-between max-w-[390px] w-full">
            <button
              onClick={() => setElectronic(data)}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("Laptop")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Laptop
            </button>
            <button
              onClick={() => filterType("Mobile")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Mobile
            </button>
            <button
              onClick={() => filterType("Camera")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Camera
            </button>
            <button
              onClick={() => filterType("SmartWatch")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Smart Watch
            </button>
            <button
              onClick={() => filterType("LED TV")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              LED TV
            </button>
            <button
              onClick={() => filterType("Washing Machine")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Washing Machine
            </button>
            <button
              onClick={() => filterType("Refrigerator")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Refrigerator
            </button>
          </div>
        </div>

        {/* {Filter Price} */}
        <div>
          <p className="font-bold text-gray-700 py-3">Filter Price</p>
          <div className="flex-wrap max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("₹1499")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹1499
            </button>
            {/* <button
              onClick={() => filterPrice("₹1999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹1999
            </button> */}
            <button
              onClick={() => filterPrice("₹2499")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹2499
            </button>
            {/* <button
              onClick={() => filterPrice("₹3999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹3999
            </button> */}
            <button
              onClick={() => filterPrice("₹4999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹4999
            </button>
            <button
              onClick={() => filterPrice("₹5499")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹5499
            </button>
            {/* <button
              onClick={() => filterPrice("₹6499")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹6499
            </button> */}
            <button
              onClick={() => filterPrice("₹6999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹6999
            </button>
            {/* <button
              onClick={() => filterPrice("₹8999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹8999
            </button> */}
            <button
              onClick={() => filterPrice("₹9999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹9999
            </button>
            {/* <button
              onClick={() => filterPrice("₹24,999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹24,999
            </button> */}
            <button
              onClick={() => filterPrice("₹49,999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹49,999
            </button>
            <button
              onClick={() => filterPrice("₹75,384")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹75,384
            </button>
            {/* <button
              onClick={() => filterPrice("₹59,999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹59,999
            </button> */}
            {/* <button
              onClick={() => filterPrice("₹1,03,999")}
              className="m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              ₹1,03,999
            </button> */}
          </div>
        </div>
      </div>
      {/* {Display Electronic devices} */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {electronic.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-blue-600 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronic;
