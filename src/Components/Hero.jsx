import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* {overlay} */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            The <span className="text-blue-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            <span className="text-blue-500">Elec-Devices</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://www.pcgamesn.com/wp-content/uploads/2021/07/Razer_Barracuda_X_wireless_gaming_headset_for_gaming_PC_Nintendo_Switch_Playstation-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
