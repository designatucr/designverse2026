import { StaticImageData } from "next/image";
import Snapchat from "@/public/landing/sponsors/Snapchat.svg";
import CreatRLab from "@/public/landing/sponsors/CreatRLab.svg";
import PG from "@/public/landing/sponsors/PG.svg";
import ASUCR from "@/public/landing/sponsors/ASUCR.svg";
import SoB from "@/public/landing/sponsors/SoB.svg";
import Notion from "@/public/landing/sponsors/Notion.svg";
import Framer from "@/public/landing/sponsors/Framer.svg";
import Axure from "@/public/landing/sponsors/Axure.svg";
import Balsamiq from "@/public/landing/sponsors/Balsamiq.svg";
import Pure from "@/public/landing/sponsors/Pure.svg";
import Monster from "@/public/landing/sponsors/Monster.svg";
import Canes from "@/public/landing/sponsors/Canes.svg";
import HHKB from "@/public/landing/sponsors/hhkb.svg";

export interface Sponsor {
  image: StaticImageData;
  name: string;
  link: string;
}

export const sponsors: Sponsor[] = [
  {
    image: Snapchat,
    name: "Snapchat",
    link: "https://www.snapchat.com/",
  },
  {
    image: CreatRLab,
    name: "Creat'R Lab",
    link: "https://library.ucr.edu/research-support/making-and-innovation/creatr-lab-makerspace",
  },
  {
    image: PG,
    name: "Progressive Graphics",
    link: "https://progressive-graphics.com/Progressive_Graphics/shop/home",
  },
  {
    image: ASUCR,
    name: "Associated Students of UCR",
    link: "https://asucr.ucr.edu/",
  },
  {
    image: SoB,
    name: "UCR School of Business",
    link: "https://business.ucr.edu/",
  },
  {
    image: Notion,
    name: "Notion",
    link: "https://www.notion.com/",
  },
  {
    image: Framer,
    name: "Framer",
    link: "https://www.framer.com/",
  },
  {
    image: Axure,
    name: "Axure RP",
    link: "https://www.axure.com/",
  },
  {
    image: Balsamiq,
    name: "Balsamiq",
    link: "https://balsamiq.com/",
  },
  {
    image: Pure,
    name: "Pure Buttons",
    link: "https://www.purebuttons.com/",
  },
  {
    image: Monster,
    name: "Monster Energy",
    link: "https://www.monsterenergy.com/en-us/",
  },
  {
    image: Canes,
    name: "Raising Cane's",
    link: "https://raisingcanes.com/home/",
  },
  {
    image: HHKB,
    name: "Happy Hacking Keyboards",
    link: "https://hhkeyboard.us/",
  },
];
