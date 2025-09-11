import React from "react";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongoose } from "react-icons/si";
import { AiFillOpenAI } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

import { aboutInfo, assets } from "../assets/assets";
const AboutMe = () => {
  return (
    <section id="about" className="w-full bg-gray-50 scroll-mt-20 py-10">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl font-semibold ">About Me</h2>
      <div
        className="flex w-full 
       flex-col md:flex-row items-center gap-20 my-20"
      >
        {/* left column  */}
        <div className="w-64 sm:w-80 rounded-full max-w-none">
          <img
            className="w-full border-b-2 rounded-full"
            src={assets.myPhoto}
            alt=""
          />
        </div>
        {/* right column  */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl ">
            I am a skilled MERN Stack Developer with strong expertise in
            React.js, Node.js, and MongoDB, capable of building scalable and
            user-friendly web applications. Alongside my development skills, I
            bring over 2 years of professional experience on Fiverr, where I
            worked as a WordPress Website Designer, successfully designing and
            delivering 20+ websites for clients worldwide. My dedication and
            quality of work helped me achieve the Level 1 Seller badge on the
            platform. Combining my technical development knowledge with design
            experience, I bring a unique balance of creativity and functionality
            to every project I work on.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
            {aboutInfo.map((info) => {
              return (
                <li
                  className="border border-gray-400 rounded-xl p-6 "
                  key={info.id}
                >
                  <div>
                    {info.icon === "education" && (
                      <FaUserGraduate className="inline-block text-4xl mr-2 mb-1" />
                    )}
                    {info.icon === "experience" && (
                      <FaMedal className="inline-block text-4xl mr-2 mb-1" />
                    )}
                    {info.icon === "skills" && (
                      <FaCode className="inline-block text-4xl mr-2 mb-1" />
                    )}
                  </div>
                  <h3 className="my-4 font-semibold text-secondary">
                    {info?.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{info?.desc}</p>
                </li>
              );
            })}
          </ul>
          {/* Tools I use  */}
          <h4 className="text-gray-700 text-xl my-6">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-2 ">
            <VscVscode className="text-7xl text-blue-600" />{" "}
            <IoLogoFirebase className="text-7xl text-yellow-500" />{" "}
            <AiFillOpenAI className="text-7xl text-gray-600" />{" "}
            <FaGithub className="text-7xl text-black-600" />
            <SiMongoose className="text-8xl text-red-800 " />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
