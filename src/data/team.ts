import { StaticImageData } from "next/image";

import Adi from "@/public/landing/headshots/Adi.webp";
import Anisha from "@/public/landing/headshots/Anisha.webp";
import Arielle from "@/public/landing/headshots/Arielle.webp";
import Ashna from "@/public/landing/headshots/Ashna.webp";
import Charleen from "@/public/landing/headshots/Charleen.webp";
import Charlene from "@/public/landing/headshots/Charlene.webp";
import Hannah from "@/public/landing/headshots/Hannah.webp";
import Jane from "@/public/landing/headshots/Jane.webp";
import Jasmine from "@/public/landing/headshots/Jasmine.webp";
import Jimmy from "@/public/landing/headshots/Jimmy.webp";
import John from "@/public/landing/headshots/John.webp";
import Kaegan from "@/public/landing/headshots/Kaegan.webp";
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
  link: string;
}

const Teams: Team[] = [
  {
    name: "Arielle Haryanto",
    image: Arielle,
    role: "Co-Director",
    link: "https://www.linkedin.com/in/arielle-haryanto/",
  },
  {
    name: "Kaitlin Ching",
    image: Kaitlin,
    role: "Co-Director",
    link: "https://www.linkedin.com/in/kaitlinching/",
  },
  {
    name: "Anisha Nawar",
    image: Anisha,
    role: "Operations",
    link: "https://www.linkedin.com/in/anisha-nawar/",
  },
  {
    name: "Ashna Pradhan",
    image: Ashna,
    role: "Operations",
    link: "https://www.linkedin.com/in/ashna-pradhan/",
  },
  {
    name: "John Zhou",
    image: John,
    role: "Sponsorship",
    link: "https://www.linkedin.com/in/john-shiqi-zhou/",
  },
  {
    name: "Saanvi Dalal",
    image: Saanvi,
    role: "Sponsorship",
    link: "https://www.linkedin.com/in/saanvi-dalal/",
  },
  {
    name: "Jasmine Trinh",
    image: Jasmine,
    role: "Public Relations",
    link: "https://www.linkedin.com/in/jasminetrinh/",
  },
  {
    name: "Suki Huang",
    image: Suki,
    role: "Public Relations",
    link: "https://www.linkedin.com/in/suki-huang-b84929391/",
  },
  {
    name: "Kaegan Chee",
    image: Kaegan,
    role: "Marketing",
    link: "https://www.linkedin.com/in/kaegan-chee/",
  },
  {
    name: "Kaylie Zhao",
    image: Kaylie,
    role: "Marketing",
    link: "https://www.linkedin.com/in/kaylie-zhao/",
  },
  {
    name: "Charleen Chen",
    image: Charleen,
    role: "UI/UX",
    link: "https://www.linkedin.com/in/charleenschen/",
  },
  {
    name: "Sweden Agunenye",
    image: Sweden,
    role: "Software Engineering",
    link: "https://www.linkedin.com/in/swedenagu/",
  },
  {
    name: "Jane Lee",
    image: Jane,
    role: "Software Engineering",
    link: "https://www.linkedin.com/in/janeyunlee/",
  },
  {
    name: "Jimmy Munoz",
    image: Jimmy,
    role: "Software Engineering",
    link: "https://www.linkedin.com/in/jimmy-munoz-8a7a47290/",
  },
  {
    name: "Adi Chander",
    image: Adi,
    role: "Software Engineering",
    link: "https://www.linkedin.com/in/adi-chander/",
  },
  {
    name: "Hannah Hwang",
    image: Hannah,
    role: "Software Engineering",
    link: "https://www.linkedin.com/in/hhannahwang/",
  },
  {
    name: "Kevin Loritsch",
    image: Kevin,
    role: "Software Engineering",
    link: "https://www.linkedin.com/in/kevin-loritsch/",
  },
  {
    name: "Charlene Wan",
    image: Charlene,
    role: "Intern",
    link: "https://www.linkedin.com/in/charlene-wan-683bb126b/",
  },
];

export default Teams;
