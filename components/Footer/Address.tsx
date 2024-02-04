// ==============================================
// Filename: Address.tsx
// Type: Component
// Last Updated: Oct 31, 2023
// Project: my website - Front End
// ==============================================

import React from "react";
import Icon from "../Icon/Icon";
import { AddressType } from "@/types/index";

const Address = ({ cityAddresses, title, addressIcon }: AddressType) => {
  return (
    <div className="item-start flex flex-col gap-6 md:w-1/2 lg:w-3/5">
      <div className="flex items-center gap-4 text-center">
        {/* <Icon icon={addressIcon} additionalClasses="text-white" /> */}
        <p className="font-montserrat text-base font-semibold capitalize leading-6 text-white">
          {title}
        </p>
      </div>
      <div className="flex flex-col gap-10 md:gap-6 lg:flex-row lg:gap-24">
        {cityAddresses.map((item) => (
          <div key={item.id} className="item-start flex flex-col gap-4">
            <span className="font-montserrat text-base font-semibold capitalize leading-6 text-white">
              {item.city}
            </span>
            <p className="font-open-sans break-keep text-base font-normal leading-[26.48px] text-lightGray">
              {item.address}
              <br />
              {item.pinCode}
              <br />
              {item.state}
            </p>
            {item.phoneNo ? (
              <p className="font-open-sans text-base font-normal leading-[26.48px] text-lightGray">
                {item.phoneNo}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
