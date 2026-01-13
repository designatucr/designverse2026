import Landing from "./landing";
import About from "./about";
// import Schedule from "./schedule";
// import Tracks from "./tracks";
import Resources from "./resources";
import Sponsors from "./sponsors";
// import Team from "./team";
// import Committees from "./committees";
// import Judges from "./judges";
import FAQ from "./faq";
import Footer from "./footer";
// import StripeWall from "@/components/live/stripewall";

const Live = () => {
  return (
    <>
      <Landing />
      <About />
      <Sponsors />
      <Resources />
      {/* 
      <StripeWall /> */}
      {/* <Tracks />
      <Schedule />
      <Team />
      <Committees />
      <Judges /> */}
      <FAQ />
      <Footer />
    </>
  );
};

export default Live;
