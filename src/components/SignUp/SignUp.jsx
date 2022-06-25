import React from "react";
import "../SignUp/SignUp.css";
import footerLogo from '../../images/footer-icon.png'
import signUpImg from '../../images/signup_img.png'
import { useNavigate } from "react-router-dom";

function SignUp() {
  const Navigate = useNavigate()
  return (
    <div>
      <div className="signup-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={footerLogo} alt="" />
              <img className="signup-img" src={signUpImg} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 signup-section">
              <h1>Sign Up</h1>
              <p>
                Already have an account?{" "}
                <span>
                  <a onClick={()=>{
                    Navigate('/login')
                  }} href="">Login</a>
                </span>
              </p>
              <div className="signup-btns">
                <button className="google-btn">
                  <i class="bi bi-google"></i>Sign Up with Google
                </button>
                <button className="apple-btn">
                  <i class="bi bi-apple"></i> Sign Up with Apple
                </button>
              </div>
              <div className="line">
                <div className="first-line"></div>
                <p>or</p>
                <div className="second-line"></div>
              </div>
              <form className="signup-form" action="">
                <div className="name">
                  <label htmlFor="">Name</label> <br />
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="email">
                  <label htmlFor="">Email Adress</label> <br />
                  <input type="email" placeholder="example@gmail.com" />
                </div>
                <div className="password">
                  <label htmlFor="">Password</label> <br />
                  <input type="password" placeholder="Enter Password" />
                </div>
                <div className="policy-section">
                  <input type="checkbox" placeholder="Enter Password" />
                  <label htmlFor="">
                    I agree to Platform{" "}
                    <span>
                      <a href="">Terms of Service</a>
                    </span>{" "}
                    and{" "}
                    <span>
                      <a href="">Privacy Policy</a>
                    </span>{" "}
                  </label>
                </div>
                <div className="btn">
                  <button className="submit-btn">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
