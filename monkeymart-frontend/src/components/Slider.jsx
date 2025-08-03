import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = ({imgArr}) => {

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-[200px] sm:h-[600px]"
      >
        {imgArr.map((slide,ind) => (
          <SwiperSlide key={ind}>
            <img
              src={slide.img}
              alt={`Image Slider ${ind+1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-8 sm:px-16 md:px-24 text-white">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl mb-4">{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
