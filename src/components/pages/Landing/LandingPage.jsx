import React from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Footer from "../Footer/Footer";

function LandingPage() {
  return (
    <div>
      <div className="w-full flex justify-center lg:px-10 lg:py-5 flex-col gap-7">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
