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
  date: new Date("2026-05-02T08:00:00"),
  end: new Date("2026-05-03T16:00:00"),
  packet: "",
  devpost:
    "https://designverse2026.devpost.com/?preview_token=CpXaJBoUj3c33diUTIpPHdCmjk2S5R%2F5tiRNxFNCuEc%3D",
  domain: "https://www.designverseucr.org/",
  instagram: "https://www.instagram.com/designverseucr/",
  linkedin: "https://www.linkedin.com/company/designverseucr/",
  discord: "https://discord.com/invite/MmSvY3tu",
  heart: "🤎",
};

export default data;
