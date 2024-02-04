"use client";
// ==============================================
// Filename: DesktopNavigationCard.tsx
// Type: Component
// Last Updated: Nov 06, 2023
// Project: my website - Front End
// ==============================================
import { ButtonVariant, ButtonSize, NavLinkType } from "@/types/index";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Typography, { TypographyVariant } from "../Typography";
import Button from "../Button";

const DesktopNavigationCard = ({ navLinks }: NavLinkType) => {
  const pathname = usePathname();
  const { push } = useRouter();
  return (
    <div className="text-md w-full md:block xl:w-auto">
      <ul className="flex items-center justify-end gap-2 leading-5 md:gap-6 lg:gap-7">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              scroll={true}
              href={link.url}
              aria-label={link.title}
              aria-current={link["aria-current"]}
            >
              <Typography
                variant={TypographyVariant.LABEL}
                className={`pb-1 capitalize hover:text-red ${
                  link.url === pathname ? "text-red" : "text-white"
                }`}
              >
                {link.title}
              </Typography>
            </Link>
          </li>
        ))}
        <li>
          <Button
            title="Get Connected"
            variant={ButtonVariant.SECONDARY}
            size={ButtonSize.MEDIUM}
            // onClick={() => push("/#cb-contact-form")}
            onClick={() => {}}
          />
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavigationCard;
