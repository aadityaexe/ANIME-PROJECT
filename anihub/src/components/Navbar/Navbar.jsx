import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full top-0 left-0 flex justify-between items-center p-3 z-50">
      {/* Menu Icon on the right */}
      <div className="icon sm:hidden" onClick={toggleMenu}>
        <svg
          className="w-8 h-8 text-gray-800 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </div>

      <div
        className={`list ${
          isMenuOpen ? "block" : "hidden"
        } sm:flex sm:gap-10 sm:px-7 sm:text-2xl absolute sm:relative top-full left-0 w-full sm:w-auto bg-gray-200/30 sm:bg-transparent`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-5 p-5 sm:p-0">
          <li>
            <a href="#HERO" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#MITSURI" onClick={toggleMenu}>
              MITSURI
            </a>
          </li>
          <li>
            <a href="#MOMMY" onClick={toggleMenu}>
              MOMMYS
            </a>
          </li>
          <li>
            <a href="#WIFU" onClick={toggleMenu}>
              PDF FILE
            </a>
          </li>
          <li>
            <a href="#WE" onClick={toggleMenu}>
              Creator
            </a>
          </li>
          <li>
            <a href="#ABOUT" onClick={toggleMenu}>
              ABOUT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
