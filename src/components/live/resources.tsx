import Image from "next/image";
import Link from "next/link";

import Figma from "@/public/landing/resources/figma.svg";
import Dribble from "@/public/landing/resources/dribble.svg";
import Miro from "@/public/landing/resources/miro.svg";
import Turtle from "@/public/landing/resources/turtle.svg";
import Pie from "@/public/landing/resources/pie.svg";
import Bread from "@/public/landing/resources/bread.svg";

const resources = [
  {
    image: Figma,
    link: "https://www.figma.com",
    title: "Figma",
    description:
      "A tool for designing and building prototypes for user interfaces.",
  },
  {
    image: Dribble,
    link: "https://dribbble.com",
    title: "Dribble",
    description:
      "An online platform for designers to find and share inspirations!",
  },
  {
    image: Miro,
    link: "https://www.miro.com",
    title: "Miro",
    description:
      "A remote collaboration tool to build large scale design projects.",
  },
];

const bakeryItems = [
  {
    image: Turtle,
    alternative: "turtle",
    sizing: "scale-[0.7]",
  },
  {
    image: Bread,
    alternative: "bread",
    sizing: "scale-[0.9]",
  },
  {
    image: Pie,
    alternative: "pie",
    sizing: "scale-[0.8]",
  },
];

const Resources = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <p className="flex w-3/4 justify-center bg-landing-brown-200 p-12 font-inter text-2xl font-bold text-white md:text-7xl">
        RESOURCES
      </p>
      <div className="grid w-3/4 grid-cols-1 gap-0 border-8 border-x-landing-brown-400 lg:grid-cols-3">
        {resources.map(({ link, title, description, image }, index) => (
          <div
            className="flex flex-col items-center justify-center gap-8 bg-gray-100 pt-10"
            key={index}
          >
            <Link
              href={link}
              target="_blank"
              className="md:h-2/12 flex w-2/5 flex-col items-center hover:scale-105 hover:cursor-pointer md:w-2/12 lg:w-1/2"
            >
              <Image src={image} className="rounded-full" alt="Resource" />
            </Link>
            <div className="bg-gray-100 p-12 text-center text-landing-brown-400 lg:bg-landing-brown-400 lg:text-white">
              <div className="mb-6 text-xl font-bold md:text-3xl">{title}</div>
              <div className="text-center lg:text-lg">{description}</div>
            </div>
          </div>
        ))}
        <div className="w-full bg-landing-brown-400 p-16 md:hidden lg:bg-gray-100"></div>
        {bakeryItems.map(({ image, alternative, sizing }, index) => (
          <div
            className="flex flex-col items-center justify-center gap-8 bg-gray-100 p-3 lg:pt-10"
            key={index}
          >
            <Image src={image} alt={alternative} className={sizing} />
          </div>
        ))}
      </div>
      <div className="w-3/4 bg-landing-brown-400 p-16 text-landing-brown-400 lg:bg-landing-brown-400 lg:text-white"></div>
    </div>
  );
};

export default Resources;
