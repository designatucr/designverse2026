/* eslint-disable new-cap */
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: "DesignVerse 2026",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden bg-landing-beige-100`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
