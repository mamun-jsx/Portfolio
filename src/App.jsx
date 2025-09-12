import React from "react";
import Nav from "./component/Nav";
import HeroSection from "./component/HeroSection";
import AboutMe from "./component/AboutMe";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import Skill from "./component/Skill";
const App = () => {
  return (
    <>
      <section>
        <Nav />

        <HeroSection />
        {/* About  */}
        <AboutMe />
        {/* Projects */}
        <Projects />
        {/* Skilled and Education  */}
        <Skill />
        <Footer />
      </section>
    </>
  );
};

export default App;
