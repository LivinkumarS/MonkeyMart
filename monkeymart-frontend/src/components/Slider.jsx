import React, { useEffect, useState, useRef, useCallback } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { GoDot, GoDotFill } from "react-icons/go";

export default function Slider({ imgArr }) {
  const [slideInd, setSlideInd] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  const showPrev = useCallback(() => {
    setSlideInd((prev) => (prev > 0 ? prev - 1 : imgArr.length - 1));
  }, [imgArr.length]);

  const showNext = useCallback(() => {
    setSlideInd((prev) => (prev < imgArr.length - 1 ? prev + 1 : 0));
  }, [imgArr.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNext();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [showNext]);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (startX.current - endX.current > 50) {
      showNext();
    } else if (endX.current - startX.current > 50) {
      showPrev();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="carousel-container relative flex overflow-hidden select-none w-full m-auto rounded-xl aspect-[16/9] sm:aspect-[4/2] md:aspect-[2/1] lg:aspect-[5/2] xl:aspect-[3/1] max-h-[1000px]"
    >
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(${slideInd * -100}%)`,
          width: `${imgArr.length * 100}%`,
        }}
      >
        {imgArr.map((imgUrl, index) => (
          <div
            key={index}
            className="w-full h-full grow-0 shrink-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        ))}
      </div>

      {/* Arrow - Next */}
      <div
        onClick={showNext}
        className="absolute top-0 bottom-0 right-0 p-3 bg-[#0000004f] text-white hidden sm:flex items-center cursor-pointer opacity-10 hover:opacity-100 transition-opacity duration-200"
      >
        <HiArrowRight className="text-[20px]" />
      </div>

      {/* Arrow - Prev */}
      <div
        onClick={showPrev}
        className="absolute top-0 bottom-0 left-0 p-3 bg-[#0000004f] text-white hidden sm:flex items-center cursor-pointer opacity-10 hover:opacity-100 transition-opacity duration-200"
      >
        <HiArrowLeft className="text-[20px]" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1 items-center justify-center h-3">
        {imgArr.map((_, index) => {
          const DotIcon = index === slideInd ? GoDotFill : GoDot;
          return (
            <DotIcon
              key={index}
              className="cursor-pointer text-[10px] sm:text-[15px] text-gray-800 opacity-70 hover:opacity-100 transition-opacity duration-150"
              onClick={() => setSlideInd(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
