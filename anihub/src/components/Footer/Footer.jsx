import bgfoot from "./Footer-assets/bgfoot.png";

const Footer = () => {
  return (
    <footer
      className="relative bg-center bg-cover bg-no-repeat text-blue-600 w-full"
      style={{ backgroundImage: `url(${bgfoot})` }}
    >
      {/* Maintain aspect ratio with padding */}
      <div className="pt-[50%] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-purple-400">
          <div className="mb-4"></div>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
          <div className="text-gray-400">
            &copy; 2024 Your Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
