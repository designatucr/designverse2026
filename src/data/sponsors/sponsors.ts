import { StaticImageData } from "next/image";
import Sponsor1 from "@/public/landing/sponsor1.svg";
import Sponsor2 from "@/public/landing/sponsor2.svg";
import Sponsor3 from "@/public/landing/sponsor3.svg";
import Sponsor4 from "@/public/landing/sponsor4.svg";
import Sponsor5 from "@/public/landing/sponsor5.svg";
import Sponsor6 from "@/public/landing/sponsor6.svg";
import Sponsor7 from "@/public/landing/sponsor7.svg";
import Sponsor8 from "@/public/landing/sponsor8.svg";

export interface Sponsor {
  image: StaticImageData;
  name: string;
  translateY: boolean;
  link: string;
}

export const sponsors: Sponsor[] = [
  {
    image: Sponsor1,
    name: "Pure Buttons",
    translateY: false,
    link: "https://www.purebuttons.com/",
  },
  {
    image: Sponsor2,
    name: "Creat'R Lab",
    translateY: true,
    link: "https://library.ucr.edu/research-support/making-and-innovation/creatr-lab-makerspace",
  },
  {
    image: Sponsor3,
    name: "Progressive Graphics",
    translateY: false,
    link: "https://progressive-graphics.com/Progressive_Graphics/shop/home",
  },
  {
    image: Sponsor4,
    name: "Notion",
    translateY: false,
    link: "https://www.notion.com/",
  },
  {
    image: Sponsor5,
    name: "Monster Energy",
    translateY: true,
    link: "https://www.monsterenergy.com/en-us/",
  },
  {
    image: Sponsor6,
    name: "Balsamiq",
    translateY: false,
    link: "https://balsamiq.com/",
  },
  {
    image: Sponsor7,
    name: "Framer",
    translateY: false,
    link: "https://www.framer.com/",
  },
  {
    image: Sponsor8,
    name: "Azure RP",
    translateY: false,
    link: "https://www.axure.com/",
  },
];
