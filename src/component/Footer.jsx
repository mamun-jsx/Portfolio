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
    },
    {
      id: 2,
      icon: <CiFacebook />,
      link: "https://www.facebook.com/mamunthegreat",
    },
    {
      id: 3,
      icon: <CiLinkedin />,
      link: "https://www.linkedin.com/in/mamun-jsx/",
    },
   
    {
      id: 4,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/lord_mamun/",
    },
    {
      id: 5,
      icon: <FaGithub />,
      link: "https://github.com/mamun-jsx",
    },
    {
      id: "top",
      icon: <FaArrowUp />,
      link: "#top",
    },
  ];
  return (
    <section>
      <footer className="w-full border-t border-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-2 md:px-0 py-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; 2025 Abdullah Al Mamun. All rights reserved.
          </p>
          <ul className="flex items-center gap-6 mt-4 md:mt-0">
            {socialMedia.map((social) => {
              return (
                <li key={social.id}>
                  <a
                    className="text-3xl font-bold text-black hover:text-[#6a0066]"
                    href={social.link}
                    target="_blank"
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
    </section>
  );
};

export default Footer;
