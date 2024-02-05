import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Education from "./Education";
import Email from "./Email";
import MyProjects from "./MyProjects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <MyProjects></MyProjects>
      <Education></Education>
      <Email></Email>
    </div>
  );
};

export default Home;
