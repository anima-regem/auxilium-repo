import React from 'react'
import '../Login/Login.css'
import footerLogo from '../../images/footer-icon.png'
import signUpImg from '../../images/signup_img.png'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
      <div className="login-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={footerLogo} alt="" />
              <img className="signup-img" src={signUpImg} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 login-section">
              <h1>Login</h1>
              <p>
              Don’t have an account? {" "}
                <span >
                  <a onClick={()=>{
                  navigate('/signup')
                }} href="">Sign Up</a>
                </span>
              </p>
              
              
              <form className='login-form' action="">
    
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
                  <button className="submit-btn">Login</button>
                </div>
              </form>
              <div className="line">
                <div className="first-line"></div>
                <p>or</p>
                <div className="second-line"></div>
              </div>
              <div className="login-btns">
                <button className="google-btn">
                  <i class="bi bi-google"></i>Sign Up with Google
                </button>
                <button className="apple-btn">
                  <i class="bi bi-apple"></i> Sign Up with Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login