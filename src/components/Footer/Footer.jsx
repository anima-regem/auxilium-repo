import React from "react";
import "../Footer/Footer.css";
import footerLogo from '../../images/footer-icon.png'

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img src={footerLogo} alt="logo" />
            <div>
                <button>Back auxilium</button>
            </div>
            
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <h3><a href="/#about"><b>About Us</b></a></h3>
            <p><a href="/#about">About auxilium</a></p>
            <p><a href="/chatbot">Q&A</a></p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <h3><a href="/"><b>Terms</b></a></h3>
            <p><a href="/">Privacy policy</a></p>
            <p><a href="/">Terms of Service</a></p>
            <p><a href="/">Safety at auxilium</a></p>
            <p><a href="/">Teen safety</a></p>
            <p><a href="/">Support and feedback</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
