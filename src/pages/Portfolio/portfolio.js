import React from "react";
import "./portfolio.css";
import projects from "./projects";
import Project from "../../components/Project/project";

export default function Portfolio() {
  return (
    <div className="main">
      <div className="row mt-5">
        <div id="one-section" className="col-12 col-xl-12 pl-xl-n12">
          <div>
            <h1>Portfolio</h1>
                <div className ="row">
              {projects.map((project) => (
            <div className="projects col-xs-12 col-4 col-xl-4 ">
                <Project
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  live={project.live}
                  github={project.github}
                  imageOne={project.imageOne}
                  imageTwo={project.imageTwo}
                  imageThree={project.imageThree}
                />
            </div>
              ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
