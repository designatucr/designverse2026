import Karthik from "@/public/landing/judges/Karthik.webp";
import Sua from "@/public/landing/judges/Sua.webp";
import Vijaya from "@/public/landing/judges/Vijaya.webp";
import Priyanka from "@/public/landing/judges/Priyanka.webp";
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
    name: "Sua Lee",
    position: "Visual and Product Designer",
    company: "TruAbutment",
    photo: Sua,
    icon: BearBread,
    link: "https://www.linkedin.com/in/designersualee/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 xl:translate-x-6 xl:translate-y-4 lg:translate-x-8 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-5",
  },
  {
    name: "Vijaya sai Munduru",
    position: "Lead Member of Technical Staff",
    company: "Salesforce",
    photo: Vijaya,
    icon: Croissant,
    link: "https://www.linkedin.com/in/vmunduru/",
    iconStyles:
      "w-2/3 sm:w-2/3 md:w-2/3 lg:w-3/4 xl:w-2/3 lg:translate-x-10 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-12 sm:translate-y-6 md:translate-x-10",
  },
  {
    name: "Karthik Bodducherla",
    position: "Director, Applications Development",
    company: "IQVIA",
    photo: Karthik,
    icon: TurtleBread,
    link: "https://www.linkedin.com/in/karthikbodducherla/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 xl:translate-x-6 xl:translate-y-4 lg:translate-x-8 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-5",
  },
  {
    name: "Priyanka Malla",
    position: "IT Project Manager",
    company: "Foundation Building Materials",
    photo: Priyanka,
    icon: Croissant,
    link: "https://www.linkedin.com/in/mpriyanka08/",
    iconStyles:
      "w-1/2 sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-1/2 xl:translate-x-6 xl:translate-y-4 lg:translate-x-8 lg:translate-y-4 translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-5",
  },
];

export default judges;
