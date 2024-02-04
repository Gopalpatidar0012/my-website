// ==============================================
// Filename: CBAboutUSBanner.tsx
// Type: Component
// Last Updated: Jan 16, 2024
// Project: cb-website - Front End
// ==============================================

import Image from "next/image";
import React from "react";

const CBAboutUSBanner = ({ title }: { title: string }) => {
  return (
    <div rel="preload" className="relative h-lg w-full  bg-cover bg-no-repeat">
      <div className="absolute -z-10 h-full w-full object-cover">
        <Image
          src="/assets/images/ocean.png"
          width={1280}
          height={900}
          alt="banner image"
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="absolute -bottom-2 w-full max-md:hidden">
        <Image
          src="/assets/images/about-bannervector.svg"
          alt="image"
          width={1280}
          height={190}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      <div className="fade-up-element fade-element flex h-full flex-col items-start justify-center w-11/12 gap-6 pl-4 md:w-10/12 min-[1440px]:w-7/12 md:pl-12 lg:w-3/4 lg:pl-24">
        <div className="z-2 flex w-full text-start">
          <h1 className="break-words capitalize text-white"> {title}</h1>
        </div>
      </div>
    </div>
  );
};

export default CBAboutUSBanner;
