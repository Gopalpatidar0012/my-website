// ==============================================
// Filename: Header.tsx
// Type: Component
// Last Updated: Oct 31, 2023
// Project: my website - Front End
// ==============================================

import React from "react";
import Link from "next/link";
import Logo from "../../public/G.png";
import MobileNavigationCard from "./MobileNavigation";
import DesktopNavigationCard from "./DesktopNavigation";
import Image from "next/image";
import { LinkTypes } from "@/types";

const Header = () => {
  // const { isTablet } = useIsMobile();

  const navLinks: LinkTypes[] = [
    {
      id: "6",
      title: "home",
      url: "/",
      active: typeof window !== "undefined" && window.location.hash === "home",
    },
    // {
    //   id: "2",
    //   title: "industries",
    //   url: "/#cb-industries",
    //   active:
    //     typeof window !== "undefined" &&
    //     window.location.hash === "#cb-industries",
    // },
    // {
    //   id: "3",
    //   title: "insights",
    //   url: "/insights",
    //   active:
    //     typeof window !== "undefined" && window.location.hash === "insights",
    // },
    {
      id: "4",
      title: "skills",
      url: "/#skills",
      active:
        typeof window !== "undefined" && window.location.hash === "#skills",
    },
    {
      id: "5",
      title: "project",
      url: "/#project",
      active:
        typeof window !== "undefined" && window.location.hash === "#project",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-black/5 bg-[#70706e] px-4 py-3 md:px-8 lg:px-16">
      <Link href="/" className="md:block w-14">
        <Image src={Logo} alt="logo" />
      </Link>

      <div>
        <span className="block md:hidden">
          <MobileNavigationCard navLinks={navLinks} />
        </span>
        <span className="hidden md:block">
          <DesktopNavigationCard navLinks={navLinks} />
        </span>
      </div>
    </nav>
  );
};

export default Header;
