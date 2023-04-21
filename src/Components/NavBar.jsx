import React, { useState } from "react";
import {
  //   AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  //   AiFillTag,
} from "react-icons/ai";
import { FaShoppingCart, FaUserFriends, FaWallet } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { IoMdHelpCircle, IoIosPricetags } from "react-icons/io";
// import { BsFillSaveFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* {Left side} */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-bold mr-5">
          <span className="text-purple-700">E</span>
          <span className="">-Tech</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pick Up</p>
        </div>
      </div>

      {/* {Search Input} */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Electronic-Devices"
        />
      </div>
      {/* {Cart-Button} */}
      <button className="hidden bg-black text-white md:flex items-center py-2 rounded-full">
        <FaShoppingCart size={20} className="mr-2" /> Cart
      </button>
      {/* {Mobile Menu} */}
      {/* {overlay} */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* {SideDrawer Menu} */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Elec-Devices</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <IoMdHelpCircle size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <IoIosPricetags size={25} className="mr-4" />
              Promotions
            </li>
            {/* <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li> */}
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
