import React from "react";
import { FaGithub, FaDocker, FaNodeJs } from "react-icons/fa";
import {
  SiMongoose,
  SiGo,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const Experiences = () => {
  const floatingIcons = [
    {
      icon: <SiMongoose />,
      color: "text-[#880000]",
      top: "10%",
      left: "5%",
      delay: "0s",
    },
    {
      icon: <FaGithub />,
      color: "text-white",
      top: "20%",
      left: "80%",
      delay: "1s",
    },
    {
      icon: <FaDocker />,
      color: "text-[#2496ED]",
      top: "70%",
      left: "10%",
      delay: "2s",
    },
    {
      icon: <SiGo />,
      color: "text-[#00ADD8]",
      top: "80%",
      left: "70%",
      delay: "1.5s",
    },
    {
      icon: <SiJsonwebtokens />,
      color: "text-[#d63aff]",
      top: "40%",
      left: "90%",
      delay: "0.5s",
    },
    {
      icon: <FaNodeJs />,
      color: "text-[#339933]",
      top: "15%",
      left: "40%",
      delay: "2.5s",
    },
    {
      icon: <SiMongodb />,
      color: "text-[#47A248]",
      top: "60%",
      left: "85%",
      delay: "3s",
    },
    {
      icon: <SiNextdotjs />,
      color: "text-white",
      top: "85%",
      left: "20%",
      delay: "1.2s",
    },
    {
      icon: <IoLogoFirebase />,
      color: "text-[#FFCA28]",
      top: "30%",
      left: "15%",
      delay: "0.8s",
    },
    {
      icon: <RiTailwindCssFill />,
      color: "text-[#06B6D4]",
      top: "50%",
      left: "50%",
      delay: "2.2s",
    },
    {
      icon: <SiTypescript />,
      color: "text-[#3178C6]",
      top: "45%",
      left: "5%",
      delay: "1.7s",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden bg-surface"
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute text-5xl md:text-7xl animate-float ${item.color}`}
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay,
              filter: "blur(1px)",
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent text-lg font-bold uppercase tracking-widest mb-2">
            Professional Journey
          </h2>
          <h1 className="text-3xl md:text-6xl font-extrabold text-white">
            My Experience from 2021 to Present
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Fiverr Experience */}
          <div className="bg-surface-bright/20 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Freelance Developer
                </h3>
                <p className="text-accent font-semibold">
                  International Projects (Fiverr)
                </p>
              </div>
              <span className="text-gray-400 font-medium">2021 — Present</span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              During my freelancing career, I've collaborated with diverse
              international clients to translate complex visions into scalable
              business models. I specialize in building high-performing websites
              that drive real-world impact.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <p>Worked with agencies, e-commerce, and non-profits.</p>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <p>Maintained a consistent 5-star review record.</p>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <p>Converted business ideas into functional digital assets.</p>
              </div>
            </div>
          </div>

          {/* Right: Industrial Experience */}
          <div className="bg-surface-bright/20 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Frontend Developer
                </h3>
                <p className="text-accent font-semibold">Join Venture AI Company</p>
              </div>
              <span className="text-gray-400 font-medium whitespace-nowrap">Sept 2024 — Aug 2025</span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              In this industrial role, I worked at the intersection of my learder and
              web technology, ensuring high-quality user experiences and
              seamless data integration. 
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <p>
                  Collaborated closely with UI/UX designers for pixel-perfect
                  designs.
                </p>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <p>
                  Integrated RESTful APIs into Next.js applications for
                  real-time data.
                </p>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <p>Developed responsive and high-performance UI components.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
