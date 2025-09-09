import React from "react";
import { FaGithub } from "react-icons/fa6";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={project.imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description}</p>
        <div className="flex items-center mt-6  gap-6">
          <button onClick={() => window.open(project?.liveLink, "_blank")}>
            {" "}
            Live Link
          </button>
          <span>
            <a href={project?.repoLink} target="_blank" rel="noreferrer">
              {project?.repoLink ? (
                <>
                  <FaGithub className="inline-block text-4xl mr-2 mb-1" />
                  Repo Link
                </>
              ) : (
                <>
                  {project?.type === "wordpress" ? (
                    <>
                      <FaWordpress className="inline-block text-4xl mr-2 mb-1" />
                    </>
                  ) : (
                    <>
                      <RiGitRepositoryPrivateFill className="inline-block text-4xl mr-2 mb-1" />
                      Private repo
                    </>
                  )}
                </>
              )}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
