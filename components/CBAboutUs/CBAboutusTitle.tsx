// ==============================================
// Filename: CBAboutusTitle.tsx
// Type: Component
// Last Updated: Jan 16, 2024
// Project: my website - Front End
// ==============================================

import React from "react";
import { SectionTitleType } from "@/types/index";

const CBAboutusTitle = ({
  isDarkBackground = false,
  titlePartOne,
  titlePartTwo,
}: SectionTitleType) => {
  return (
    <h2
      className={`${
        isDarkBackground ? " text-white" : "text-gray"
      } w-full text-center lg:text-start`}
    >
      {titlePartOne}&nbsp;
      <b
        className={`font-bold ${
          isDarkBackground ? " text-white" : "text-black"
        }`}
      >
        {titlePartTwo}
      </b>
    </h2>
  );
};

export default CBAboutusTitle;
