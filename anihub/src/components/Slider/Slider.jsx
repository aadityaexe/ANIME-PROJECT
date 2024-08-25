/* eslint-disable react-hooks/exhaustive-deps */
import "./Slider.css";
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { CSSTransition } from "react-transition-group";

// Import your images
import s0 from "./Slider-assets/s0.jpg";
import s1 from "./Slider-assets/s1.jpg";
import s2 from "./Slider-assets/s2.jpg";
import s3 from "./Slider-assets/s3.jpg";
import s4 from "./Slider-assets/s4.jpg";
import s5 from "./Slider-assets/s5.jpg";
import s6 from "./Slider-assets/s6.jpg";
import s7 from "./Slider-assets/s7.jpg";
import s8 from "./Slider-assets/s8.jpg";
import s9 from "./Slider-assets/s9.jpg";
import s10 from "./Slider-assets/s10.png";
import s11 from "./Slider-assets/s11.jpg";
import s12 from "./Slider-assets/s12.jpg";
import s13 from "./Slider-assets/s13.jpg";
import s14 from "./Slider-assets/s14.jpg";
import s15 from "./Slider-assets/s15.jpg";
import s16 from "./Slider-assets/s16.jpg";
import s17 from "./Slider-assets/s17.jpg";
import s18 from "./Slider-assets/s18.jpg";
import s19 from "./Slider-assets/s19.jpg";
import s20 from "./Slider-assets/s20.jpg";
import s21 from "./Slider-assets/s21.jpg";
import s22 from "./Slider-assets/s22.jpg";
import s23 from "./Slider-assets/s23.jpg";
import s24 from "./Slider-assets/s24.jpg";
import s25 from "./Slider-assets/s25.jpg";
import s26 from "./Slider-assets/s26.jpg";
import s27 from "./Slider-assets/s27.jpg";
import s28 from "./Slider-assets/s28.jpg";
import s29 from "./Slider-assets/s29.jpg";
import s30 from "./Slider-assets/s30.jpg";
import s31 from "./Slider-assets/s31.jpg";
import s32 from "./Slider-assets/s32.jpg";
import s33 from "./Slider-assets/s33.jpg";
import s34 from "./Slider-assets/s34.jpg";
import s35 from "./Slider-assets/s35.jpg";
import s36 from "./Slider-assets/s36.jpg";
import s37 from "./Slider-assets/s37.jpg";
import s38 from "./Slider-assets/s38.jpg";
import s39 from "./Slider-assets/s39.jpg";
import s40 from "./Slider-assets/s40.jpg";
import s41 from "./Slider-assets/s41.jpg";
import s42 from "./Slider-assets/s42.jpg";
import s43 from "./Slider-assets/s43.jpg";
import s44 from "./Slider-assets/s44.jpg";
import s45 from "./Slider-assets/s45.jpg";
import s46 from "./Slider-assets/s46.jpg";
import s47 from "./Slider-assets/s47.jpg";
import s48 from "./Slider-assets/s48.jpg";
import s49 from "./Slider-assets/s49.jpg";
import s50 from "./Slider-assets/s50.jpg";
import s51 from "./Slider-assets/s51.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: s0, title: "Slide 0" },
    { url: s1, title: "Slide 1" },
    { url: s2, title: "Slide 2" },
    { url: s3, title: "Slide 3" },
    { url: s4, title: "Slide 4" },
    { url: s5, title: "Slide 5" },
    { url: s6, title: "Slide 6" },
    { url: s7, title: "Slide 7" },
    { url: s8, title: "Slide 8" },
    { url: s9, title: "Slide 9" },
    { url: s10, title: "Slide 10" },
    { url: s11, title: "Slide 11" },
    { url: s12, title: "Slide 12" },
    { url: s13, title: "Slide 13" },
    { url: s14, title: "Slide 14" },
    { url: s15, title: "Slide 15" },
    { url: s16, title: "Slide 16" },
    { url: s17, title: "Slide 17" },
    { url: s18, title: "Slide 18" },
    { url: s19, title: "Slide 19" },
    { url: s20, title: "Slide 20" },
    { url: s21, title: "Slide 21" },
    { url: s22, title: "Slide 22" },
    { url: s23, title: "Slide 23" },
    { url: s24, title: "Slide 24" },
    { url: s25, title: "Slide 25" },
    { url: s26, title: "Slide 26" },
    { url: s27, title: "Slide 27" },
    { url: s28, title: "Slide 28" },
    { url: s29, title: "Slide 29" },
    { url: s30, title: "Slide 30" },
    { url: s31, title: "Slide 31" },
    { url: s32, title: "Slide 32" },
    { url: s33, title: "Slide 33" },
    { url: s34, title: "Slide 34" },
    { url: s35, title: "Slide 35" },
    { url: s36, title: "Slide 36" },
    { url: s37, title: "Slide 37" },
    { url: s38, title: "Slide 38" },
    { url: s39, title: "Slide 39" },
    { url: s40, title: "Slide 40" },
    { url: s41, title: "Slide 41" },
    { url: s42, title: "Slide 42" },
    { url: s43, title: "Slide 43" },
    { url: s44, title: "Slide 44" },
    { url: s45, title: "Slide 45" },
    { url: s46, title: "Slide 46" },
    { url: s47, title: "Slide 47" },
    { url: s48, title: "Slide 48" },
    { url: s49, title: "Slide 49" },
    { url: s50, title: "Slide 50" },
    { url: s51, title: "Slide 51" },
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
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex]); // Dependency array to restart interval on slide change

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-7 px-4 relative group slider-container">
      <CSSTransition
        key={currentIndex}
        timeout={1000}
        classNames="slider-image"
      >
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            boxShadow: "0px 0px 105px 45px rgba(255, 182, 193, 0.9)",
            WebkitBoxShadow: "0px 0px 105px 45px rgba(255, 182, 193, 0.9)",
            MozBoxShadow: "0px 0px 105px 45px rgba(255, 182, 193, 0.9)",
          }}
          className="slider-image w-full h-full bg-no-repeat bg-center duration-500 bg-contain rounded-3xl"
        ></div>
      </CSSTransition>
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
  );
};

export default Slider;
