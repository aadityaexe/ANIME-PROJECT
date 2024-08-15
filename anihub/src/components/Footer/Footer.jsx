import bgfoot from "./Footer-assets/bgfoot.png";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-blue-700 "
      style={{
        backgroundImage: `url(${bgfoot})`,
        minHeight: "300px", // Ensure a minimum height for smaller screens
        maxHeight: "400px", // Set the maximum height for larger screens
      }}
    >
      <div className="container mx-auto text-center h-full flex flex-col justify-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 md:mb-10 lg:mb-14 font-serif">
          Footer Title
        </h3>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8 font-serif">
          Among Heaven and Hell we are the most cursed ones...
        </p>
        <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <li>
            <a href="hero" className="hover:underline">
              hero
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
