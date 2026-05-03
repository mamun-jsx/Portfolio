import myPhoto from "./myimage.PNG";
import backGround from "./bg-image.png";
import projectImage from "./projectImage.jpg";
// default export all documents
// car projects
import itFrimWebsite from "./itFarmWebsite1.png";
import carBookingProject from "./carBooking.png";
import aiPoweredBlog from "./AiPoweredBlog.png";
// CV
import CV from "./PERN&MERN.pdf";
export const assets = {
  myPhoto,
  backGround,
  carBookingProject,
  CV,
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
    name: "Event Circle",
    description:
      "A fullstack secure Next.js application with relational database PostgreSQL, where payment system integrates SSL Commerz with a role-based login system.",
    imageUrl: itFrimWebsite,
    liveLink: "https://event-circle-frontend.vercel.app/",
    repoLink: "",
    frontendRepo: "https://github.com/mamun-jsx/event-circle-next-js.git",
    backendRepo: "https://github.com/mamun-jsx/circle-hub-backend.git",
    type: "react",
  },
  {
    id: 2,
    name: "Ai Powered Blog Website",
    description:
      "AI Powered Blog Website, built with React and Gimini API backend technology us ing Node.js and Express.js mongoose and mongodb, JWT for secure admin Access and also user can comment each blog",
    imageUrl: aiPoweredBlog,
    liveLink: "https://lively-brioche-761635.netlify.app/",
    repoLink: "https://github.com/mamun-jsx/blog-project.git",
    type: "react",
  },
  {
    id: 3,
    name: "Car Rent Website",
    description:
      "A car rental website built with react express and mongodb, Firebase for authentication, user can book a car and see their booking history. Owner can list car for rent. ROLE BASED LOGIN",
    imageUrl: carBookingProject,
    liveLink: "https://iridescent-crostata-2d702f.netlify.app/",
    repoLink: "",
    frontendRepo: "https://github.com/mamun-jsx/car-booking-project/tree/main/client",
    backendRepo: "https://github.com/mamun-jsx/car-booking-project/tree/main/server",
    type: "react",
  },
];
