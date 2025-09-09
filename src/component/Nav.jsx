import React from "react";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const Nav = () => {
  return (
    <nav className="w-full bg-gray-50 md:py-2 z-50 ">
      <div className=" max-w-7xl mx-auto flex justify-between items-center px-5  h-10 md:h-16">
        {/* Logo */}
        <div>
          <a href="#top" className="text-2xl font-bold text-primary">
            Developer Mamun
          </a>
        </div>

        {/* Middle Menu - Desktop Only */}
        <ul className="hidden md:flex gap-6 lg:gap-8 bg-gray-200 rounded-full px-6 py-2 shadow-lg">
          <li>
            <a
              href="#home"
              className="text-primary hover:text-secondary transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-primary hover:text-secondary transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-primary hover:text-secondary transition"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-primary hover:text-secondary transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Upwork/Fiverr icons */}
          <ul className="flex gap-3">
            <li>
              <a
                href="https://www.upwork.com/your-profile"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-secondary transition text-2xl"
              >
                <FaUpwork />
              </a>
            </li>
            <li>
              <a
                href="https://www.fiverr.com/your-profile"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-secondary transition text-2xl"
              >
                <TbBrandFiverr />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
