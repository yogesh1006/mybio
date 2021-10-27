import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/seperator";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div className="project-section">
        {data.map((project,index) => {
          return <ProjectCard project={project}  key={index}/>;
        })}
      </div>
    </div>
  );
}

export default Projects;
