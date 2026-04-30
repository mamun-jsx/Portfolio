import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      link: "https://api.whatsapp.com/message/WQSVX5CH3VGNC1?autoload=1&app_absent=0",
      hoverClass: "hover:text-[#25D366]",
    },
    {
      id: 2,
      icon: <CiFacebook />,
      link: "https://www.facebook.com/mamunthegreat",
      hoverClass: "hover:text-[#1877F2]",
    },
    {
      id: 3,
      icon: <CiLinkedin />,
      link: "https://www.linkedin.com/in/mamun-jsx/",
      hoverClass: "hover:text-[#0A66C2]",
      isHighlighted: true,
    },
    {
      id: 4,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/lord_mamun/",
      hoverClass: "hover:text-[#E1306C]",
    },
    {
      id: 5,
      icon: <FaGithub />,
      link: "https://github.com/mamun-jsx",
      hoverClass: "hover:text-white",
    },
    {
      id: "top",
      icon: <FaArrowUp />,
      link: "#top",
      hoverClass: "hover:text-accent",
    },
  ];
  return (
    <footer className="w-full border-t border-white/5 bg-surface-bright/20 backdrop-blur-sm mt-20 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 font-medium tracking-wide">
          &copy; 2025 Abdullah Al Mamun. All rights reserved.
        </p>
        <ul className="flex items-center gap-6 mt-6 md:mt-0">
          {socialMedia.map((social) => {
            return (
              <li key={social.id} className="group">
                <a
                  className={`text-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
                    social.isHighlighted 
                    ? "text-[#0A66C2] animate-pulse scale-125" 
                    : "text-gray-400"
                  } ${social.hoverClass}`}
                  href={social.link}
                  target={social.id === "top" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
