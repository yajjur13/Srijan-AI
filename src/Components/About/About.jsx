import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT SRIJAN AI</h3>
        <h2>Tagline</h2>
        <p>About us description</p>
      </div>
    </div>
  );
};

export default About;
