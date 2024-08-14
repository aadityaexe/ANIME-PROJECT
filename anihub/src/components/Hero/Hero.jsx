import heroImage from "../../assets/hero.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="mt-10 flex overflow-hidden h-screen relative items-center">
      {/* Right side with text */}
      <div className="relative w-full h-[300px] flex flex-col items-center justify-center px-8 bg-black  text-white z-10 sm:z-auto hero-text">
        <span className="absolute bottom-0 h-0.5 w-[100px] bg-white animate-animate"></span>
        <span className="absolute top-0 h-0.5 w-[100px] bg-white animate-animateReverse"></span>
        <h1 className="text-4xl sm:text-6xl font-bold">
          Welcome To Our <br /> Website
        </h1>
        <p className="mt-5 font-bold text-center w-3/4 sm:w-1/2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          magni beatae dolorum porro praesentium reprehenderit quod
          exercitationem.
        </p>
      </div>

      {/* Left side with image */}
      <div className="absolute inset-0 w-full sm:w-1/2 h-full z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-auto h-full object-cover sm:object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
