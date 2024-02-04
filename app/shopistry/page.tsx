import Project from "@/components/projects/Project";
import { projectData } from "@/data";
import React from "react";

const page = () => {
  return (
    <div>
      <Project
        name={projectData[1].name}
        des={projectData[1].description}
        tech={projectData[1].technology}
        roles={projectData[1].roles}
      />
    </div>
  );
};

export default page;
