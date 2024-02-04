// ==============================================
// Filename: Footer.tsx
// Type: Component
// Last Updated: Oct 20, 2023
// Project: my website - Front End
// ==============================================
import React from "react";
import Address from "./Address";
import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";
import siteData from "@/data";

import Logo from "../../public/G.png";
import Image from "next/image";
const { footerData } = siteData[0];
const Footer = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center border-b border-y-gray bg-darkBackground px-4 py-12 md:px-12 lg:px-24">
        <div className="flex w-full flex-col-reverse flex-wrap items-start justify-start gap-6 md:flex-row">
          <div className="flex flex-grow flex-col items-start gap-6">
            <span className="hidden md:block">
              <Image src={Logo} alt="logo" width={100} height={100} />
            </span>
            <SocialLinks
              socialMediaLinks={footerData.socialMediaLinks}
              title="Reach us the way you prefer"
            />
          </div>
          <Address
            title="Address"
            cityAddresses={footerData.cityAddresses}
            addressIcon="map"
          />
        </div>
      </div>
      <Copyright copyrightText={footerData.copyrightText} />
    </React.Fragment>
  );
};

export default Footer;
