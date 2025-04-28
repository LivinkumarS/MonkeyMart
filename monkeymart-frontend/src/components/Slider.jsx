import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { GoDot, GoDotFill } from "react-icons/go";

export default function Slider({ imgArr }) {
  const [slideInd, setSlideInd] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNext();
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let startX = 0;
  let endX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (startX - endX > 50) {
      showNext();
    } else if (endX - startX > 50) {
      showPrev();
    }
  };

  const showPrev = () => {
    setSlideInd((prev) => {
      return prev > 0 ? prev - 1 : imgArr.length - 1;
    });
  };

  const showNext = () => {
    setSlideInd((prev) => {
      return prev < imgArr.length - 1 ? prev + 1 : 0;
    });
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="carousel-container select-none w-full m-auto rounded-xl aspect-[16/9] sm:aspect-[4/2] md:aspect-[2/1] lg:aspect-[5/2] xl:aspect-[3/1] max-h-[1000px] relative flex gap-0 overflow-hidden"
    >
      {imgArr.map((ele, ind) => (
        <img
          key={ind}
          className="w-full h-full object-cover grow-0 shrink-0 transition-all duration-500"
          style={{ transform: `translateX(${slideInd * -100}%)` }}
          src={ele}
          alt={"Slider Image" + (ind + 1)}
        />
      ))}
      <div
        className="p-3 bg-[#0000004f] text-white hidden sm:flex opacity-10 items-center cursor-pointer hover:opacity-100 absolute top-0 bottom-0 right-0"
        onClick={() => {
          showNext();
        }}
      >
        <HiArrowRight className="text-[20px] text-white" />
      </div>
      <div
        className="p-3 bg-[#0000004f] text-white hidden sm:flex opacity-10 items-center cursor-pointer hover:opacity-100 absolute top-0 bottom-0 left-0"
        onClick={() => {
          showPrev();
        }}
      >
        <HiArrowLeft className="text-[20px] text-white" />
      </div>

      <div
        className="flex items-center justify-center gap-1 h-3 w-fit overflow-hidden absolute bottom-1"
        style={{ transform: "translateX(-50%)", left: "50%" }}
      >
        {imgArr.map((_, ind) =>
          ind === slideInd ? (
            <GoDotFill
              key={ind}
              className={`cursor-pointer text-[10px] sm:text-[15px] shrink-0 grow-0 text-gray-800 ${
                ind === slideInd ? "opacity-100" : "opacity-70"
              }`}
              onClick={() => {
                setSlideInd(ind);
              }}
            />
          ) : (
            <GoDot
              key={ind}
              className={`cursor-pointer text-[10px] sm:text-[15px] shrink-0 grow-0 text-gray-800 ${
                ind === slideInd ? "opacity-100" : "opacity-70"
              }`}
              onClick={() => {
                setSlideInd(ind);
              }}
            />
          )
        )}
      </div>
    </div>
  );
}
