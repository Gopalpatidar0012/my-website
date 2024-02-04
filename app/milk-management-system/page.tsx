import Project from "@/components/projects/Project";
import { projectData } from "@/data";
import React from "react";

const page = () => {
  return (
    <div>
      <Project
        name={projectData[3].name}
        des={projectData[3].description}
        tech={projectData[3].technology}
        roles={projectData[3].roles}
      />
    </div>
  );
};

export default page;
