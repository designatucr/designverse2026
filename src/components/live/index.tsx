import Landing from "./landing";
import About from "./about";
// import Schedule from "./schedule";
// import Tracks from "./tracks";
// import Sponsors from "./sponsors";
// import Team from "./team";
// import Committees from "./committees";
// import Judges from "./judges";
// import FAQ from "./faq";
import Footer from "./footer";
import Sponsors from "./sponsors";
// import StripeWall from "@/components/live/stripewall";

const Live = () => {
  return (
    <>
      <Landing />
      <Sponsors />
      <About />
      {/* 
      <StripeWall /> */}
      {/* <Tracks />
      <Schedule />
      <Team />
      <Committees />
      <Judges /> 
      <FAQ /> */}
      <Footer />
    </>
  );
};

export default Live;
