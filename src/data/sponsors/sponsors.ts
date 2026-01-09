import { StaticImageData } from "next/image";
import Sponsor1 from "@/public/landing/sponsor1.svg";
import Sponsor2 from "@/public/landing/sponsor2.svg";
import Sponsor3 from "@/public/landing/sponsor3.svg";
import Sponsor4 from "@/public/landing/sponsor4.svg";
import Sponsor5 from "@/public/landing/sponsor5.svg";
import Sponsor6 from "@/public/landing/sponsor6.svg";

export interface Sponsor {
  image: StaticImageData;
  name: string;
  translateY: boolean;
  link: string;
}

export const sponsors: Sponsor[] = [
  {
    image: Sponsor1,
    name: "Sponsor 1",
    translateY: false,
    link: "https://www.purebuttons.com/",
  },
  {
    image: Sponsor2,
    name: "Sponsor 2",
    translateY: true,
    link: "https://www.notion.com/",
  },
  {
    image: Sponsor3,
    name: "Sponsor 3",
    translateY: false,
    link: "/",
  },
  {
    image: Sponsor4,
    name: "Sponsor 4",
    translateY: false,
    link: "/",
  },
  {
    image: Sponsor5,
    name: "Sponsor 5",
    translateY: true,
    link: "/",
  },
  {
    image: Sponsor6,
    name: "Sponsor 6",
    translateY: false,
    link: "/",
  },
];
