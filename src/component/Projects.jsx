
import React from "react";
import { projectData } from "../assets/assets";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="portfolio" className="my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="my-10 text-primary text-3xl md:text-5xl text-center">
        Projects I have done..
      </h2>
      <p className="text-center mb-9 text-base sm:text-lg max-w-2xl mx-auto">
        Some projects are MERN Stack and some are WordPress based. WordPress
        projects were completed for Fiverr clients.
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
