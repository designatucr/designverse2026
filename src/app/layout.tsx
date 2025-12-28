/* eslint-disable new-cap */
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className}bg-landing-beige-100 min-w-fit md:overflow-visible`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
