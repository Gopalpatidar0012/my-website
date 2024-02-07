import {
  FooterType,
  IndustriesDataType,
  InsightGridDataType,
  ServiceCardProps,
  BannerType,
  ClientLogoType,
  TabsTypes,
  ServicesSectionEnum,
  TabId,
} from "@/types/index";

interface SiteDataType {
  banner: BannerType;
  footerData: FooterType;
  insights: InsightGridDataType[];
  industriesData: IndustriesDataType[];
  serviceData: ServiceCardProps[];
  clients: ClientLogoType[];
}

const siteData: SiteDataType[] = [
  {
    banner: {
      title: {
        mobile: ["get your dream", "product built", "Today"],
        desktop: ["get your dream product", "built Today"],
      },
      description:
        "Embark on the app-building journey with us, where our streamlined processes, insightful business intelligence and unwavering commitment to end-to-end delivery ensure a seamless and successful experience.",
      buttonText: "Get connected",
    },
    clients: [
      {
        id: 1, // actic
        title: "client1",
        url: "/assets/images/client1.svg",
      },
      {
        id: 2, // adsk
        title: "client2",
        url: "/assets/images/client2.svg",
      },
      {
        id: 3, // bob
        title: "client3",
        url: "/assets/images/client3.svg",
      },
      {
        id: 4, // botco
        title: "client4",
        url: "/assets/images/client4.svg",
      },
      {
        id: 5, //dwellc
        title: "client5",
        url: "/assets/images/client5.svg",
      },
      {
        id: 6, //helloy
        title: "client6",
        url: "/assets/images/client6.svg",
      },
      {
        id: 8, //upwork
        title: "client8",
        url: "/assets/images/client8.svg",
      },
      {
        id: 11, // techhr
        title: "client11",
        url: "/assets/images/client11.svg",
      },
      {
        id: 9, //rapport
        title: "client9",
        url: "/assets/images/client9.svg",
      },
      {
        id: 10, //shopistry
        title: "client10",
        url: "/assets/images/client10.svg",
      },
      {
        id: 7, //koble
        title: "client7",
        url: "/assets/images/client7.svg",
      },
      {
        id: 12, //lintas
        title: "client12",
        url: "/assets/images/client12.svg",
      },
    ],
    serviceData: [
      {
        id: 1,
        serviceIcon: "/assets/services/mobile.svg",
        serviceTitle: "Mobile Apps",
        serviceDescription:
          "Top notch mobile application development solutions for Android and iOS using React Native and Flutter",
      },
      {
        id: 2,
        serviceIcon: "/assets/services/web.svg",
        serviceTitle: "Web Apps",
        serviceDescription:
          "Highly scalable and performant web applications using NextJs, Gatsby, Angular and Vue",
      },
      {
        id: 3,
        serviceIcon: "/assets/services/headless.svg",
        serviceTitle: "Headless Development",
        serviceDescription:
          "Developing pluggable headless solutions for your business using Strapi, Contentful, Sanity and Shopify",
      },
      {
        id: 4,
        serviceIcon: "/assets/services/re.svg",
        serviceTitle: "Resource Augmentation",
        serviceDescription:
          "Augment your team with pre-vetted, highly skilled engineers to accelerate your product development",
      },
      {
        id: 5,
        serviceIcon: "/assets/services/ai.svg",
        serviceTitle: "Generative AI",
        serviceDescription:
          "Leverage the power of AI and Chatbots to automate your business processes and make smarter decisions",
      },
    ],
    industriesData: [
      {
        id: "3",
        title: "Healthcare",
        description:
          "Serving startups, medical institutions and various stakeholders of the healthcare industry with our expertise in building HIPAA compliant applications",
        imageUrl: "/assets/images/Health.jpg",
      },
      {
        id: "2",
        title: "E-Commerce",
        description:
          "Leading innovation in the e-commerce industry with our expertise in building scalable applications",
        imageUrl: "/assets/images/ecommerce.jpg",
      },
      {
        id: "4",
        title: "Advertising",
        description:
          "Innovating solutions for the advertising industry to help them reach their target audience",
        imageUrl: "/assets/images/advertisement.svg",
      },
      {
        id: "1",
        title: "Artificial Intelligence",
        description:
          "Be it a ChatGPT based Chatbot or integrating AI in your existing business, we have got you covered",
        imageUrl: "/assets/images/Ai.jpg",
      },
      {
        id: "5",
        title: "FinTech",
        description:
          "Transforming Fintech as AI and blockchain emerging as the next big thing in financial services",
        imageUrl: "/assets/images/fintech.png",
      },
    ],
    insights: [
      {
        id: "1",
        date: "2023-10-26",
        name: "Dewey Bernhard",
        title: "No One size fits all - Why smaller teams work ",
        image: "/assets/images/featuredimage-1.png",
        profileImage: "/assets/insightsProfileImages/Profile1.png",
        description:
          "Est asperiores sit minus ipsam temporibus. Modi similique et vel dolorem iusto repudiandae consequatur sapiente. Ut neque voluptatum et veritatis mollitia excepturi aut deserunt. Optio eos corrupti delectus similique voluptatem occaecati. Dolorum temporibus quasi blanditiis aut quisquam possimus voluptatibus.awdwd",
      },
      {
        id: "2",
        date: "April 28, 2016",
        name: "Todd Ankunding",
        title: "How to build a healthcare application the right way",
        image: "/assets/images/featuredimage-3.png",
        profileImage: "/assets/insightsProfileImages/Profile2.png",
        description:
          "In an era where technology continues to revolutionize the healthcare industry, the development of a healthcare application demands precision, compliance, and a profound understanding of user needs",
      },
      {
        id: "3",
        date: "August 7, 2017",
        name: "Virgil Mitchell",
        title:
          "Digital transformation is not an alternative, its the driver of the future",
        image: "/assets/images/featuredimage-5.png",
        profileImage: "/assets/insightsProfileImages/Profile3.png",
        description: `Digital Transformation has shifted from a buzzword to a strategic imperative. It is the definitive driver that propels organizations into the future.`,
      },
      {
        id: "4",
        date: "2023-10-26",
        name: "Dewey Bernhard",
        title: "Alias sequi nisi officiis maiores sit alias temporibus.",
        image: "/assets/images/featuredimage-1.png",
        profileImage: "/assets/insightsProfileImages/Profile1.png",
        description:
          "In the ever-evolving landscape of technology services, the mantra has become more than just a saying",
      },
      {
        id: "5",
        date: "April 28, 2016",
        name: "Todd Ankunding",
        title: "How to build a healthcare application the right way",
        image: "/assets/images/featuredimage-3.png",
        profileImage: "/assets/insightsProfileImages/Profile2.png",
        description:
          "In an era where technology continues to revolutionize the healthcare industry, the development of a healthcare application demands precision, compliance, and a profound understanding of user needs",
      },
      {
        id: "6",
        date: "August 7, 2017",
        name: "Virgil Mitchell",
        title:
          "Digital transformation is not an alternative, its the driver of the future",
        image: "/assets/images/featuredimage-5.png",
        profileImage: "/assets/insightsProfileImages/Profile3.png",
        description: `Digital Transformation has shifted from a buzzword to a strategic imperative. It is the definitive driver that propels organizations into the future.`,
      },
      {
        id: "7",
        date: "2023-10-26",
        name: "Dewey Bernhard",
        title: "No One size fits all - Why smaller teams work better",
        image: "/assets/images/featuredimage-1.png",
        profileImage: "/assets/insightsProfileImages/Profile1.png",
        description:
          "In the ever-evolving landscape of technology services, the mantra has become more than just a saying",
      },
      {
        id: "8",
        date: "April 28, 2016",
        name: "Todd Ankunding",
        title: "How to build a healthcare application the right way",
        image: "/assets/images/featuredimage-3.png",
        profileImage: "/assets/insightsProfileImages/Profile2.png",
        description:
          "In an era where technology continues to revolutionize the healthcare industry, the development of a healthcare application demands precision, compliance, and a profound understanding of user needs",
      },
      {
        id: "9",
        date: "August 7, 2017",
        name: "Virgil Mitchell",
        title:
          "Digital transformation is not an alternative, its the driver of the future",
        image: "/assets/images/featuredimage-5.png",
        profileImage: "/assets/insightsProfileImages/Profile3.png",
        description: `Digital Transformation has shifted from a buzzword to a strategic imperative. It is the definitive driver that propels organizations into the future.`,
      },
      {
        id: "10",
        date: "2023-10-26",
        name: "Dewey Bernhard",
        title: "No One size fits all - Why smaller teams work better",
        image: "/assets/images/featuredimage-1.png",
        profileImage: "/assets/insightsProfileImages/Profile1.png",
        description:
          "In the ever-evolving landscape of technology services, the mantra has become more than just a saying",
      },
      {
        id: "12",
        date: "April 28, 2016",
        name: "Todd Ankunding",
        title: "How to build a healthcare application the right way",
        image: "/assets/images/featuredimage-3.png",
        profileImage: "/assets/insightsProfileImages/Profile2.png",
        description:
          "In an era where technology continues to revolutionize the healthcare industry, the development of a healthcare application demands precision, compliance, and a profound understanding of user needs",
      },
      {
        id: "13",
        date: "August 7, 2017",
        name: "Virgil Mitchell",
        title:
          "Digital transformation is not an alternative, its the driver of the future",
        image: "/assets/images/featuredimage-5.png",
        profileImage: "/assets/insightsProfileImages/Profile3.png",
        description: `Digital Transformation has shifted from a buzzword to a strategic imperative. It is the definitive driver that propels organizations into the future.`,
      },
    ],
    footerData: {
      cityAddresses: [
        {
          id: "2",
          city: "Pune",
          address:
            "Elite residency Vardan Bunglow Rd, Balewadi Phata, Baner, Pune",
          phoneNo: "+919644590235",
          pinCode: "411045",
          state: "Maharashtra",
        },
        {
          id: "1",
          city: "Laturi gehlot",
          phoneNo: "9644590235",
          address: "V+P laturi gehlot teh. nalkheda agar malwa ",
          pinCode: "465447",
          state: "Madhya pradesh",
        },
      ],

      emailId: "gopalpatidar0012@gmail.com",
      copyrightText: "Copyright © 2024 gopal patidar. All rights reserved.",
      socialMediaLinks: [
        {
          id: "1",
          url: "https://facebook.com",
          name: "facebook",
          title: "follow us on facebook",
        },
        {
          id: "2",
          url: "https://www.instagram.com/",
          name: "instagram",
          title: "follow us on instagram",
        },
        {
          id: "3",
          url: "https://www.linkedin.com/in/gopal-patidar-8112371b6",
          name: "linkedin",
          title: "follow us on Linkedin",
        },
      ],
    },
  },
];

