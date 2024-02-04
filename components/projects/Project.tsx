import React from "react";
import Typography, { TypographyVariant } from "../Typography";

export interface ProjectType {
  name: string;
  des: string;
  tech: string;
  roles: { id: string; point: string }[];
}

const Project = ({ name, roles, des, tech }: ProjectType) => {
  return (
    <div className="w-full h-full flex flex-col text-center p-12 gap-6">
      <Typography variant={TypographyVariant.H1}>{name}</Typography>
      <Typography variant={TypographyVariant.P}>{des}</Typography>
      <div>
        <Typography variant={TypographyVariant.H5}>Technology</Typography>
        <Typography variant={TypographyVariant.LABEL}>{tech}</Typography>
      </div>
      <div>
        <Typography variant={TypographyVariant.H5}>
          Roles and Responsibilities
        </Typography>
        {roles.map((role) => (
          <ul key={role.id}>
            <li>
              <Typography variant={TypographyVariant.P}>
                {role.point}
              </Typography>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Project;
