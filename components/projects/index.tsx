"use client";
import React from "react";
import Project from "./Project";
import { projectData } from "../../data";

const Projects = () => {
  return (
    <>
      <Project
        name={projectData[2].name}
        des={projectData[2].description}
        tech={projectData[2].technology}
        roles={projectData[2].roles}
      />
    </>
  );
};
export default Projects;
