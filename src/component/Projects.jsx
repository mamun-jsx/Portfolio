import React from "react";
import { projectData } from "../assets/assets";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <section id="portfolio" className="my-10">
      <h2 className="my-10 text-primary md:text-5xl text-3xl text-center">
        Project I have done..{" "}
      </h2>
      <p className="text-center mb-9 text-xl">
        combine projects some are Mern Stack and some are wordpress based
        wordpress based projects are done for fiverr client
      </p>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>

    </section>
  );
};

export default Projects;
