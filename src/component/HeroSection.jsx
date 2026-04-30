import React from "react";
import { assets } from "../assets/assets";
import { FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { SiGo, SiJsonwebtokens, SiTailwindcss } from "react-icons/si";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between hero-gradient overflow-hidden"
      data-purpose="hero-container"
    >
      {/* Hero Content Body */}
      <div className="flex-grow flex items-center px-8 md:px-20 lg:px-32 py-12 relative z-10 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left Content: Typography and CTA */}
          <div
            className="space-y-6 md:space-y-8"
            data-purpose="hero-text-content"
          >
            <div className="space-y-2">
              <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight">
                Hello<span className="text-accent">.</span>
              </h2>
              <div className="flex items-center pt-8">
                <span className="name-line"></span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-100">
                  I'm Mamun
                </h3>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight pt-2">
                Software Developer
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-10">
              <button
                onClick={() => window.open("https://www.fiverr.com/free_mamun", "_blank")}
                className="px-10 py-5 bg-accent text-white font-bold hover:opacity-90 transition-all duration-300 text-center min-w-[200px]"
                data-purpose="cta-primary"
              >
                Got a project?
              </button>
              <button
                onClick={() => window.open(assets.CV, "_blank")}
                className="px-10 py-5 border-2 border-accent text-white font-bold hover:bg-accent/10 transition-all duration-300 text-center min-w-[200px]"
                data-purpose="cta-secondary"
              >
                My resume
              </button>
            </div>
          </div>

          {/* Right Content: Profile Image Visualization */}
          <div
            className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
            data-purpose="hero-visual"
          >
            <div className="relative w-full max-w-lg">
              {/* Background Circular Accent - Spinning */}
              <div className="absolute top-1/2 left-1/2 w-[110%] aspect-square border-[1px] border-accent/40 rounded-full animate-spin-slow origin-[0_0]"></div>
              <div
                className="absolute top-1/2 left-1/2 w-[95%] aspect-square border-[16px] border-accent/20 rounded-full animate-spin-slow origin-[0_0]"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "20s",
                }}
              ></div>

              {/* Main Image Wrapper */}
              <div className="relative z-10 w-full portrait-mask">
                <img
                  alt="Abdullah Al Mamun"
                  className="w-full h-auto object-cover"
                  src={assets.myPhoto}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-12 text-accent/20 text-8xl font-light select-none transform -rotate-12">
                &lt;
              </div>
              <div className="absolute bottom-1/4 -right-12 text-accent/20 text-8xl font-light select-none transform rotate-12">
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SkillsFooter */}
      <footer
        className="w-full bg-surface-bright/20 backdrop-blur-sm py-8 md:py-12 border-t border-white/5 relative z-20 lg:-mt-[56px]"
        data-purpose="skills-bar"
      >
        <div className="max-w-7xl mx-auto px-8">
          <ul className="flex flex-wrap justify-center lg:justify-between items-center gap-6 md:gap-10 text-gray-400 font-medium text-lg">
            <li className="group flex flex-col md:flex-row items-center gap-2 hover:text-[#00ADD8] transition-colors duration-300 cursor-default">
              <SiGo className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
              <span>Go Lang</span>
            </li>
            <li className="group flex flex-col md:flex-row items-center gap-2 hover:text-[#339933] transition-colors duration-300 cursor-default">
              <FaNodeJs className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
              <span>Node.js</span>
            </li>
            <li className="group flex flex-col md:flex-row items-center gap-2 hover:text-[#d63aff] transition-colors duration-300 cursor-default">
              <SiJsonwebtokens className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
              <span>JWT</span>
            </li>
            <li className="group flex flex-col md:flex-row items-center gap-2 hover:text-[#61DAFB] transition-colors duration-300 cursor-default">
              <FaReact className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 animate-[spin_10s_linear_infinite]" />
              <span>React</span>
            </li>
            <li className="group flex flex-col md:flex-row items-center gap-2 hover:text-[#06B6D4] transition-colors duration-300 cursor-default">
              <SiTailwindcss className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
              <span>TailwindCSS</span>
            </li>
            <li className="group flex flex-col md:flex-row items-center gap-2 hover:text-white transition-colors duration-300 cursor-default">
              <FaGithub className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300" />
              <span>Github</span>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;
