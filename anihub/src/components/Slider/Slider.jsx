import "./Slider.css";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
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
import hero from "./Slider-assets/hero.png";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
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
    { url: hero, title: "Slide 10" },
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

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-no-repeat bg-center duration-500 bg-contain"
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
  );
};

export default Slider;
