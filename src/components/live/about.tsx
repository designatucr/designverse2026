import { Inter } from "next/font/google";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import bunny from "@/public/landing/bunny.svg";
import matcha from "@/public/landing/matcha.svg";
import taiyaki from "@/public/landing/taiyaki.svg";
// eslint-disable-next-line
const inter = Inter({ subsets: ["latin"] });

const support = [
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
      "Would you like to help our organization come to life? Volunteer to help the Designathon happen!",
    form: "Volunteer",
    link: "https://minerva-sage.vercel.app/designverse/forms/volunteer",
  },
];

const About = () => {
  return (
    <div className={`relative ${inter.className}`}>
      <section
        id="about"
        className="bg-beige-100 pb-32md:pb-64 z-20 w-full items-start justify-center"
      >
        <div className="md:w-7/8 sm:w-full bg-landing-beige-200 pl-[8vw] pr-[8vw] font-semibold">
          <div className="md:text-7xl py-16 text-left font-inter text-4xl font-bold text-landing-brown-300">
            {" "}
            ABOUT US{" "}
          </div>
          <div className="md:flex-row md:gap-12 flex flex-col items-start gap-8">
            <div className="relative flex-1">
              <div className="sm:p-12 relative bg-white p-6 py-24 text-landing-brown-400 shadow-[5px_5px_5px_rgba(0,0,0,0.3)]">
                <div className="absolute left-0 top-0 h-8 w-28 translate-x-[-25%] translate-y-[15%] rotate-[-38deg] bg-blue-200/60" />
                <div className="absolute right-0 top-0 h-8 w-28 translate-x-[25%] translate-y-[-20%] rotate-[38deg] bg-blue-200/60" />
                <div className="absolute bottom-0 left-0 h-8 w-28 translate-x-[-30%] translate-y-[-20%] rotate-[38deg] bg-blue-200/60" />
                <div className="absolute bottom-0 right-0 h-8 w-28 translate-x-[27%] translate-y-[10%] rotate-[-38deg] bg-blue-200/60" />
                <p className="lg:text-lg text-sm font-medium">
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
            <div className="sm:w-1/2 sm:place-self-end md:w-1/3 md:pt-40 lg:w-1/3 lg:pt-40 xl:w-1/3 relative flex w-1/2 max-w-96 items-center justify-center place-self-end">
              <Image src={bunny} alt="bunny" className="h-auto w-full" />
            </div>
          </div>
        </div>
        <Image
          src={matcha}
          alt="matcha"
          className="sm:right-[30%] sm:w-1/6 md:right-[25%] md:max-w-32 lg:right-[20%] lg:block lg:max-w-36 xl:right-[25%] xl:max-w-40 absolute bottom-[30%] right-[33%] z-40 hidden w-1/4 max-w-32"
        />
        <Image
          src={taiyaki}
          alt="taiyaki"
          className="sm:right-[45%] sm:w-1/6 md:max-w-32 lg:block lg:max-w-36 absolute bottom-[32%] right-[60%] z-40 hidden w-1/4 max-w-28"
        />
      </section>
      <div className="relative">
        <div className="md:-mt-72 lg:-mt-72 xl:-mt-80 z-30 -mt-48 flex h-32 w-full items-center bg-landing-orange-200" />
        <div className="h-2/3 place-items-center bg-landing-orange-300 p-20">
          <p className="md:text-7xl pb-20 text-center text-4xl font-bold text-white">
            BECOME A VOLUNTEER{" "}
          </p>
          <div className="lg:flex-row flex w-2/3 flex-col gap-20 px-9">
            {support.map(({ title, description, form, link }, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-12 text-white"
              >
                <p className="lg:text-3xl text-center text-xl font-bold">
                  {title}
                </p>
                <div className="lg:text-base w-1/2 text-center text-sm">
                  {description}
                </div>
                <Button
                  asChild
                  className="w-44 rounded-full bg-landing-brown-200 hover:scale-105 hover:bg-landing-brown-400"
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
  );
};

export default About;
