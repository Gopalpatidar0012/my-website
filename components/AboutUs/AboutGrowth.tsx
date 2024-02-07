import React from "react";
import logo from "../../public/butterfly.png";
import Image from "next/image";
import CBAboutusTitle from "./AboutusTitle";
import { CBAboutGrowthType } from "@/types/index";
import useIsMobile from "@/hooks/useIsMobile";

const CBAboutGrowth = ({ title, data }: CBAboutGrowthType) => {
  const { isMobile } = useIsMobile();
  const renderTextWithStyling = (text: string) => {
    const parts = text.split(/([,&])/);

    return (
      <span>
        {parts.map((part, index) => {
          if (part === "," || part === "&") {
            return (
              <span key={index} className="text-red">
                {part}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  };
  return (
    <div className="overflow-hidden ">
      <div className="flex flex-col items-start justify-start gap-8 bg-bgGray px-4 pb-16 pt-12 md:px-12 md:py-24 lg:p-24">
        <CBAboutusTitle titlePartOne="Technical" titlePartTwo="skills" />
        <div className="flex w-full flex-wrap gap-4">
          {data.map((item) => (
            <div
              className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 text-black lg:w-fit lg:items-start lg:justify-start"
              key={item.id}
            >
              {isMobile ? (
                <h4 className="bold text-center">
                  {renderTextWithStyling(item.title)}
                </h4>
              ) : (
                <h3 className="light">{renderTextWithStyling(item.title)}</h3>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex h-full w-full items-center bg-growth bg-cover bg-no-repeat md:bg-growthTab lg:min-h-80 lg:bg-growthDesktop">
        <div className="absolute -right-8 -top-28 h-full max-sm:min-h-44 max-h-44 w-full max-w-32  md:-right-12 md:max-h-72 md:max-w-52 lg:-right-20 lg:-top-52 md:-top-44 lg:max-h-96 lg:max-w-72 ">
          <Image src={logo} alt="logo" className=" object-contain" fill />
        </div>
        <div className="flex h-full max-h-80 w-full items-center justify-center px-4 py-12 md:px-24 md:py-16 lg:justify-start ">
          {isMobile ? (
            <h2 className="bold text-center text-white"> {title}</h2>
          ) : (
            <h1 className="text-center text-white">{title}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CBAboutGrowth;
