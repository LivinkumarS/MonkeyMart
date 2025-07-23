import React from "react";
import Slider from "./Slider";

import slide1 from "../assets/Home/Slider/1.jpg";
import slide2 from "../assets/Home/Slider/2.jpg";
import slide3 from "../assets/Home/Slider/3.jpg";
import slide4 from "../assets/Home/Slider/4.jpg";
import slide5 from "../assets/Home/Slider/5.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const slides = [
  {
    id: 1,
    img: slide1,
    title: "Men's Clothing",
    subtitle: "Explore the latest styles in shirts, jeans, and more."
  },
  {
    id: 2,
    img: slide2,
    title: "Footwear Collection",
    subtitle: "Sneakers, formal shoes & more — all in one place.",
    cta: "Shop Footwear",
  },
  {
    id: 3,
    img: slide3,
    title: "Premium Coat Suits",
    subtitle: "Tailored suits for your important moments.",
  },
  {
    id: 4,
    img: slide4,
    title: "Casual Vibes",
    subtitle: "Relaxed fits and everyday comfort wear."
  },
  {
    id: 5,
    img: slide5,
    title: "Stylish Blazers",
    subtitle: "Perfect layers for work and weekend."
  },
];

  return (
    <div className="my-5">
      <Slider imgArr={slides} />

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
