
import React from "react";
import { projectData } from "../assets/assets";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="portfolio" className="my-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="my-6 text-accent text-3xl md:text-5xl text-center font-extrabold tracking-tight">
        Projects I have done..
      </h2>
      <p className="text-center mb-6 text-base sm:text-lg max-w-3xl mx-auto text-gray-400">
        I have built a wide range of web applications using modern frameworks. 
        I have utilized both relational and non-relational databases to ensure 
        scalable and efficient data management across these projects.
      </p>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>
    </section>
  );
};

export default Projects;
