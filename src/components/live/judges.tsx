import Title from "@/components/ui/title";
import judges from "@/data/judges";
import Judge from "./judge";
import Link from "next/link";

const Judges = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-6">
      <Title>JUDGES</Title>
      <div className="z-20 mx-auto flex max-w-7xl flex-wrap justify-center gap-6 pt-8">
        {judges.map(
          (
            { name, position, company, photo, icon, link, iconStyles },
            index,
          ) => (
            <div
              key={index}
              className="z-20 flex w-full justify-center sm:w-[45%] lg:w-[30%] xl:w-[24%]"
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
