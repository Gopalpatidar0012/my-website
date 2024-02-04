// ==============================================
// Filename: Address.test.tsx
// Type: Component
// Last Updated: Oct 24, 2023
// Project: my website - Front End
// ==============================================

import React from "react";
import { render, screen } from "@testing-library/react";
import Address from "./Address";

describe("Footer Component", () => {
  it("renders a button with the provided title", () => {
    const cityAddresses = [
      {
        id: "1",
        city: "India",
        phoneNo: "",
        address: "Plot No. 4 ,Mahavir Park, Baner",
        pinCode: "Pune – 411045",
        state: "Maharashtra",
      },
      {
        id: "2",
        city: "Canada",
        address: "826 Brimorton DriveScarborough",
        phoneNo: "+1 647-773-8546",
        pinCode: "ON M1G 2S9",
        state: "Toronto",
      },
    ];

    render(
      <Address
        cityAddresses={cityAddresses}
        title="Address"
        addressIcon="map"
      />
    );

    const indiaAddress = screen.getByText(cityAddresses[0].address);
    const canadaAddress = screen.getByText(cityAddresses[1].address);
    const phoneNo = screen.getByText(cityAddresses[1].phoneNo);
    const title = screen.getByText("Address");
    const socialIcons = screen.getAllByTestId("social-icon");

    expect(socialIcons).toHaveLength(1);
    expect(indiaAddress).toBeInTheDocument();
    expect(canadaAddress).toBeInTheDocument();
    expect(phoneNo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
