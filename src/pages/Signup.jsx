import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import imag from "./signup.png";
const Signup = () => {
  return (
    <div>
      <div className="colours">
        <div className="bottomme">
          <div className="left-sidee">
            <span>Sign Up</span>
          </div>
          <div className="rightt-sidee">
            <i class="fas fa-home"></i>
            <Link to="/">Home</Link>
          </div>
          <div className="my-cartt">
            <i class="fas fa-chevron-right"></i>
            <span> Sign Up</span>
          </div>
        </div>
        <div className="signup_Sec">
          <div className="contain_w">
            <div className="left_containn">
              <img src={imag} alt="" />
            </div>
            <div className="right_contain">
              <div className="signup_pg">
                <h4>Welcome To Kulies</h4>
                <div className="create_new">
                  <label>Create New Account</label>
                </div>
                <div className="name">
                  <input type="text" placeholder="First Name"></input>
                  <input type="text" placeholder="Last Name"></input>
                </div>

                <div className="phone">
                  <input type="Email" placeholder="Email"></input>
                  <input type="tel" placeholder="Phone"></input>
                </div>
                <div className="pass">
                  <input type="password" placeholder="Password"></input>
                </div>
                <div className="terms">
                  <p>
                    {" "}
                    <input type="checkbox" /> I agree with &nbsp;
                    <span style={{ color: "rgb(19, 197, 197)" }}>Terms</span>
                    &nbsp; and &nbsp;
                    <span style={{ color: "rgb(19, 197, 197)" }}>Privacy</span>
                  </p>
                </div>
                <div className="signbtn">
                  <button type="button" >Sign Up</button>
                </div>
                <hr/>
                <div className="account">
                  <span> Already Have An Account </span>
                </div>
                <div className="login_link">
                  <Link to="/login">Log In </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
