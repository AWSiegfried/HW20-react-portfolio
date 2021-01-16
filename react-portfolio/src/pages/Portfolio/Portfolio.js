import React from 'react'
import "./portfolio.css"
import projects from "./projects.json"
import Project from "../../components/Project/project"

export default function Portfolio() {
    return (
        <div className="main">
            <h1>Portfolio</h1>
            <div className = "projects">
                {projects.map(project => (
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
                ))}
            </div>
        </div>
    )
}
