// ==============================================
// Filename: index.ts
// Type: types
// Last Updated: Oct 31, 2023
// Project: my website - Front End
// ==============================================

import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";
import { LegacyRef } from "react";

export enum ButtonVariant {
  OUTLINE = "outline",
  LINK = "link",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DISABLED = "disabled",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum IconPoistion {
  RIGHT = "right",
  LEFT = "left",
}

export interface ButtonType {
  variant: ButtonVariant;
  onClick: () => void;
  title: string;
  iconPosition?: "left" | "right";
  size?: ButtonSize;
  backgroundColor?: string;
  color?: string;
  icon?: IconDefinition;
  disabled?: boolean;
}

export interface LinkButtonType {
  variant: ButtonVariant;
  href: string;
  text: string;
  iconPosition?: "left" | "right";
  size?: ButtonSize;
  backgroundColor?: string;
  color?: string;
  icon?: IconDefinition;
  disabled?: boolean;
}

export interface ClientLogoType {
  id: string | number;
  title: string;
  url: string;
}

export interface InsightCardType {
  date?: string;
  title: string;
  description: string;
  image: string;
}

export interface InsightGridDataType {
  id: string;
  title: string;
  name: string;
  image: string;
  profileImage: string;
  description: string;
  date: string;
}

export interface SectionTitleType {
  title?: string;
  isMobile?: boolean;
  isDarkBackground?: boolean;
  slim?: boolean;
  titlePartOne?: string;
  titlePartTwo?: string;
}
export interface BannerComponentProps {
  description: string;
  buttonText: string;
  bannerLink: string;
  serviceRef: React.RefObject<HTMLDivElement>;
}

export enum CBInputsType {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  NUMBER = "number",
}
export interface CBInputProps {
  type: CBInputsType;
  placeholder: string;
  value?: string;
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  errorMsg?: string;
  isError?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  isDarkMode?: boolean;
}
export interface CBTextareaProps {
  onChangeFunc: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder: string;
  autoFocus?: boolean;
  errorMsg?: string;
  isError?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  isDarkMode?: boolean;
}
export interface CBTextareaValueType {
  value: string;
  errorMsg?: string;
  isError?: boolean;
}
export interface CBChipProps {
  text: string;
  onSelect: () => void;
  selected?: boolean;
}
export interface ContactFormType {
  id: string;
  placeholder: string;
  errorMesage: string;
  value: string;
  iserror: boolean;
  type: CBInputsType;
}
export interface TechnologyItemType {
  id: number;
  icon: string;
  title: string;
}

export interface TechnologyType {
  technologiesList: TechnologyItemType[];
}

export interface ContactType {
  emailId: string;
  title: string;
  contactIcon: string;
}

export interface SocialMediaLinkType {
  id: string;
  url: string;
  name: string;
  title: string;
}

export interface BannerType {
  title: {
    mobile: string[];
    desktop: string[];
  };
  description: string;
  buttonText: string;
}
export interface FooterType {
  cityAddresses: CityAddressType[];
  emailId: string;
  socialMediaLinks: SocialMediaLinkType[];
  copyrightText: string;
}

export interface CityAddressType {
  id: string;
  city: string;
  address: string;
  phoneNo: string;
  pinCode: string;
  state: string;
}

export interface SocialLinkType {
  title: string;
  socialMediaLinks: SocialMediaLinkType[];
}

export interface IconType {
  icon: string;
  color?: string;
  additionalClasses?: string;
  size?: SizeProp;
}

export enum SocialMediaIcons {
  INSTAGRAM = "instagram",
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  MAP = "map",
  EMAIL = "email",
  LINKEDIN = "linkedin",
}

export interface AddressType {
  cityAddresses: CityAddressType[];
  title: string;
  addressIcon: string;
}

export interface ServiceCardProps {
  id: string | number;
  serviceIcon: string;
  serviceTitle: string;
  serviceDescription: string;
}

export interface ServiceCTAProps {
  link?: string;
}

export interface LazyImageProps {
  src: string;
  fill: boolean;
  className: string;
  alt: string;
  animationCallback?: () => void;
  height?: number;
  width?: number;
  priority?: boolean;
  sizes?: string;
}

export interface ThankYouComponentType {
  title: string;
  description: string;
  buttonText?: string;
  handleClick?: () => void;
  hasButton?: boolean;
  hasDarkBg?: boolean;
}

export interface IndustriesDataType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface IndustriesType {
  industriesData: IndustriesDataType[];
  isMobile: boolean;
}

export interface IndustriesCardType {
  title: string;
  description: string;
  imageUrl: string;
}

export interface LogoProps {
  variant?: "dark" | "light";
  brandMark?: boolean;
}

export interface LinkTypes {
  id: string;
  title: string;
  url: string;
  active: boolean;
  "aria-current"?: "page" | undefined;
}

export interface NavLinkType {
  navLinks: LinkTypes[];
}

export interface NavLinkTypes {
  handleConnected: () => void;
  activeLink: string;
  handleLink: (link: string) => void;
}

export interface IconGroupListType {
  id: string;
  icon: string;
}

export interface FeaturedChipListType {
  id: string;
  text: string;
}

export interface ServicesFeatureListType {
  id: string;
  title: string;
  description: string;
}

export interface IconGroupWithTextListType {
  iconGroupWithTextList: {
    id: string;
    icon: string;
    text: string;
  }[];
  iconGroupListWithText: string;
}

export interface ServicesTitleType {
  title: string;
  className?: string;
}

export enum ServicesSectionEnum {
  MobileApp = "MOBILEAPP",
  WebApp = "WEBAPP",
  ArtificialIntelligence = "ARTIFICIALINTELLIGENCE",
  Headless = "HEADLESS",
  ResourceAugmentation = "RESOURCEAUGMENTATION",
}
export interface TabsTypes {
  id: string;
  title: string;
  sectionId: ServicesSectionEnum;
}

export interface TabsDataTypes {
  tabs: TabsTypes[];
  serviceTabRef: LegacyRef<HTMLDivElement>;
}

export interface CardData {
  id: string;
  title: string;
  content: string;
}

export interface DummyCardProps {
  cards: CardData[];
}

export interface AccordionHeaderType {
  id: string;
  title: string;
  openAccordion: boolean;
  handleAccordion: (id: string) => void;
}

export interface ServiceType {
  isOpen: boolean;
  isTablet: boolean | undefined;
}

export interface FeaturedImageType {
  id: string;
  src: StaticImageData;
  text: string;
}

export interface servicesListType {
  name: string;
  id: string;
  isOpen?: boolean;
}

export interface TabsComponentType {
  tabs: TabsTypes[];
  selectedTab: string | null;
  underlineStyle: {
    left: number;
    width: number;
  };
  handleClick: (id: string, tab: string) => void;
}

export interface TabItemType {
  tab: TabsTypes;
  selectedTab: string | null;
  handleClick: (id: string, tab: string) => void;
}

export enum TabId {
  Tab1 = "tab-1",
  Tab2 = "tab-2",
  Tab3 = "tab-3",
  Tab4 = "tab-4",
  Tab5 = "tab-5",
}

export interface PageTitleType {
  title: string;
  isMobile?: boolean;
  isDarkBackground?: boolean;
  slim?: boolean;
}

export interface PageHeaderProps {
  pageTitle: string;
  pageDescription?: string;
}
export interface LinkButtonType {
  href: string;
  text: string;
}

export interface ServicesSectionType {
  setUnderlineStyle: (underlineStyle: { left: number; width: number }) => void;
  servicesList: servicesListType[];
  setServicesList: (servicesList: servicesListType[]) => void;
  setSelectedTab: (selectedTab: string | null) => void;
}

export interface UploadButtonType {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  errorText: string;
  isDarkBackground?: boolean;
}

export interface OpenPositionCardType {
  title: string;
  description: string;
  jobType: string;
  skills: string;
  imagePosition: string;
}
interface PositionCardData {
  id: number;
  title: string;
  description: string;
  jobType: string;
  skills: string;
}
export interface PositionCardDataType {
  positionCardData: PositionCardData[];
}

export interface SvHeaderProps {
  children: React.ReactNode;
}

export interface InsightsProfileProps {
  date: string;
  profileUrl: string;
  name: string;
}

export interface LandingPageProps {
  landingPage: LandingPageData;
}

export interface LandingPageData {
  banner: BannerProps;
  technologiesCollection: TechnologiesProps;
  servicesCollection: ServicesProps;
  industriesCollection: IndustriesProps;
  newsAndInsightsCollection: NewsAndInsightsProps;
}

export interface BannerProps {
  cta: {
    link: string;
    text: string;
  };
  description: string;
  title: string;
}

export interface TechnologiesProps {
  items: {
    id: number;
    title: string;
    icon: string;
  }[];
}

export interface ServicesProps {
  items: {
    id: string;
    serviceTitle: string;
    serviceDescription: string;
    serviceIcon: string;
  }[];
}

export interface IndustriesProps {
  items: {
    id: string;
    description: string;
    imageUrl: string;
    title: string;
  }[];
}

export interface NewsAndInsightsProps {
  items: {
    description: string;
    featuredImage: {
      url: string;
    };
    id: string;
    internalName: string;
    publishedDate: string;
    title: string;
    slug: string;
  }[];
}

export interface InsightPageDataProps {
  author: {
    avatar: { url: string };
    internalName: string;
    name: string;
  };
  content: {
    json: {
      content: {
        content: {
          data: unknown;
          marks: [];
          nodeType: string;
          value: string;
        }[];
      }[];
      data: unknown;
      nodeType: string;
    };
  };
  description: string;
  featuredImage: {
    url: string;
  };
  id: string;
  internalName: string;
  publishedDate: string;
  seoFields: {
    canonicalUrl: null;
    internalName: string;
    noFollow: boolean;
    noIndex: boolean;
    pageDescription: string;
    pageTitle: string;
    shareImagesCollection: {
      items: { url: string }[];
    };
  };
  slug: string;
  sys: {
    id: string;
  };
  title: string;
}

export interface NewsAndInsightsGridProps {
  newsAndInsightsCollection: ComponentNewsAndInsightsCollectionTypes;
}

export interface ComponentNewsAndInsightsCollectionTypes {
  items: {
    author: {
      avatar: { url: string };
      internalName: string;
      name: string;
    };
    content: {
      json: {
        content: {
          content: {
            data: unknown;
            marks: [];
            nodeType: string;
            value: string;
          }[];
        }[];
        data: unknown;
        nodeType: string;
      };
    };
    description: string;
    featuredImage: {
      url: string;
    };
    id: string;
    internalName: string;
    publishedDate: string;
    seoFields: {
      canonicalUrl: null;
      internalName: string;
      noFollow: boolean;
      noIndex: boolean;
      pageDescription: string;
      pageTitle: string;
      shareImagesCollection: {
        items: { url: string }[];
      };
    };
    slug: string;
    sys: {
      id: string;
    };
    title: string;
  }[];
}

export interface CBAboutMissionCardType {
  title: string;
  image: string;
  description: string;
}

export interface CardDataType {
  id: string;
  title: string;
  image: string;
  link: string;
  description: string;
}

export interface CBAboutExploreType {
  titlePartOne: string;
  titlePartTwo: string;
}

export interface CBAboutUsMissionType {
  cardData: CardDataType[];
  titlePartOne: string;
  titlePartTwo: string;
}

export interface WorkDataType {
  id: string;
  title: string;
}
export interface CBAboutGrowthType {
  title: string;
  data: WorkDataType[];
}
