import Karthik from "@/public/landing/judges/Karthik.webp";
import Vijaya from "@/public/landing/judges/Vijaya.webp";
import Steven from "@/public/landing/judges/Steven.webp";
import Stephanie from "@/public/landing/judges/Stephanie.webp";
import Manisha from "@/public/landing/judges/Manisha.webp";

import BunnyPanel from "@/public/landing/BunnyKeynote.svg";
import BearPanel from "@/public/landing/BearKeynote.svg";
import BearBread from "@/public/landing/bearbread.svg";
import Croissant from "@/public/landing/croissant.svg";
import TurtleBread from "@/public/landing/turtlebread.svg";

import { StaticImageData } from "next/image";

interface PanelProps {
  name: string;
  position: string;
  company: string;
  photo: StaticImageData;
  icon: StaticImageData;
  link: string;
  iconStyles: string;
}

const panelists: PanelProps[] = [
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
  {
    name: "Steven Huang",
    position: "Founder and Product Builder",
    company: "HumanVector",
    photo: Steven,
    icon: BearBread,
    link: "https://www.linkedin.com/in/steventhuang/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 xl:translate-x-6 xl:translate-y-4 lg:translate-x-8 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-5",
  },
  {
    name: "Stephanie Mae Mauricio",
    position: "Incoming Design Strategy Intern",
    company: "MongoDB",
    photo: Stephanie,
    icon: Croissant,
    link: "https://www.linkedin.com/in/stephanie-mae-mauricio/",
    iconStyles:
      "w-2/3 sm:w-2/3 md:w-2/3 lg:w-3/4 xl:w-2/3 lg:translate-x-10 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-12 sm:translate-y-6 md:translate-x-10",
  },
  {
    name: "Manisha Varma Kamarushi",
    position: "Customer Experience Analyst",
    company: "Charter Communications",
    photo: Manisha,
    icon: TurtleBread,
    link: "https://www.linkedin.com/in/manishavarmak/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 xl:translate-x-6 xl:translate-y-4 lg:translate-x-8 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-5",
  },
];

export default panelists;
