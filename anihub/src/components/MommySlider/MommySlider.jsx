/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import ms1 from "./MommySlider-assets/ms1.jpg";
import ms2 from "./MommySlider-assets/ms2.jpg";
import ms3 from "./MommySlider-assets/ms3.jpg";
import ms4 from "./MommySlider-assets/ms4.jpg";
import ms5 from "./MommySlider-assets/ms5.jpg";
import ms6 from "./MommySlider-assets/ms6.jpg";
import ms7 from "./MommySlider-assets/ms7.jpg";
import ms8 from "./MommySlider-assets/ms8.jpg";
import ms9 from "./MommySlider-assets/ms9.jpg";
import ms10 from "./MommySlider-assets/ms10.jpg";
import ms11 from "./MommySlider-assets/ms11.jpg";
import ms12 from "./MommySlider-assets/ms12.jpg";
import ms13 from "./MommySlider-assets/ms13.jpg";
import ms14 from "./MommySlider-assets/ms14.jpg";
import ms15 from "./MommySlider-assets/ms15.jpg";
import ms16 from "./MommySlider-assets/ms16.jpg";
import ms17 from "./MommySlider-assets/ms17.jpg";
import ms18 from "./MommySlider-assets/ms18.jpg";
import ms19 from "./MommySlider-assets/ms19.jpg";
import ms20 from "./MommySlider-assets/ms20.jpg";
import ms21 from "./MommySlider-assets/ms21.jpg";
import ms22 from "./MommySlider-assets/ms22.jpg";
import PhotosCollectionTitle from "../PhotosColectionTitle/PhotosCollectionTitle";

const MommySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: ms1, title: "ms1" },
    { url: ms2, title: "ms2" },
    { url: ms3, title: "ms3" },
    { url: ms4, title: "ms4" },
    { url: ms5, title: "ms5" },
    { url: ms6, title: "ms6" },
    { url: ms7, title: "ms7" },
    { url: ms8, title: "ms8" },
    { url: ms9, title: "ms9" },
    { url: ms10, title: "ms10" },
    { url: ms11, title: "ms11" },
    { url: ms12, title: "ms12" },
    { url: ms13, title: "ms13" },
    { url: ms14, title: "ms14" },
    { url: ms15, title: "ms15" },
    { url: ms16, title: "ms16" },
    { url: ms17, title: "ms17" },
    { url: ms18, title: "ms18" },
    { url: ms19, title: "ms19" },
    { url: ms20, title: "ms20" },
    { url: ms21, title: "ms21" },
    { url: ms22, title: "ms22" },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex]); // Dependency array to restart interval on slide change

  return (
    <>
      <PhotosCollectionTitle
        titel={"Mommys"}
        subTitel={"These are some Milf"}
        Id={"MOMMY"}
        path={"/mommy"}
        path2={"/mommy-all"}
      />
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-7 px-4 relative group">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            boxShadow: "0px 0px 105px 45px rgba(255, 182, 193, 0.9)",
            WebkitBoxShadow: "0px 0px 105px 45px rgba(255, 182, 193, 0.9)",
            MozBoxShadow: "0px 0px 105px 45px rgba(255, 182, 193, 0.9)",
          }}
          className="w-full h-full bg-no-repeat bg-center duration-500 bg-contain rounded-3xl"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MommySlider;
