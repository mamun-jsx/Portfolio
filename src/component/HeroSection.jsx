import React from "react";
import { assets } from "../assets/assets";

const HeroSection = () => {
  return (
    <section id="home" className="w-full md:my-20 my-4 py-5 ">
      <main className="flex flex-col w-full items-center">
        <img
          className="w-48 h-48 p-3 rounded-full mx-auto mb-4 object-cover border-4 border-secondary shadow-lg"
          src={assets.myPhoto}
          alt="Abdullah Al Mamun"
        />
        <h3 className="text-secondary text-lg md:text-xl mb-2">
          Hi, I am Abdullah Al Mamun
        </h3>

        <h2 className="md:text-7xl text-3xl text-center md:leading-20  font-light mb-4">
          Fronted web developer <br /> React and Node
        </h2>
        <p className="max-w-2xl text-gray-500 p-1 md:p-0 text-sm text-center md:text-base mb-6">
          Available for remote work in any location with any time zone. My
          current location dhaka, Bangladesh.
        </p>
        <button onClick={() => window.open(assets.CV, "_blank")}>
          Download CV
        </button>
      </main>
    </section>
  );
};

export default HeroSection;
