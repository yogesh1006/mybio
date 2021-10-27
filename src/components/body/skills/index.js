import React from "react";
import "./skills.css";
import { SkillsData } from "../../../data/skills";
import SkillCard from "./skill-card";
import Separator from "../../common/seperator";
function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item ,index) => {
          return (
            <div className="skills-section" key={index}>
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill,index) => {
                  return <SkillCard skill={skill}  key={index}/>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
