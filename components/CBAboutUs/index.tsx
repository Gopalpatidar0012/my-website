// ==============================================
// Filename: About.tsx
// Type: Component
// Last Updated: Jan 16, 2024
// Project: cb-website - Front End
// ==============================================

"use client";
import React from "react";
import CBAboutUSBanner from "./CBAboutUSBanner";
import CBAboutUsMission from "./CBAboutUsMission";
import { CardDataType, WorkDataType } from "@/types/index";
import CBAboutExplore from "./CBAboutExplore";
import CBAboutGrowth from "./CBAboutGrowth";

const data: CardDataType[] = [
  {
    id: "1",
    title: "Shopistry",
    image: "/assets/images/client10.svg",
    link: "/shopistry",
    description:
      "Shopistry project, an innovative eCommerce platform aimed to easily create and customize their websites.",
  },
  {
    id: "2",
    title: "Maple pharmacy",
    image: "/assets/logo(1).png",
    link: "/maple-pharmacy",
    description:
      "Maple Health Pharmacy is a web based user-friendly online platform for a medical store, making it easy for customers to shop for medical supplies. The website offers various features to improve the overall user experience.",
  },
  {
    id: "3",
    title: "Incerro",
    image: "/assets/images/incerro-logo-dark.svg",
    link: "/incerro",
    description:
      "Our web platform connects clients, showcasing our company's technologies and services in a user-friendly space.",
  },
  {
    id: "4",
    title: "Milk management system",
    image: "/assets/milk.jpg",
    link: "/milk-management-system",
    description:
      "The Milk Management System is a web-based application designed to maintain daily milk records for registered members and generate comprehensive reports",
  },
  {
    id: "5",
    title: "Leave management system",
    image: "/assets/Frame(2).svg",
    link: "/leave-management-system",
    description:
      "The Leave Management System is a web application designed to streamline and automate the process of managing employee leave requests within an organization.",
  },
  {
    id: "6",
    title: "Lintas",
    image: "/assets/images/client9.svg",
    link: "/",
    description: "",
  },
];

const workData: WorkDataType[] = [
  {
    id: "1",
    title: "HTML",
  },
  {
    id: "2",
    title: "CSS",
  },
  {
    id: "3",
    title: "Javascript",
  },
  {
    id: "4",
    title: "React.js",
  },
  {
    id: "5",
    title: "Next.js",
  },
  {
    id: "6",
    title: "Tailwind css",
  },
  {
    id: "7",
    title: "Redux",
  },
  {
    id: "8",
    title: "Typescript",
  },
  {
    id: "9",
    title: "Git",
  },
  {
    id: "10",
    title: "Visual studio code",
  },
];

const About = () => {
  return (
    <div>
      <CBAboutUSBanner title="First, solve the problem Then write the code" />
      <section id="project">
        <CBAboutUsMission
          cardData={data}
          titlePartOne="My"
          titlePartTwo="project"
        />
      </section>
      <section id="skills">
        <CBAboutGrowth title="" data={workData} />
      </section>
      <CBAboutExplore titlePartOne="Explore" titlePartTwo=" my profile" />
    </div>
  );
};

export default About;