export default siteData;

//use this data for new services components
export const iconGroupList = [
  {
    id: "1",
    icon: "assets/icons/react.svg",
  },
  {
    id: "2",
    icon: "assets/icons/android.svg",
  },
  {
    id: "3",
    icon: "assets/icons/flutter.svg",
  },
  {
    id: "4",
    icon: "assets/icons/ios.svg",
  },
];

export const featuredChipList = [
  {
    id: "1",
    text: "Rapid Prototyping",
  },
  {
    id: "2",
    text: "Design principles by Google",
  },
  {
    id: "3",
    text: "Huge component library to leverage",
  },
  {
    id: "4",
    text: "Huge component library to leverage",
  },
];
export const servicesFeatureList = [
  {
    id: "1",
    title: "Multi-Channel Deployment",
    description:
      "Content and services can be deployed across web applications, mobile apps, and connected devices, reaching a diverse audience.",
  },
  {
    id: "2",
    title: "Scalability",
    description:
      "Modular development accommodates business growth and changing user requirements without disrupting the backend.",
  },
  {
    id: "3",
    title: "Flexibility",
    description:
      "Flexibility: Headless architecture decouples the frontend from the backend, allowing independent development and deployment of various frontends.",
  },
  {
    id: "4",
    title: "Improved Performance",
    description:
      "Optimizing each frontend individually enhances overall system performance.",
  },
  {
    id: "5",
    title: "Future-Proofing",
    description:
      "Headless architecture ensures adaptability to emerging technologies, mitigating the risk of obsolescence.",
  },
];
export const iconGroupListWithText = "Headless Backends and CMS";
export const iconGroupWithTextList = [
  {
    id: "1",
    icon: "assets/icons/shopify.svg",
    text: "Shopify",
  },
  {
    id: "2",
    icon: "assets/icons/sanity.svg",
    text: "Sanity",
  },
  {
    id: "3",
    icon: "assets/icons/contentful.svg",
    text: "Contentful",
  },
  {
    id: "4",
    icon: "assets/icons/strapi.svg",
    text: "Strapi",
  },
];

