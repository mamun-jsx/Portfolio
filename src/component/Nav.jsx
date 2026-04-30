import React from "react";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const Nav = () => {
  return (
    <nav id="#top" className="w-full bg-surface/90 backdrop-blur-md md:py-2 z-50 sticky top-0 border-b border-white/5">
      <div className=" max-w-7xl mx-auto flex justify-between items-center px-5  h-14 md:h-20">
        {/* Logo */}
        <div>
          <a href="#top" className="text-2xl font-bold text-white tracking-tight">
            Developer <span className="text-accent">Mamun</span>
          </a>
        </div>

        {/* Middle Menu - Desktop Only */}
        <ul className="hidden md:flex gap-6 lg:gap-8 bg-surface-bright/50 rounded-full px-8 py-3 shadow-lg border border-white/5">
          <li>
            <a
              href="#home"
              className="text-gray-300 hover:text-accent font-medium transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-accent font-medium transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-gray-300 hover:text-accent font-medium transition"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="text-gray-300 hover:text-accent font-medium transition"
            >
              Skill
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-300 hover:text-accent font-medium transition"
            >
              Experience
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Upwork/Fiverr icons */}
          <ul className="flex gap-3">
            <li>
              <a
                href="https://www.upwork.com/freelancers/~0128c27e26d30e1643"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent transition text-2xl"
              >
                <FaUpwork />
              </a>
            </li>
            <li>
              <a
                href="https://www.fiverr.com/free_mamun/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent transition text-2xl"
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
