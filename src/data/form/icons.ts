import { StaticImageData } from "next/image";
import BearBread from "@/public/forms/formbearbread.svg";
import TurtleBread from "@/public/forms/formturtlebread.svg";
import XBread from "@/public/forms/formxbread.svg";
import Pie from "@/public/forms/formpie.svg";

interface IconProps {
  alt: string;
  image: StaticImageData;
}

const icons: IconProps[] = [
  {
    alt: "Bear Bread Icon",
    image: BearBread,
  },
  {
    alt: "Turtle Bread Icon",
    image: TurtleBread,
  },
  {
    alt: "X Bread Icon",
    image: XBread,
  },
  {
    alt: "Pie Icon",
    image: Pie,
  },
];

export default icons;
