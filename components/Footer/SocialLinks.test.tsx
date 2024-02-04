// ==============================================
// Filename: SocialLinks.test.tsx
// Type: Component
// Last Updated: Oct 31, 2023
// Project: my website - Front End
// ==============================================

import React from "react";
import { render, screen } from "@testing-library/react";
import SocialLinks from "./SocialLinks";

describe("ContactUs Component", () => {
  it("renders the correct social Media icons", () => {
    const socialMediaLinks = [
      {
        id: "1",
        url: "your-instagram-url",
        name: "instagram",
      },
      {
        id: "2",
        url: "your-facebook-url",
        name: "facebook",
      },
    ];
    render(
      <SocialLinks
        title="Follow for interesting updates"
        socialMediaLinks={socialMediaLinks}
      />
    );
    const socialTitle = screen.getByText("Follow for interesting updates");
    const socialIcons = screen.getAllByTestId("social-icon");

    expect(socialIcons).toHaveLength(2);
    expect(socialTitle).toBeInTheDocument();
  });
});
