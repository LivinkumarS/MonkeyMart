import React, { useEffect, useState, useRef, useCallback } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { GoDot, GoDotFill } from "react-icons/go";

export default function Slider({ imgArr }) {
  const [slideInd, setSlideInd] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const startX = useRef(0);
  const endX = useRef(0);

  // Preload images
  useEffect(() => {
    imgArr.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) =>
          prev.includes(index) ? prev : [...prev, index]
        );
      };
    });
  }, [imgArr]);

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
      className="carousel-container select-none w-full m-auto rounded-xl aspect-[16/9] sm:aspect-[4/2] md:aspect-[2/1] lg:aspect-[5/2] xl:aspect-[3/1] max-h-[1000px] relative flex gap-0 overflow-hidden"
    >
      {imgArr.map((ele, ind) => (
        <img
          key={ind}
          src={ele}
          alt={`Slider Image ${ind + 1}`}
          loading="eager"
          onLoad={() => {
            if (!loadedImages.includes(ind)) {
              setLoadedImages((prev) => [...prev, ind]);
            }
          }}
          className={`w-full h-full object-cover grow-0 shrink-0 transition-all duration-500 ${
            loadedImages.includes(ind) ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateX(${slideInd * -100}%)`,
          }}
        />
      ))}

      {/* Next Arrow */}
      <div
        className="p-3 bg-[#0000004f] text-white hidden sm:flex opacity-10 items-center cursor-pointer hover:opacity-100 absolute top-0 bottom-0 right-0"
        onClick={showNext}
      >
        <HiArrowRight className="text-[20px] text-white" />
      </div>

      {/* Prev Arrow */}
      <div
        className="p-3 bg-[#0000004f] text-white hidden sm:flex opacity-10 items-center cursor-pointer hover:opacity-100 absolute top-0 bottom-0 left-0"
        onClick={showPrev}
      >
        <HiArrowLeft className="text-[20px] text-white" />
      </div>

      {/* Dots */}
      <div
        className="flex items-center justify-center gap-1 h-3 w-fit overflow-hidden absolute bottom-1"
        style={{ transform: "translateX(-50%)", left: "50%" }}
      >
        {imgArr.map((_, ind) => {
          const DotIcon = ind === slideInd ? GoDotFill : GoDot;
          return (
            <DotIcon
              key={ind}
              className="cursor-pointer text-[10px] sm:text-[15px] shrink-0 grow-0 text-gray-800 opacity-70 hover:opacity-100"
              onClick={() => setSlideInd(ind)}
            />
          );
        })}
      </div>
    </div>
  );
}
