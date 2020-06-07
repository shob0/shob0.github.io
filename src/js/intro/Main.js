import React from "react";
import Experience from "./Experience";
import Hero from "../HeroImage/hero";
import { impacts } from "../../../resources/Impact";

function Main() {
  const [experienceImpact, volunteerImpact, wishToLearn] = impacts;
  return (
    <div className="textColor route-div">
      <div id="intro" className="intro-header">
        <Hero />
        <div>
          <hr className="divider" />
        </div>
        <strong>who am I</strong>
        <div id="intro-content">
          <div style={{ marginLeft: "70px" }}>
            <hr className="divider" style={{ transform: "scale(0.6)" }} />
            <p className="">
              I'm Shobhit; front end developer, certified nutrition expert,
              toastmaster, yogi, kick boxer, reader
            </p>
          </div>
        </div>
        <h3 style={{ textDecoration: "underline" }}>a little about me</h3>
        <Experience title="what I already know" impact={experienceImpact} />
        <Experience title="other stuff I am good at" impact={volunteerImpact} />
        <Experience title="what I want to learn" impact={wishToLearn} />
      </div>
    </div>
  );
}

export default Main;
