import Project from "@/components/projects/Project";
import { projectData } from "@/data";
import React from "react";

const page = () => {
  return (
    <div>
      <Project
        name={projectData[0].name}
        des={projectData[0].description}
        tech={projectData[0].technology}
        roles={projectData[0].roles}
      />
    </div>
  );
};

export default page;
