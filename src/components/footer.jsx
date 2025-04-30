import React from "react";
import "./page.css";
import { Link } from "react-router-dom";
import Kulie from "./Kulie.png";

import Google from "./google.png";
import Apple from "./Apple.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-sm">
        <div className="footer_wrp">
          <div className="footer_widget">
            <div className="company_image">
              <img src={Kulie} alt="Company Logo" />
            </div>

            <br />
            <span>69 Selous Ave, Harare, Zimbabwe</span>
            <br />
            <span>Support: (+263) 030000052</span>
            <br />
            <br />
            <br />
            <span>info@demo.com</span>
            <br />
          </div>

          <div className="footer_widget">
            <h5>Help Center</h5>
            <div className="foot_contain">
              <ul>
              <li>FAQ</li>

             <Link to= "/aboutus">
             
              <li>About Kulies.com</li></Link>

              <li>Support Ticket</li>

              <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="footer_widget">
            <h5>Quick Links</h5>
            <div className="foot_contain">
              <ul>
              <li>Become A Supplier</li>

              <li>Track Order</li>

              <li>Services & Membership</li>

              <li>Help & Community</li>
              </ul>
            </div>
          </div>

          <div className="footer_widget">
            <h5>Buy On E-Commerce</h5>
            <div className="foot_contain">
              <ul>
              <li>Terms & Condition</li>

              <li>Privacy Rules</li>
              </ul>
            </div>
          </div>

          <div className="footer_widget">
            <h5>Download App</h5>
            <div className="footer_img">
              <a href="https://play.google.com/store/apps" target="_blank">
              <img src={Google} alt="Download from Google Play" /></a>
              <a href="https://www.apple.com/in/app-store/" target="_blank">
              <img src={Apple} alt="Download from App Store" /></a>
            </div>
          </div>
        </div>

        <div className="foot">
          <div className="footer_sen">
            <p>@2021 E-commerce All Rights Reserved</p>
          </div>
          <div className="footer_Sen1">
            <p>Stay Connected:</p>
            <div className="footer-icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-pinterest-p"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
