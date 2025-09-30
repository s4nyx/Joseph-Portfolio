"use client";
import { ReactLenis } from "lenis/react";
import SectionHero from "./SectionHero";
import SectionFooter from "./SectionFooter";
import SectionShowreel from "./SectionShowreel";
import SectionTestimonials from "./SectionTestimonials";
import SectionTechstack from "./SectionTechstack";
import { SectionFlower } from "./SectionFlower";
import SectionServices from "./SectionServices";
import SectionProjects from "./SectionProjects";
import SectionProjectsMobile from "./SectionProjectsMobile";
import SectionKPI from "./SectionKPI";
import SectionSubscribe from "./SectionSubscribe";
import "./main.css";
import Loading from "./Loading";

const Main = () => {
  return (
    <ReactLenis root>
      <Loading />
      <SectionHero />
      <div className="normal-padding" />
      <SectionShowreel />
      <div className="border-padding">
        <div className="section-border"></div>
      </div>
      {/* <SectionServices /> */}
      <div className="normal-padding" />
      {/* <SectionProjects /> */}
      {/* <SectionProjectsMobile /> */}
      {/* <SectionTechstack /> */}
      <SectionTestimonials />
      <div className="normal-padding" />
      {/* <SectionKPI /> */}
      <SectionFlower />
      <div className="normal-padding" />
      {/* <SectionSubscribe /> */}
      <SectionFooter />
    </ReactLenis>
  );
};

export default Main;
