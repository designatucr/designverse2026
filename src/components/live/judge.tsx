import Image, { StaticImageData } from "next/image";

interface JudgeProps {
  name: string;
  position: string;
  company: string;
  photo: StaticImageData;
  icon: StaticImageData;
  iconStyles: string;
}

const Judge = ({
  name,
  position,
  company,
  photo,
  icon,
  iconStyles,
}: JudgeProps) => {
  return (
    <div className="flex flex-col items-center md:mx-6 md:justify-center md:p-6">
      <div className="relative mb-4 w-full border-2">
        <Image
          src={photo}
          alt={name}
          className="h-full w-full object-cover transition hover:scale-105"
        />
        <Image
          src={icon}
          alt=""
          className={`absolute bottom-0 right-0 ${iconStyles ? iconStyles : ""}`}
        />
      </div>
      <p className="text-center text-xl font-bold text-landing-brown-300 md:text-2xl">
        {name}
      </p>
      <p className="text-md text-center text-landing-brown-300 md:text-lg">
        {position} @ {company}
      </p>
    </div>
  );
};

export default Judge;
