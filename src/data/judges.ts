import Jimmy from "@/public/landing/headshots/Jimmy.webp";
import BearBread from "@/public/landing/bearbread.svg";
import Croissant from "@/public/landing/croissant.svg";
import TurtleBread from "@/public/landing/turtlebread.svg";
import { StaticImageData } from "next/image";

interface JudgeProps {
  name: string;
  position: string;
  company: string;
  photo: StaticImageData;
  icon: StaticImageData;
  link: string;
  iconStyles: string;
}

const judges: JudgeProps[] = [
  {
    name: "Jimmy Munoz",
    position: "Position",
    company: "Company",
    photo: Jimmy,
    icon: BearBread,
    link: "https://www.linkedin.com/in/jimmy-munoz-8a7a47290/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 xl:translate-x-6 xl:translate-y-4 lg:translate-x-8 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-5",
  },
  {
    name: "Jimmy Munoz",
    position: "Position",
    company: "Company",
    photo: Jimmy,
    icon: Croissant,
    link: "https://www.linkedin.com/in/jimmy-munoz-8a7a47290/",
    iconStyles:
      "w-2/3 sm:w-2/3 md:w-2/3 lg:w-3/4 xl:w-2/3 lg:translate-x-10 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-12 sm:translate-y-6 md:translate-x-10",
  },
  {
    name: "Jimmy Munoz",
    position: "Position",
    company: "Company",
    photo: Jimmy,
    icon: BearBread,
    link: "https://www.linkedin.com/in/jimmy-munoz-8a7a47290/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 xl:translate-x-6 xl:translate-y-4 lg:translate-x-8 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-5",
  },
  {
    name: "Jimmy Munoz",
    position: "Position",
    company: "Company",
    photo: Jimmy,
    icon: TurtleBread,
    link: "https://www.linkedin.com/in/jimmy-munoz-8a7a47290/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 lg:translate-x-10 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-8 sm:translate-y-6 md:translate-x-6",
  },
];

export default judges;
