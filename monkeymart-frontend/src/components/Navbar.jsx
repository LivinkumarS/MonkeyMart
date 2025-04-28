import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <div className="py-3 flex items-center justify-between gap-5">
      <Link to={"/"} className="flex items-center justify-center gap-1">
        <img src={Logo} alt="Logo Image" className="w-12 lg:w-14 h-auto" />
        <span
          className="text-xl lg:text-3xl font-bold text-[#db4b3d]"
          style={{ fontFamily: "bangers" }}
        >
          Monkey Mart
        </span>
      </Link>

      <ul className="hidden sm:flex items-start justify-center gap-4">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p className="text-xs md:text-sm font-semibold">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p className="text-xs md:text-sm font-semibold">COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p className="text-xs md:text-sm font-semibold">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p className="text-xs md:text-sm font-semibold">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-3 lg:gap-6">
        <CiSearch className="cursor-pointer text-[25px]" />

        <Link to={"/cart"} className="relative">
          <CiShoppingCart className="cursor-pointer text-[25px]" />

          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            9
          </p>
        </Link>

        <div className="group relative">
          <CiUser className="cursor-pointer text-[25px]" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Sign out</p>
            </div>
          </div>
        </div>

        <HiMenuAlt1
          onClick={() => {
            setShowSidebar(true);
          }}
          className="sm:hidden cursor-pointer text-[25px]"
        />
      </div>

      {/* Sidebar Menu */}

      <div
        className={`sm:hidden fixed min-h-[100vh] pt-5 top-0 right-0 z-10 overflow-hidden bg-white transition-all duration-700 ${
          showSideBar ? "w-full" : "w-0"
        }`}
      >
        <div
          onClick={() => setShowSidebar(false)}
          className="flex flex-col w-full"
        >
          <IoMdClose className="text-[50px] cursor-pointer pl-5" />
          <NavLink
            onClick={() => setShowSidebar(false)}
            to={"/"}
            className="p-5 shadow-md hover:bg-gray-100 text-gray-500 sideA"
          >
            <span className="text-3xl">HOME</span>
          </NavLink>
          <NavLink
            onClick={() => setShowSidebar(false)}
            to={"/collection"}
            className="p-5 shadow-md hover:bg-gray-100 text-gray-500 sideA"
          >
            <span className="text-3xl">COLLECTION</span>
          </NavLink>
          <NavLink
            onClick={() => setShowSidebar(false)}
            to={"/about"}
            className="p-5 shadow-md hover:bg-gray-100 text-gray-500 sideA"
          >
            <span className="text-3xl">ABOUT</span>
          </NavLink>
          <NavLink
            onClick={() => setShowSidebar(false)}
            to={"/contact"}
            className="p-5 shadow-md hover:bg-gray-100 text-gray-500 sideA"
          >
            <span className="text-3xl">CONTACT</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
