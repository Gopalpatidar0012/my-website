"use client";
// ==============================================
// Filename: MobileNavigationCard.tsx
// Type: Component
// Last Updated: Oct 31, 2023
// Project: my website - Front End
// ==============================================

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import HamBurger from "../../public/Hamburger.svg";
import { useRouter } from "next/navigation";
import Logo from "../../public/G.png";
import Typography, { TypographyVariant } from "../Typography";
import Button from "../Button";
import { ButtonSize, ButtonVariant, NavLinkType } from "@/types";

const MobileNavigationCard = ({ navLinks }: NavLinkType) => {
  const [open, setOpen] = useState(false);
  const { push } = useRouter();
  const extendHandleConnected = () => {
    setOpen(false);
    push("/#cb-contact-form");
  };

  return (
    <React.Fragment>
      <div className="cursor-pointer">
        {!open ? (
          <div className="block w-6 items-center justify-center">
            <Image
              src={HamBurger}
              alt="Hamburger Menu"
              className="text-white"
              onClick={() => setOpen(true)}
            />
          </div>
        ) : null}
      </div>

      <div
        className={`transition-max-height h-screen max-h-0 overflow-hidden  ${
          open ? "max-h-screen" : ""
        }  ease duration-400 fixed left-0 top-0 w-full bg-black transition-all`}
      >
        <div className="flex flex-col gap-6 px-4 py-4">
          <div className="flex justify-between">
            <Link href="/" className="w-14 bg-gray">
              <Image src={Logo} alt="logo" />
            </Link>
            <div className="flex cursor-pointer flex-col items-end">
              <FontAwesomeIcon
                icon={faXmark}
                className="text-white"
                size="xl"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>

          <Button
            title="Get Connected"
            variant={ButtonVariant.PRIMARY}
            size={ButtonSize.LARGE}
            onClick={extendHandleConnected}
          />

          <nav className="flex flex-col gap-y-6 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="border-b border-gray py-4 capitalize"
                onClick={() => setOpen(false)}
              >
                <Typography variant={TypographyVariant.LABEL}>
                  {link.title}
                </Typography>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavigationCard;
