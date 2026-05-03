import React from "react";
import { FaGithub } from "react-icons/fa6";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-surface-bright/20 border border-white/5 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
      <figure className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg sm:text-xl text-white font-bold">{project.name}</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center mt-6 gap-4">
          {/* Live Link */}
          {project?.liveLink && (
            <button
              onClick={() => window.open(project?.liveLink, "_blank")}
              className="px-4 py-2 bg-accent text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Live Link
            </button>
          )}

          {/* Repo Links / Private */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2 sm:mt-0 text-gray-400">
            {project?.frontendRepo && (
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <FaGithub className="text-xl" />
                Frontend
              </a>
            )}
            
            {project?.backendRepo && (
              <a
                href={project.backendRepo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <FaGithub className="text-xl" />
                Backend
              </a>
            )}
            
            {!project?.frontendRepo && !project?.backendRepo && project?.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-accent transition"
              >
                <FaGithub className="text-xl" />
                Repo Link
              </a>
            )}

            {!project?.frontendRepo && !project?.backendRepo && !project?.repoLink && (
              <span className="flex items-center gap-2 text-gray-400">
                <RiGitRepositoryPrivateFill className="text-xl text-accent" />
                Private Repo
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
