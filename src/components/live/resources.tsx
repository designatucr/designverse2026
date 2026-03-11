import Image from "next/image";
import Link from "next/link";
// import Shelf from "@/public/landing/resources/shelf.svg";

import Figma from "@/public/landing/resources/figma.svg";
import Dribble from "@/public/landing/resources/dribble-logo.svg";
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
      <p className="flex w-4/5 justify-center rounded-t-2xl bg-landing-brown-300 p-12 font-inter text-2xl font-bold text-white md:text-7xl">
        RESOURCES
      </p>
      <div className="relative flex w-4/5 flex-col items-center justify-center">
        <div className="relative grid w-full grid-cols-1 gap-0 border-x-2 border-white lg:grid-cols-3">
          {resources.map(({ link, title, description, image }, index) => (
            <div
              className="relative flex flex-col items-center justify-center"
              key={index}
            >
              <div className="relative flex h-[20vh] w-full flex-col items-center justify-center bg-landing-glass-100/15 sm:h-[25vh] md:h-[40vh] lg:h-[40vh]">
                <Link
                  href={link}
                  target="_blank"
                  className="flex w-full flex-col items-center justify-center hover:scale-105 hover:cursor-pointer"
                >
                  <Image
                    src={image}
                    className="md:w-42 w-24 rounded-full sm:w-32 lg:w-32"
                    alt="Resource"
                  />
                </Link>
                <div className="sm:h-21 absolute bottom-0 -z-10 h-[32%] w-full translate-y-[1%] bg-landing-brown-400 [clip-path:polygon(12%_0%,87%_0%,_100%_100%,_0%_100%)] md:h-[32%] lg:hidden" />
              </div>
              <div className="h-2/3 w-full bg-landing-brown-300 p-8 text-center text-white lg:p-10">
                <div className="mb-6 text-xl font-bold md:text-3xl">
                  {title}
                </div>
                <div className="text-center lg:text-lg">{description}</div>
              </div>
            </div>
          ))}
          <div className="w-full bg-landing-brown-300 md:hidden lg:bg-gray-100" />
          <div className="relative flex h-[20vh] w-full flex-col items-center justify-center bg-landing-glass-100/15 sm:h-[25vh] md:h-[40vh] lg:hidden lg:h-[40vh]">
            <Image
              src={Turtle}
              alt="Turtle Bread"
              className="w-24 translate-y-[20%] sm:w-32 md:w-48 lg:w-32"
            />
            <div className="sm:h-21 absolute bottom-0 -z-10 h-[32%] w-full translate-y-[1%] bg-landing-brown-400 [clip-path:polygon(12%_0%,87%_0%,_100%_100%,_0%_100%)] md:h-[32%] lg:hidden" />
          </div>
          {bakeryItems.map(({ image, alternative, sizing }, index) => (
            <div
              className="hidden flex-col items-center justify-center gap-8 bg-landing-glass-100/15 p-3 lg:flex lg:pt-10"
              key={index}
            >
              <Image src={image} alt={alternative} className={sizing} />
            </div>
          ))}
        </div>
        <div className="absolute top-[21%] -z-10 hidden h-[32%] w-full translate-y-[1%] bg-landing-brown-400 [clip-path:polygon(6%_0%,94%_0%,_100%_100%,_0%_100%)] sm:h-64 md:h-28 lg:block" />
        <div className="absolute bottom-0 -z-10 hidden h-[32%] w-full translate-y-[3%] bg-landing-brown-400 [clip-path:polygon(6%_0%,94%_0%,_100%_100%,_0%_100%)] sm:h-64 md:h-28 lg:block" />
      </div>
      <div className="w-4/5 bg-landing-brown-300 p-16 text-landing-brown-400 lg:bg-landing-brown-300 lg:text-white" />
    </div>
  );
};

export default Resources;
