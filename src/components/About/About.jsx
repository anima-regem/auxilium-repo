import React from "react";
import "../About/About.css";

function About() {
  return (
    <div className="about">
      <div style={{ backgroundColour: "#FFDDE3" }} className="container">
        <div className="row">
          <div id="about" className="col-lg-9 col-md-12 col-12 about-section-1">
            <h1>About auxilium</h1>
            <p>
              We live in a world where you can be surrounded by people, but
              still feel lonely, with nobody to turn to when things get rough.{" "}
              <br />
              <br />
              But being heard is an important part of being human. We know that
              not everyone had someone to talk to.
            </p>
          </div>
          <div className="col-lg-9 col-md-12 col-12 about-section-2">
            <h3>That’s what auxilium is for</h3>
            <p>
              We expect to reduce the number of untreated mental health problems
              among teenagers. We intend to develop a feeling that someone cares
              about them and they’re not alone and they don’t have to be. We’ll
              remind them that they’re just children and they shouldn’t have
              gone through that. We’ll be able to help them find a solution to
              their problem. Whatever it may be.
            </p>
          </div>
        </div>
      </div>
      <section className="about-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-12 about-section-3">
              <h1>Anonymous virtual chat with caring listeners</h1>
              <p>
                Need to talk to someone? Our trained volunteer listeners are
                available 24/7 to give emotional support over online chat.
              </p>
            </div>
            <div className="col-lg-9 col-md-12 col-12 about-section-4">
              <h3>It's anonymous and completely free.</h3>
              <p>
                When you need someone to talk to, we're here to listen and help
                you feel better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
