import Landing from "./landing";
import About from "./about";
// import Schedule from "./schedule";
import Tracks from "./tracks";
import Resources from "./resources";
import Sponsors from "./sponsors";
import Team from "./team";
// import Committees from "./committees";
import Judges from "./judges";
import FAQ from "./faq";
import Footer from "./footer";
import Keynote from "./keynote";
import Panelists from "./panelists";
// import StripeWall from "@/components/live/stripewall";

const Live = () => {
  return (
    <>
      <Landing />
      <About />
      {/* <Schedule /> */}
      <Keynote />
      <Judges />
      <Panelists />
      <Tracks />
      <Sponsors />
      <Resources />
      {/* 
      <StripeWall /> */}

      <Team />
      {/* <Committees /> */}
      <FAQ />
      <Footer />
    </>
  );
};

export default Live;
