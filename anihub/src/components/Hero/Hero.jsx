import { useEffect, useState } from "react";
import heroImage from "../../assets/hero.png";
import heroImage2 from "../../assets/hero-img-2.png";
import "./Hero.css";

const Hero = () => {
  const [showImages, setShowImages] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImages(true), 100); // Delay for images
    const textTimer = setTimeout(() => setShowText(true), 300); // Delay for text animations
    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div
      className="mt-30 flex overflow-hidden h-screen relative items-center hero"
      id="HERO"
    >
      {/* Right side with text */}
      <div
        className="relative w-full h-[300px] flex flex-col items-center justify-center px-8 bg-black text-white z-10 sm:z-auto hero-text"
        id="heroId"
      >
        <span className="absolute bottom-0 h-0.5 w-[100px] bg-white animate-animate"></span>
        <span className="absolute top-0 h-0.5 w-[100px] bg-white animate-animateReverse"></span>
        <h1
          className={`text-4xl sm:text-6xl font-bold h1-enter ${
            showText ? "show" : ""
          }`}
        >
          Welcome to <br /> WifuWiki
        </h1>
        <p
          className={`mt-5 font-bold text-center w-3/4 sm:w-1/2 p-enter ${
            showText ? "show" : ""
          }`}
        >
          We all love to drink mitsuri kanroji milk.
        </p>
      </div>

      {/* Left side with image */}
      <div className="absolute inset-0 w-full sm:w-1/2 h-full z-0">
        <img
          src={heroImage}
          alt="Hero"
          className={`w-auto h-full object-cover sm:object-cover first-hero-img transition-all duration-800 ease-in-out ${
            showImages ? "show" : ""
          }`}
          style={{
            filter: "drop-shadow(0px 4px 15px rgba(255, 172, 203, 0.8))",
          }}
        />

        <img
          src={heroImage2}
          alt=""
          className={`w-auto h-full object-cover sm:object-cover sec-hero-img transition-all duration-500 ease-in-out ${
            showImages ? "show" : ""
          }`}
          style={{ filter: "drop-shadow(0px 4px 15px rgba(255, 215, 0, 0.8))" }}
        />
      </div>
    </div>
  );
};

export default Hero;
