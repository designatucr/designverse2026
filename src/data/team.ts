import { StaticImageData } from "next/image";

import Adi from "@/public/landing/headshots/Adi.webp";
import Anisha from "@/public/landing/headshots/Anisha.webp";
import Arielle from "@/public/landing/headshots/Arielle.webp";
import Charleen from "@/public/landing/headshots/Charleen.webp";
import Hannah from "@/public/landing/headshots/Hannah.webp";
import Jane from "@/public/landing/headshots/Jane.webp";
import Jasmine from "@/public/landing/headshots/Jasmine.webp";
import Jimmy from "@/public/landing/headshots/Jimmy.webp";
import John from "@/public/landing/headshots/John.webp";
import Kaitlin from "@/public/landing/headshots/Kaitlin.webp";
import Kaylie from "@/public/landing/headshots/Kaylie.webp";
import Kevin from "@/public/landing/headshots/Kevin.webp";
import Saanvi from "@/public/landing/headshots/Saanvi.webp";
import Suki from "@/public/landing/headshots/Suki.webp";
import Sweden from "@/public/landing/headshots/Sweden.webp";

export interface Team {
  name: string;
  image: StaticImageData;
  role: string;
}

const Teams: Team[] = [
  { name: "Arielle", image: Arielle, role: "Co-Director" },
  { name: "Kaitlin", image: Kaitlin, role: "Co-Director" },
  { name: "Anisha", image: Anisha, role: "Operations" },
  { name: "John", image: John, role: "Sponsorship" },
  { name: "Saanvi", image: Saanvi, role: "Sponsorship" },
  { name: "Jasmine", image: Jasmine, role: "PR" },
  { name: "Suki", image: Suki, role: "PR" },
  { name: "Kaylie", image: Kaylie, role: "Marketing" },
  { name: "Charleen", image: Charleen, role: "UI/UX" },
  { name: "Sweden", image: Sweden, role: "SWE" },
  { name: "Jane", image: Jane, role: "SWE" },
  { name: "Jimmy", image: Jimmy, role: "SWE" },
  { name: "Adi", image: Adi, role: "SWE" },
  { name: "Hannah", image: Hannah, role: "SWE" },
  { name: "Kevin", image: Kevin, role: "SWE" },
];

export default Teams;
