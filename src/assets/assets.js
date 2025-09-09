import myPhoto from "./myimage.PNG";
import backGround from "./bg-image.png";
import projectImage from "./projectImage.jpg";
// default export all documents

export const assets = {
  myPhoto,
  backGround,
};

export const aboutInfo = [
  {
    id: 1,
    icon: "education",
    title: "Education",
    desc: "BSc in CSE from University of Asia Pacific",
  },
  {
    id: 2,
    icon: "experience",
    title: "Experience",
    desc: "1.5 years of experience as a MERN stack developer",
  },
  {
    id: 3,
    icon: "skills",
    title: "Skills",
    desc: "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB",
  },
];

export const projectData = [
  {
    id: 1,
    name: "Project One",
    description: "This is a brief description of Project One.",
    imageUrl: projectImage,
    liveLink: "https://example.com/project-one",
    repoLink: "https://example.com/project-one",
  },
  {
    id: 2,
    name: "Project One",
    description: "This is a brief description of Project One.",
    imageUrl: projectImage,
    liveLink: "https://example.com/project-one",
    repoLink: "",
  },
  {
    id: 3,
    name: "Project One",
    description: "This is a brief description of Project One.",
    imageUrl: projectImage,
    liveLink: "https://example.com/project-one",
    repoLink: "",
    type: "wordpress",
  },
  {
    id: 4,
    name: "Project One",
    description: "This is a brief description of Project One.",
    imageUrl: projectImage,
    liveLink: "https://example.com/project-one",
    repoLink: "",
    type: "react",
  },
  {
    id: 5,
    name: "Project One",
    description: "This is a brief description of Project One.",
    imageUrl: projectImage,
    liveLink: "https://example.com/project-one",
    repoLink: "",
    type: "mern",
  },
  {
    id: 6,
    name: "Project One",
    description: "This is a brief description of Project One.",
    imageUrl: projectImage,
    liveLink: "https://example.com/project-one",
    repoLink: "",
    type: "wordpress",
  },
];
