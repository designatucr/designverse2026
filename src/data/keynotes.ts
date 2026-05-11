import Karthik from "@/public/landing/judges/Karthik.webp";
import Vijaya from "@/public/landing/judges/Vijaya.webp";
import BunnyPanel from "@/public/landing/BunnyKeynote.svg";
import BearPanel from "@/public/landing/BearKeynote.svg";
import { StaticImageData } from "next/image";

interface KeynoteProps {
  name: string;
  position: string;
  company: string;
  photo: StaticImageData;
  icon: StaticImageData;
  link: string;
  iconStyles: string;
}

const keynotes: KeynoteProps[] = [
  {
    name: "Vijaya sai Munduru",
    position: "Lead Member of Technical Staff",
    company: "Salesforce",
    photo: Vijaya,
    icon: BunnyPanel,
    link: "https://www.linkedin.com/in/vmunduru/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-2/5 xl:translate-x-6 xl:translate-y-4 lg:translate-x-8 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-5",
  },
  {
    name: "Karthik Bodducherla",
    position: "Director, Applications Development",
    company: "IQVIA",
    photo: Karthik,
    icon: BearPanel,
    link: "https://www.linkedin.com/in/karthikbodducherla/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 xl:translate-x-6 xl:translate-y-4 lg:translate-x-8 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-5",
  },
];

export default keynotes;
