import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">    
          Hi there ! 👋, I'm <br />
          <span className="info-name">Yogesh</span>.<br /> I love
          experimenting with the web.
        </div>
        <div className="about-photo">
          <img
            alt="hero-img"
            src={require("../../../assets/image/coding-code.svg").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
