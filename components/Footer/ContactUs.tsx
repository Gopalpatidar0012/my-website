// ==============================================
// Filename: ContactUs.tsx
// Type: Component
// Last Updated: Oct 31, 2023
// Project: my website - Front End
// ==============================================
import React from "react";
import Icon from "../Icon/Icon";
import { ContactType } from "@/types/index";

const ContactUs = ({ emailId, title, contactIcon }: ContactType) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex items-center gap-4 text-center">
        <Icon icon={contactIcon} additionalClasses="text-white" />
        <p className="font-montserrat text-base font-semibold capitalize leading-6 text-white">
          {title}
        </p>
      </div>
      <p className="font-open-sans text-base font-normal leading-[26.48px] text-lightGray">
        {emailId}
      </p>
    </div>
  );
};

export default ContactUs;
