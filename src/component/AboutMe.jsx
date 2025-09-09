import React from "react";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongoose } from "react-icons/si";
import { AiFillOpenAI } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

import { assets } from "../assets/assets";
const AboutMe = () => {
  return (
    <section id="about" className="my-10 px-2 md:px-0">
      {/* Title  */}
      <h2 className="text-center py-10 text-2xl font-medium text-secondary ">
        About Me...
      </h2>

      {/* main content  */}
      <main className="">
        {/* left*/}
        <div className="wrapper flex items-center gap-4 justify-between">
          {/* card area */}{" "}
          <div className="left flex-1 content">
            <p className="text-gray-500 py-2 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              aspernatur laudantium sed iusto voluptatum non esse molestiae ad
              quod ex omnis, nisi exercitationem facilis illum maxime temporibus
              debitis perspiciatis accusantium aut suscipit eos? Culpa
              consectetur dicta distinctio ipsa adipisci? Amet commodi nisi,
              accusamus corporis voluptatum nihil assumenda ea aperiam. Eaque!
            </p>
            <div className="my-5 cardWrapper ">
              <aside className="card-1 border border-secondary my-3 shadow-md rounded-2xl p-4">
                <h2 className="text-5xl my-2 text-orange-500 ">
                  <FaCode />
                </h2>
                <h5 className="mt-3 text-xl">Language : </h5>
                <p className="text-gray-500 mt-2">
                  HTML, CSS, JavaScript and TypeScript
                </p>
              </aside>
              <aside className="card-2 border border-secondary my-3 shadow-md rounded-2xl p-4">
                <h2 className="text-5xl my-2 text-black ">
                  <FaUserGraduate />
                </h2>
                <h5 className="mt-3 text-xl">Education : </h5>
                <p className="text-gray-500 mt-2">
                  Complete BA in english language and literature.{" "}
                </p>
                <p className="text-primary">secondary language English </p>
              </aside>
              <aside className="card-3 border border-secondary my-3 shadow-md rounded-2xl p-4">
                <h2 className="text-5xl my-2 text-yellow-500 ">
                  <FaMedal />
                </h2>
                <h5 className="mt-3 text-xl">Achievement : </h5>
                <p className="text-gray-500 mt-2">
                  complete 4-5 project and also I am level 1 se;;er in fiver and
                  also I have a good review complete frontend course from
                  programming hero and certificate
                </p>
              </aside>
            </div>

            <div className="tools my-5 md:my-0">
              <p className="text-xl  my-2">Tools: I use </p>
              <div className="flex gap-5 ">
                <VscVscode className="inline text-7xl text-blue-500" />
                <IoLogoFirebase className="inline text-7xl text-yellow-500" />
                <SiMongoose className="inline text-7xl text-green-500" />
                <AiFillOpenAI className="inline text-7xl text-black" />
                <FaGithub className="inline text-7xl text-black" />
              </div>
            </div>
          </div>
          <div className="right side">
            <img
              className="rounded-full border-b-4 drop-shadow-2xl border-purple-600"
              src={assets.myPhoto}
              alt=""
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutMe;
