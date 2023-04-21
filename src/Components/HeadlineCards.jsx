import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* {Cards} */}
      <div className="rounded-xl relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Latest HP- Gaming Laptop
          </p>
          <p className="px-2">Dedicated graphics card (4GB NVIDIA) </p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/5948342/pexels-photo-5948342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      {/* {Cards} */}
      <div className="rounded-xl relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Latest Iphone-13 Pro Max
          </p>
          <p className="px-2">
            There are so many features are available in this latest phone.
          </p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://fdn.gsmarena.com/imgroot/news/21/06/iphone-13-batteries/-1200w5/gsmarena_001.jpg"
          alt="/"
        />
      </div>
      {/* {Cards} */}
      <div className="rounded-xl relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Lot's of Electronic Devices are available
          </p>
          <p className="px-2">camera , phone , ipad , macbook etc...</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
