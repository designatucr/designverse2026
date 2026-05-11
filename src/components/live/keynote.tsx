import Title from "@/components/ui/title";
import keynotes from "@/data/keynotes";
import Judge from "./judge";
import Link from "next/link";
import Image from "next/image";
import flags from "@/public/landing/flags.svg";

const Keynotes = () => {
  const repeats = 7;
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-8">
      <Title>KEYNOTE SPEAKERS</Title>

      <div className="z-20 mx-8 flex flex-row flex-wrap justify-center pt-8 md:place-items-center md:items-center">
        {keynotes.map(
          (
            { name, position, company, photo, icon, link, iconStyles },
            index,
          ) => (
            <div
              key={index}
              className="z-20 m-2 flex w-5/12 flex-col md:justify-center lg:w-1/4"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Judge
                  name={name}
                  position={position}
                  company={company}
                  photo={photo}
                  icon={icon}
                  iconStyles={iconStyles}
                />
              </Link>
            </div>
          ),
        )}
      </div>
      <div className="w-full overflow-hidden">
        <div className="flex w-max">
          {Array.from({ length: repeats }).map((_, i) => (
            <div
              key={i}
              className={`relative w-[250px] md:h-36 md:w-[600px] ${
                i % 2 === 1 ? "scale-x-[-1]" : ""
              }`}
            >
              <Image
                src={flags}
                alt="Team divider"
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keynotes;
