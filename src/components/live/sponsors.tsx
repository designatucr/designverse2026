import Title from "@/components/ui/title";
import { sponsors } from "@/data/sponsors/sponsors";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-6 md:pt-12">
      <Title>SPONSORS</Title>
      <div className="w-9/10 flex flex-wrap justify-center gap-4 p-6 sm:gap-1 md:w-9/12 md:gap-8">
        {sponsors.map(({ name, image, translateY, link }, index) => (
          <Link
            key={index}
            href={link}
            target="_blank"
            className={`flex w-2/5 items-center justify-center transition-transform hover:scale-110 sm:w-1/3 md:w-1/4 ${translateY ? "-translate-y-[6%]" : ""}`}
          >
            <Image src={image} alt={name} className="w-2/3 sm:w-3/4" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
