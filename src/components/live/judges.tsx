import Title from "@/components/ui/title";
import judges from "@/data/judges";
import Judge from "./judge";
import Link from "next/link";

const Judges = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title>Judges</Title>
      <div className="z-20 mx-8 flex flex-row flex-wrap justify-center pt-8 md:place-items-center md:items-center">
        {judges.map(
          (
            { name, position, company, photo, icon, link, iconStyles },
            index,
          ) => (
            <div
              key={index}
              className="z-20 m-2 flex w-5/12 flex-col px-4 md:justify-center lg:w-1/4"
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
    </div>
  );
};

export default Judges;
