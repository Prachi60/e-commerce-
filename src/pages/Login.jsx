import React from "react";
import { Link } from "react-router-dom";
import Photo from "./image.png";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="color">
        <div className="bottom">
          <div className="left-side">
            <span>Log In</span>
          </div>
          <div className="right">
            <i class="fas fa-home"></i>
            <Link to="/">Home</Link>
          </div>
          <div className="mycart">
            <i class="fas fa-chevron-right"></i>
            <span> Log In</span>
          </div>
        </div>
 
      <div className="login_sec">
        <div className="container-weidge">
          <div className="left-contain">
            <img src={Photo} alt="" />
          </div>
          <div className="right-conatin">
            <div className="login_page">
              <h4>Welcome To Kulies</h4>
              <span>Log In  Your Account</span>
              <input type="email" placeholder="Email Address"/>
              <input type="password" placeholder="Password"/>
              <input type="checkbox"/>
              <label >Remember Me</label>
              <label>Forgot Password?</label>
              

            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
