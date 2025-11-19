type config = {
  name: string;
  short_name: string;
  email: string;
  description: string;
  length: number;
  date: Date;
  end: Date;
  packet: string;
  devpost: string;
  domain: string;
  instagram: string;
  linkedin: string;
  discord: string;
  heart: string;
};

const data: config = {
  name: "DesignVerse 2026",
  short_name: "DesignVerse",
  email: "designverseucr@gmail.com",
  description: "",
  length: 24,
  date: new Date("2026-05-09T08:00:00"),
  end: new Date("2026-05-10T16:00:00"),
  packet: "",
  devpost: "https://devpost.com/",
  domain: "https://www.designverseucr.org/",
  instagram: "https://www.instagram.com/designverseucr/",
  linkedin:
    "https://www.linkedin.com/company/designverseucr/posts/?feedView=all",
  discord: "https://www.discord.com",
  heart: "🤎",
};

export default data;
