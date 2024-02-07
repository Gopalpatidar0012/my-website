// ==============================================
// Filename: CBAboutUsMission.tsx
// Type: Component
// Last Updated: Jan 16, 2024
// Project: cb-website - Front End
// ==============================================

import React from "react";
import CBAboutusTitle from "./AboutusTitle";
import CBAboutMissionCard from "./AboutMissionCard";
import { CBAboutUsMissionType } from "@/types/index";
import Image from "next/image";
import Link from "next/link";

const CBAboutUsMission = ({
  cardData,
  titlePartOne,
  titlePartTwo,
}: CBAboutUsMissionType) => {
  return (
    <div className="relative bg-bgLightGray">
      <div className="absolute bottom-0 w-full">
        <Image
          src="/assets/images/mission-bg.png"
          alt="image"
          className="w-full bg-cover object-contain"
          width={1280}
          height={300}
        />
      </div>
      <div className="flex w-full flex-col gap-12 overflow-hidden px-4 py-12 md:px-12 md:py-16 lg:px-24 lg:py-16">
        <CBAboutusTitle
          titlePartOne={titlePartOne}
          titlePartTwo={titlePartTwo}
        />
        <div className="z-10  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-16 lg:flex-nowrap">
          {cardData.map((item) => (
            <Link className="w-full" key={item.id} href={item.link}>
              <CBAboutMissionCard
                title={item.title}
                image={item.image}
                description={item.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CBAboutUsMission;