// Change name from tabs to serviceTabs
export const tabs: TabsTypes[] = [
  {
    id: TabId.Tab1,
    title: "Mobile Apps",
    sectionId: ServicesSectionEnum.MobileApp,
  },
  {
    id: TabId.Tab2,
    title: "Web Apps",
    sectionId: ServicesSectionEnum.WebApp,
  },
  {
    id: TabId.Tab3,
    title: "AI and ChatGPT",
    sectionId: ServicesSectionEnum.ArtificialIntelligence,
  },
  {
    id: TabId.Tab4,
    title: "Headless",
    sectionId: ServicesSectionEnum.Headless,
  },
  {
    id: TabId.Tab5,
    title: "Resource Augmentation",
    sectionId: ServicesSectionEnum.ResourceAugmentation,
  },
];

export const initialServicesList = [
  {
    id: ServicesSectionEnum.MobileApp,
    name: "Mobile Apps",
  },
  {
    id: ServicesSectionEnum.WebApp,
    name: "Web Apps",
  },
  {
    id: ServicesSectionEnum.ArtificialIntelligence,
    name: "AI and ChatGPT",
  },
  {
    id: ServicesSectionEnum.Headless,
    name: "Headless",
  },
  {
    id: ServicesSectionEnum.ResourceAugmentation,
    name: "Resource Augmentation",
  },
];

