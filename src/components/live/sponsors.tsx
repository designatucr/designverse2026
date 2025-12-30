import Title from "@/components/ui/title";
import { sponsors } from "@/data/sponsors/sponsors";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Title>Sponsors</Title>
      <div className="max-w-8xl grid w-5/6 grid-cols-1 items-center justify-center gap-8 p-6 sm:grid-cols-3 sm:gap-1">
        {sponsors.map(({ name, image, translateY }, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${translateY ? "-translate-y-[6%]" : ""}`}
          >
            <Image src={image} alt={name} className="w-2/3 sm:w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
