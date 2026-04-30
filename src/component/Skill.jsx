import React, { useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongoose, SiTypescript, SiPostgresql, SiPrisma, SiGo } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "Frontend",
    items: [
      { icon: <FaReact className="text-sky-500" />, label: "React" },
      { icon: <SiRedux className="text-purple-700" />, label: "Redux" },
      {
        icon: <SiReactrouter className="text-accent" />,
        label: "Router-Router-Dom",
      },
      {
        icon: <RiNextjsFill className="text-black " />,
        label: "Next.js",
      },
      {
        icon: <RiTailwindCssFill className="text-cyan-400" />,
        label: "Tailwind CSS",
      },
      {
        icon: <SiTypescript className="text-blue-500" />,
        label: "TypeScript",
      },
      {
        icon: <span className="text-red-500 font-bold">HTML</span>,
        label: "HTML",
      },
      {
        icon: <span className="text-accent font-bold">CSS</span>,
        label: "CSS",
      },
    ],
  },
  {
    id: 2,
    name: "Backend",
    items: [
      { icon: <FaNodeJs className="text-green-600" />, label: "Node.js" },
      {
        icon: <span className="text-gray-300 font-bold">EX</span>,
        label: "Express.js",
      },
      { icon: <SiGo className="text-cyan-400" />, label: "Go" },
      {
        icon: <span className="text-gray-300 font-bold tracking-widest text-lg">Echo</span>,
        label: "Echo",
      },
    ],
  },
  {
    id: 3,
    name: "Database",
    items: [
      { icon: <FaDatabase className="text-purple-500" />, label: "MongoDB" },
      { icon: <SiMongoose className="text-red-600" />, label: "Mongoose" },
      { icon: <SiPostgresql className="text-blue-400" />, label: "PostgreSQL" },
      { icon: <SiPrisma className="text-gray-200" />, label: "Prisma" },
      {
        icon: <IoLogoFirebase className="text-yellow-500" />,
        label: "Firebase",
      },
    ],
  },
];

const Skill = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skill"
      className="my-12 py-20 rounded px-4 md:px-10 bg-surface-bright/20 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-tight">
          Technologies I build with
        </h1>

        {/* Tabs */}
        <div className="flex justify-center overflow-x-auto flex-nowrap gap-3 sm:gap-4 mb-8 scrollbar-hide">
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => setActiveTab(skill.name)}
              className={`px-5 py-2 font-semibold rounded-md transition whitespace-nowrap
              ${activeTab === skill.name ? "bg-accent text-white" : "bg-surface-bright/50 text-gray-400 hover:text-white"}`}
            >
              {skill.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills
            .find((skill) => skill.name === activeTab)
            ?.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-5 bg-surface-bright/30 border border-white/5 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:border-accent/50 transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-sm font-medium text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
