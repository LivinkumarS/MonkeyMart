import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="mt-10 sm:mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mb-5 gap-y-10">
        <div className="flex flex-col gap-4 items-start  justify-start col-span-2 lg:col-span-3">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[100px] sm:w-[150px] cursor-pointer"
            />
          </Link>

          <p className="text-gray-600 text-sm sm:text-md max-w-[500px]">
            Monkey Mart is your go-to destination for premium men’s fashion.
            Shop stylish apparel, enjoy exclusive deals, and experience
            top-notch customer service—all crafted to elevate your everyday
            wardrobe.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <h2 className="font-bold text-xl underline underline-offset-4 mb-4">
            PAGES
          </h2>
          <Link to={"/"} className="text-sm sm:text-md text-gray-600">
            Home
          </Link>
          <Link to={"/collection"} className="text-sm sm:text-md text-gray-600">
            Collection
          </Link>
          <Link to={"/about"} className="text-sm sm:text-md text-gray-600">
            About
          </Link>
          <Link to={"/contact"} className="text-sm sm:text-md text-gray-600">
            Contact
          </Link>
        </div>

        <div className="flex flex-col items-start justify-start gap-1">
          <h2 className="text-xl font-bold underline-offset-4 underline  mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-sm text-gray-600">+91 9988776655</p>
          <p className="text-sm text-gray-600">
            block 21, shivam street, karur-17
          </p>
          <p className="text-sm text-gray-600">info@monkemart.abc</p>
        </div>
      </div>
      <p className="text-center text-sm mb-10 font-semibold">
        Copyright {new Date().getFullYear()}@ monkeymart.abc - All Right
        Reserved.
      </p>
    </div>
  );
}
