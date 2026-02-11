import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import bunny from "@/public/landing/bunny.svg";
import matcha from "@/public/landing/matcha.svg";
import taiyaki from "@/public/landing/taiyaki.svg";

const support = [
  {
    title: "Become a Mentor",
    description:
      "Have experience leading, using Figma, or coordinating groups? Share your knowledge and become a mentor!",
    form: "Mentor",
    link: "/apply/mentor",
  },
  {
    title: "Sponsor Us",
    description:
      "Have a company or brand you want to bring attention to? Sponsor us to raise brand awareness and exposure through social media and giveaways!",
    form: "Sponsor",
    link: "/apply/sponsor",
  },
  {
    title: "Volunteer Work",
    description:
      "Need experience or just want to help our organization come to life? Volunteer to help the Designathon happen!",
    form: "Volunteer",
    link: "/apply/volunteer",
  },
];

const About = () => {
  return (
    <div>
      <div className="bg-beige-100 z-20 w-full items-start justify-center">
        <div className="md:w-7/8 bg-landing-beige-200 pl-[8vw] pr-[8vw] font-semibold sm:w-full">
          <div className="py-5 text-left font-inter text-4xl font-bold text-landing-brown-300 md:text-7xl xl:py-10">
            ABOUT US
          </div>

          <div className="flex flex-col items-center md:flex-row md:gap-12">
            <div className="relative mb-8 w-5/6 flex-1 md:w-2/3">
              <div className="relative w-full bg-white p-6 text-landing-brown-400 shadow-[5px_5px_5px_rgba(0,0,0,0.3)] md:w-2/3">
                <div className="absolute left-0 top-0 h-8 w-28 translate-x-[-25%] translate-y-[15%] rotate-[-38deg] bg-blue-200/60" />
                <div className="absolute right-0 top-0 h-8 w-28 translate-x-[25%] translate-y-[-20%] rotate-[38deg] bg-blue-200/60" />
                <div className="absolute bottom-0 left-0 h-8 w-28 translate-x-[-30%] translate-y-[-20%] rotate-[38deg] bg-blue-200/60" />
                <div className="absolute bottom-0 right-0 h-8 w-28 translate-x-[27%] translate-y-[10%] rotate-[-38deg] bg-blue-200/60" />
                <p className="p-3 text-sm font-medium lg:text-lg xl:text-xl">
                  DesignVerse is the first and only{" "}
                  <b>24-hour beginner-friendly</b> Design-a-Thon hosted by the
                  University of California, Riverside. Designers are challenged
                  to create the interface of an app or website through a given
                  prompt, which would then be demoed and presented to a panel of
                  industry professionals.
                  <br />
                  <br />
                  At DesignVerse, our goal is to empower our community of
                  students who are interested in design-like thinking and
                  provide career developmental opportunities through our{" "}
                  <b>workshops</b>, <b>mentorship</b>, and{" "}
                  <b>networking events</b>.
                  <br />
                  <br />
                  We welcome all undergraduate, graduate and high school
                  students for a lively weekend filled with creativity,
                  networking, mentorship, and more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <Image
          src={bunny}
          alt="bunny"
          className="absolute right-8 top-0 z-10 hidden w-72 -translate-y-3/4 object-contain md:flex lg:-translate-x-1/3"
        />

        <Image
          src={matcha}
          alt="matcha"
          className="absolute -top-6 right-8 z-40 w-1/3 md:right-48 md:w-32 md:-translate-x-full"
        />

        <Image
          src={taiyaki}
          alt="taiyaki"
          className="absolute left-8 top-12 z-40 w-1/4 rotate-6 md:left-auto md:right-96 md:w-24 md:-translate-x-full"
        />

        <div className="relative z-20 h-40 w-full bg-landing-orange-200 md:h-48" />

        <div className="relative z-30 overflow-hidden">
          <div className="z-40 mx-auto bg-landing-orange-300 py-8">
            <p className="py-8 text-center text-4xl font-bold text-white md:text-5xl lg:text-7xl">
              SUPPORT US{" "}
            </p>
            <div className="mx-auto mb-8 flex w-3/4 flex-col justify-center lg:flex-row">
              {support.map(({ title, description, form, link }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between gap-7 text-white lg:gap-12"
                >
                  <p className="text-center text-2xl font-bold lg:text-3xl">
                    {title}
                  </p>
                  <div className="max-w-md text-center text-sm md:text-lg lg:max-w-lg lg:text-base">
                    {description}
                  </div>
                  <Button
                    asChild
                    className="w-44 rounded-full bg-landing-brown-200 transition hover:scale-110 hover:bg-landing-brown-400"
                  >
                    <Link
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex gap-2"
                    >
                      {form} <ExternalLink />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
