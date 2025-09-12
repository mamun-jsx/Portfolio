import React from "react";
import { FaGithub } from "react-icons/fa6";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      <figure className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg sm:text-xl">{project.name}</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center mt-6 gap-4">
          {/* Live Link */}
          {project?.liveLink && (
            <button
              onClick={() => window.open(project?.liveLink, "_blank")}
              className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
            >
              Live Link
            </button>
          )}

          {/* Repo / WordPress / Private */}
          <span className="flex items-center gap-2 text-gray-700">
            {project?.repoLink ? (
              <a
                href={project?.repoLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <FaGithub className="text-2xl" />
                Repo Link
              </a>
            ) : project?.type === "wordpress" ? (
              <span className="flex items-center gap-2">
                <FaWordpress className="text-2xl text-blue-600" />
                WordPress Project
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <RiGitRepositoryPrivateFill className="text-2xl text-red-600" />
                Private Repo
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
