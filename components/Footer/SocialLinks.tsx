// ==============================================
// Filename: SocialLinks.tsx
// Type: Component
// Last Updated: Oct 31, 2023
// Project: my website - Front End
// ==============================================
import Link from "next/link";
import React from "react";
import Icon from "../Icon/Icon";
import { SocialLinkType } from "@/types/index";

const SocialLinks = ({ socialMediaLinks, title }: SocialLinkType) => {
  return (
    <div className="flex flex-col items-start gap-4 ">
      <span className="font-montserrat text-base font-semibold leading-6 text-white">
        {title}
      </span>
      <div className="flex items-center justify-end gap-6">
        {socialMediaLinks.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            className="w-6"
            title={item.title}
          >
            <Icon
              icon={item.name}
              size="xl"
              additionalClasses="text-lightGray"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
