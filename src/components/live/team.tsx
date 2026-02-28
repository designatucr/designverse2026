import Image from "next/image";
import aboveTeam from "@/public/landing/aboveTeam.svg";
// import hangingPlant from "@/public/landing/hangingPlant.svg"
import Title from "@/components/ui/title";
import Member from "./member";
import Teams from "@/data/team";
const Team = () => {
  const repeats = 7;

  return (
    <div className="py-2 md:py-6">
      <div className="w-full overflow-hidden">
        <div className="flex w-max">
          {Array.from({ length: repeats }).map((_, i) => (
            <div
              key={i}
              className={`relative h-24 w-[300px] md:h-24 md:w-[400px] ${
                i % 2 === 1 ? "scale-x-[-1]" : ""
              }`}
            >
              <Image
                src={aboveTeam}
                alt="Team divider"
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Title>Meet The Team</Title>
      </div>
      <div className="z-20 mx-8 flex flex-row flex-wrap justify-center md:place-items-center md:items-center">
        {Teams.map(({ name, image, role }, index) => (
          <div
            key={index}
            className="z-20 m-2 flex w-5/12 flex-col px-4 md:justify-center lg:w-1/4"
          >
            <Member name={name} role={role} image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
