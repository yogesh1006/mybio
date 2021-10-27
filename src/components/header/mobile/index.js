import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
        <i className="fas fa-times"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i className="fas fa-code option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i className="fas fa-language option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            {" "}
            <i className="fas fa-briefcase  option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i className="fas fa-user-plus  option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
