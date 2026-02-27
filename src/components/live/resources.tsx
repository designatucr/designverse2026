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
      <p className="flex w-3/4 justify-center rounded-t-2xl bg-landing-brown-300 p-12 font-inter text-2xl font-bold text-white md:text-7xl">
        RESOURCES
      </p>
      <div className="relative flex w-3/4 flex-col items-center justify-center">
        <div className="relative grid w-full grid-cols-1 gap-0 border-x-2 border-white lg:grid-cols-3">
          {resources.map(({ link, title, description, image }, index) => (
            <div
              className="relative flex flex-col items-center justify-center"
              key={index}
            >
              <div className="relative flex h-[25vh] w-full flex-col items-center justify-center bg-landing-glass-100/15 md:h-[40vh] lg:h-[35vh]">
                <Link
                  href={link}
                  target="_blank"
                  className="md:h-2/12 flex w-[25vw] flex-col items-center hover:scale-105 hover:cursor-pointer sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/2"
                >
                  <Image src={image} className="rounded-full" alt="Resource" />
                </Link>
                <div className="absolute bottom-0 -z-10 block w-[50vw] translate-y-[71%] px-5 [perspective:800px] sm:w-[50vw] sm:translate-y-[73%] md:w-[44vw] md:translate-y-[76%] lg:hidden">
                  <div className="origin-top [transform-style:preserve-3d] [transform:rotateX(70deg)] sm:[transform:rotateX(70deg)] md:[transform:rotateX(70deg)]">
                    <div className="h-[20vh] bg-landing-brown-400 sm:h-[20vh] md:h-[37vh]" />
                  </div>
                </div>
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
          <div className="relative flex h-[25vh] items-center justify-center bg-landing-glass-100/15 lg:hidden">
            <Image src={Turtle} alt="Turtle Bread" className="scale-[0.8]" />
            <div className="absolute bottom-0 -z-10 block w-[45vw] translate-y-[75%] px-5 [perspective:800px] sm:w-[47vw] sm:translate-y-[73%] md:w-[44vw] md:translate-y-[76%] lg:hidden">
              <div className="origin-top [transform-style:preserve-3d] [transform:rotateX(70deg)] sm:[transform:rotateX(70deg)] md:[transform:rotateX(70deg)]">
                <div className="h-[30vh] bg-landing-brown-400 sm:h-[28vh] md:h-[37vh]" />
              </div>
            </div>
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
        <div className="absolute -z-10 hidden [perspective:800px] md:block lg:top-[20%] lg:w-[55vw] xl:top-[19%] xl:w-[58vw]">
          <div className="origin-top [transform-style:preserve-3d] [transform:rotateX(50deg)] xl:[transform:rotateX(48deg)]">
            <div className="bg-landing-brown-400 lg:h-[18vh] xl:h-[18vh]" />
          </div>
        </div>
        <div className="absolute bottom-0 -z-10 hidden [perspective:800px] md:block lg:w-[56vw] lg:translate-y-[40%] xl:w-[58vw] xl:translate-y-[45%]">
          <div className="origin-top [transform-style:preserve-3d] [transform:rotateX(50deg)] xl:[transform:rotateX(48deg)]">
            <div className="bg-landing-brown-400 lg:h-[18vh] xl:h-[18vh]" />
          </div>
        </div>
      </div>
      <div className="w-3/4 bg-landing-brown-300 p-16 text-landing-brown-400 lg:bg-landing-brown-300 lg:text-white" />
    </div>
  );
};

export default Resources;
