import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Nav = () => {
  return (
    <nav id="#top" className="w-full bg-surface/90 backdrop-blur-md md:py-2 z-50 sticky top-0 border-b border-white/5">
      <div className=" max-w-7xl mx-auto flex justify-between items-center px-5  h-14 md:h-20">
        {/* Logo */}
        <div>
          <a href="#top" className="text-2xl font-bold text-white tracking-tight">
            <span className="text-accent">Mamun</span>
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
          {/* LinkedIn/WhatsApp icons */}
          <ul className="flex gap-3">
            <li>
              <a
                href="https://www.linkedin.com/in/mamun-jsx/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] transition text-2xl"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/message/WQSVX5CH3VGNC1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#25D366] transition text-2xl"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
