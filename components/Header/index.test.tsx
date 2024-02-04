// ==============================================
// Filename: CBSectionTitles.test.tsx
// Type: Component
// Last Updated: Oct 31, 2023
// Project: my website - Front End
// ==============================================

import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe.skip("Header", () => {
  it("renders the my logo", () => {
    render(
      <Header
        navLinks={[]}
        activeLink={""}
        handleLink={() => {}}
        handleConnected={() => {}}
        darkVariantRefs={[]}
      />
    );
    const logo = screen.getByAltText("my Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the hamburger menu on mobile", () => {
    render(
      <Header
        navLinks={[]}
        activeLink={""}
        handleLink={() => {}}
        handleConnected={() => {}}
        darkVariantRefs={[]}
      />
    );
    const hamburgerMenu = screen.getByAltText("Hamburger Menu");
    expect(hamburgerMenu).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    const navLinks = [
      {
        id: "1",
        title: "about us",
        url: "https://code-b.in/",
      },
      {
        id: "2",
        title: "industries",
        url: "https://code-b.in/",
      },
      {
        id: "3",
        title: "services",
        url: "https://code-b.in/",
      },
    ];
    render(
      <Header
        navLinks={navLinks}
        activeLink={""}
        handleLink={() => {}}
        handleConnected={() => {}}
        darkVariantRefs={[]}
      />
    );
    const homeLink = screen.getByRole("link", { name: "about us" });
    const aboutLink = screen.getByRole("link", { name: "industries" });
    const contactLink = screen.getByRole("link", { name: "services" });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it("hides hamburger on XL breakpoint", () => {
    const mockInnerWidth = 1280;
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: mockInnerWidth,
    });

    render(
      <Header
        navLinks={[
          {
            id: "1",
            title: "about us",
            url: "https://code-b.in/",
          },
          {
            id: "2",
            title: "industries",
            url: "https://code-b.in/",
          },
          {
            id: "3",
            title: "services",
            url: "https://code-b.in/",
          },
        ]}
        activeLink={""}
        handleLink={() => {}}
        handleConnected={() => {}}
        darkVariantRefs={[]}
      />
    );

    const hamburgerElement = screen.queryByAltText("Hamburger Menu");
    if (window.innerWidth >= 1280) {
      expect(hamburgerElement).toBeNull(); // Assert that the hamburger menu is not found
    } else {
      expect(hamburgerElement).toBeInTheDocument(); // Assert that the hamburger menu is present
    }
  });
});
