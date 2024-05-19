import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = useMemo(() => {
    const isMobileWidth = windowWidth < 768;
    if (!isMobileWidth) setNav(false);
    return isMobileWidth;
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNav = () => setNav((prevState) => !prevState);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">SIMUJUDI.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">Home</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">
          Company
        </li>
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">
          Resource
        </li>
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">About</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">
          Contact
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="hover:cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="hover:cursor-pointer" />
        )}
      </div>

      {isMobile && (
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            SIMJUDI.
          </h1>

          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#00df9a]">
              Home
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#00df9a]">
              Company
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#00df9a]">
              Resource
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#00df9a]">
              About
            </li>
            <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
