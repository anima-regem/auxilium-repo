import React from "react";
import "../NavBar/NavBar.css";
import logo from '../../images/logo.png'

function NavBar() {
  return (
    <div className="wrapper">
      <div className="logo">
          <a href="/">
          <img src={logo} alt="" />
          </a>

      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/signup">Connect</a>
          </li>
          <li>
            <a href="/chatbot">Session</a>
          </li>
          <li>
            <a href="/">Volunteer</a>
          </li>
          <li>
            <a className="login" href="/login">Login/Signup</a>
          </li>
        </ul>

        
      </div>
      <div className="menu">
      <a className="menu-icon" href="/">
          <i class="bi bi-list"></i>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
