import React from "react";
import "../Banner/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 banner-heading">
            <h1>Get better together</h1>
            <p>
              Whatever it is, you’re not alone. <br /> Talk to someone or seek
              professional help.
            </p>
            <button className="find-btn">Find someone</button>
            <button className="volunteer-btn">Volunteer as a listener</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner;
