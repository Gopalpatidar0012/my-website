import React from "react";
import CBAboutusTitle from "./AboutusTitle";
import { ButtonSize, ButtonVariant, CBAboutExploreType } from "@/types/index";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Image from "next/image";

const CBAboutExplore = ({ titlePartTwo, titlePartOne }: CBAboutExploreType) => {
  const { push } = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-blackDark px-4 py-16 text-center md:px-12 lg:flex-row lg:justify-between lg:px-24 lg:py-24 lg:text-start">
      <Image
        src="/assets/profile.jpg"
        alt="logo"
        className="rounded-full"
        width={147}
        height={25}
        priority
      />
      <div className="w-fit">
        <CBAboutusTitle
          titlePartTwo={titlePartTwo}
          titlePartOne={titlePartOne}
          isDarkBackground
        />
      </div>
      <div className="item flex h-full min-w-fit md:justify-end">
        <a
          href="/assets/PDFs/Gopal-Patidar.pdf"
          download="Gopal-Patidar.pdf"
          className="inline-flex justify-center items-center bg-red gap-2 text-white px-4 py-2"
        >
          Get Resume
        </a>
      </div>
    </div>
  );
};

export default CBAboutExplore;
