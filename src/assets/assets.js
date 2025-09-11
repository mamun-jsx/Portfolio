import myPhoto from "./myimage.PNG";
import backGround from "./bg-image.png";
import projectImage from "./projectImage.jpg";
// default export all documents
// car projects
import itFrimWebsite from "./itFarmWebsite1.png";
import carBookingProject from "./carBooking.png";
import companyWebsite from "./cpmpanyProject.png";
import aiPoweredBlog from "./AiPoweredBlog.png";
import digitalProductWebsite from "./DigitalProductWebsite.png";
import realestateWebsite1 from "./realEstate.png";
// CV
import CV from "./mamunsCV.pdf";
export const assets = {
  myPhoto,
  backGround,
  carBookingProject,
  companyWebsite,
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
    name: "It Firm Website",
    description:
      "Website for IT firm built with React, React-Router-Dom, Node.js, and MongoDB for seamless navigation and data management.JWT Authentication for secure Admin access",
    imageUrl: itFrimWebsite,
    liveLink: "https://www.zakeritsolutions.com/",
    repoLink: "",
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
    repoLink: "https://github.com/mamun-jsx/car-booking-project.git",
    type: "react",
  },
  {
    id: 4,
    name: "Digital Product Website",
    description:
      "A website where admin sell digital product online such as microsoft office license, adobe license etc.Build with wordpress Woodmart theme.",
    imageUrl: digitalProductWebsite,
    liveLink: "https://licenciacad.com/",
    repoLink: "",
    type: "wordpress",
  },
  {
    id: 5,
    name: "Company Website",
    description:
      "Company service website built with wordpress CMS and also FUlL mobile responsive Fiverr project",
    imageUrl: companyWebsite,
    liveLink: "https://nxatc.com/",
    repoLink: "",
    type: "mern",
  },
  {
    id: 6,
    name: "Real Estate Website",
    description:
      "A real estate website built with wordpress CMS, Company can list their property for sell or rent.Fiverr project",
    imageUrl: realestateWebsite1,
    liveLink: "https://braylonrealty.com/",
    repoLink: "",
    type: "wordpress",
  },
];
