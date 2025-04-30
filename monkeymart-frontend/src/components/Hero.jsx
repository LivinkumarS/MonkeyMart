import React from "react";
import Slider from "./Slider";

import slide1 from "../assets/Home/Slider/1.jpg";
import slide2 from "../assets/Home/Slider/2.jpg";
import slide3 from "../assets/Home/Slider/3.jpg";
import slide4 from "../assets/Home/Slider/4.jpg";
import slide5 from "../assets/Home/Slider/5.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="my-5">
      <Slider imgArr={[slide5, slide2, slide3, slide4, slide1]} />

      <div>
        <h2 className="text-center text-[20px] sm:text-[30px] font-semibold text-gray-700 flex items-center justify-start sm:my-5 gap-3">
          <span className="w-9 h-1 bg-gray-700 block"></span> Our Best Sellers
          
        </h2>

        <Link
          to={"/collection"}
          className="text-center text- w-full block sm:text-[35px] font-extrabold"
        >
          Shop Now
        </Link>

        <h2 className="text-center text-[20px] sm:text-[30px] font-semibold text-gray-700 flex items-center justify-end sm:my-5 gap-3">
          Latest Arrivals
          <span className="w-9 h-1 bg-gray-700 block"></span>
        </h2>
      </div>
    </div>
  );
}