export const projectData = [
  {
    id: "1",
    name: "Maple Health Pharmacy",
    description:
      "Maple Health Pharmacy is a web based user-friendly online platform for a medical store, making it easy for customers to shop for medical supplies. The website offers various features to improve the overall user experience.",
    technology: "React.js,Tailwind Css, Next.js,Typescript,Contentful",
    roles: [
      {
        id: "1",
        point:
          "Optimized user experience with a sophisticated appointment booking system and improved communication through a reliable email system.",
      },
      {
        id: "2",
        point:
          "Expanded platform services for vaccination scheduling, streamlined COVID-19 testing, and simplified prescription refills.",
      },
      {
        id: "3",
        point:
          "Enhanced accessibility by enabling secure online ordering with doorstep delivery and integrating Google Maps for accurate navigation.",
      },
      {
        id: "4",
        point:
          "Contributed to a visually appealing user interface with reusable components using Tailwind CSS.",
      },
    ],
  },
  {
    id: "2",
    name: "Shopistry",
    description:
      "Shopistry project, an innovative eCommerce platform aimed to easily create and customize their websites.",
    technology: "eact.js, Tailwind Css, Next.js,Redux,Typescript",
    roles: [
      {
        id: "1",
        point:
          "Developed and launched user-friendly Theme Selection and Customization feature.",
      },
      {
        id: "2",
        point:
          "Implemented drag-and-drop interface for easy website customization.",
      },
      {
        id: "3",
        point:
          "Ensured robust data management for accurate user customizations.",
      },
      {
        id: "4",
        point:
          "Collaborated on visually appealing themes for cross-device compatibility.",
      },
      {
        id: "5",
        point:
          "Worked in Agile environment for timely delivery and continuous improvement.",
      },
    ],
  },
  {
    id: "3",
    name: "Leave Management System",
    description:
      "The Leave Management System is a web application designed to streamline and automate the process of managing employee leave requests within an organization.",
    technology: "React.js,Styled Components,Storybook,Redux,Typescript",
    roles: [
      {
        id: "1",
        point:
          "Developed reusable UI components (Header, Sidebar, Navbar, Button, Card Employee, Filter, Input, Holiday Item).",
      },
      {
        id: "2",
        point:
          "Ensured design consistency with Styled Components for a visually appealing experience.",
      },
      {
        id: "3",
        point:
          "Integrated TypeScript for improved code quality and enhanced development tooling.",
      },
      {
        id: "4",
        point:
          "Utilized Storybook for developing, documenting, and testing components in isolation, facilitating team iteration on UI elements.",
      },
    ],
  },
  {
    id: "4",
    name: "Milk Management System",
    description:
      "The Milk Management System is a web-based application designed to maintain daily milk records for registered members and generate comprehensive reports",
    technology: "eact.js,Tailwind Css,Redux,Typescript",
    roles: [
      {
        id: "1",
        point:
          "Design and develop responsive user interface components for Milk Management System using HTML, CSS, JavaScript",
      },
      {
        id: "2",
        point:
          "Implement efficient state management with Redux for data consistency and real-time updates.",
      },
      {
        id: "3",
        point:
          "Collaborate with backend developer to integrate frontend components with API endpoints.",
      },
      {
        id: "4",
        point:
          "Ensure responsiveness and compatibility across devices and browsers.",
      },
    ],
  },
  {
    id: "5",
    name: "Incerro",
    description:
      "Our web platform connects clients, showcasing our company's technologies and services in a user-friendly space.",
    technology: "React.js, Tailwind Css, Next.js,Redux,Typescript",
    roles: [
      {
        id: "",
        point:
          "Develop reusable components using Tailwind CSS for a consistent design.",
      },
      {
        id: "",
        point:
          "Implement responsive design to ensure optimal viewing on all screens and Integrate mail sending functionality using Nodemailer.",
      },
      {
        id: "",
        point:
          "Integrate Contentful API to fetch and display data on the frontend and Create forms for user interaction on the website.",
      },
    ],
  },
  {
    id: "6",
    name: "Lintas",
    description:
      "Lintas Dashboard and App a project designed to streamline the process of assigning advertising tasks to vendors in different cities. This app facilitates the assignment of tasks, such as capturing photos or videos of advertising posters, to vendors based on specific cities and timeframes. Vendors receive notifications for their assigned tasks and are required to complete them within the specified city and time constraints. The dashboard serves as a centralized platform for managing and monitoring these tasks efficiently. Overall, the goal is to enhance the coordination and efficiency of advertising activities across various locations through a user-friendly and organized system.",
    technology: "",
    roles: [
      {
        id: "1",
        point:
          "Task Handling: Manage tasks that have been missed or not completed within the specified timeframe.",
      },
      {
        id: "2",
        point:
          "Filter Creation: Develop and implement filters to streamline task assignment based on specific criteria (e.g., location, priority, etc.).",
      },
      { id: "", point: "" },
    ],
  },
];
