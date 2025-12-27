/* eslint-disable new-cap */
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} flex h-full flex-col overflow-x-hidden bg-landing-beige-100 lg:flex-row`}
      >
        <div className="flex h-full min-w-fit sm:w-full">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
