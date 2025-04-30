import React from 'react';
import './page.css';
import Logo from './logo.png'; 
import Google from './google.png'; 
import Apple from './Apple.png'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-sm">
        <div className="footer_wrp">
          <div className="footer_widget">
            <img src={Logo} alt="Company Logo" />
            <br />
            <span>69 Selous Ave, Harare, Zimbabwe</span>
            <br />
            <span>Support: (+263) 030000052</span>
            <br /><br /><br />
            <span>info@demo.com</span>
            <br />
          </div>

          <div className="footer_widget">
            <h5>Help Center</h5>
            <span>FAQ</span>
            <br />
            <span>About E-Commerce</span>
            <br />
            <span>Support Ticket</span>
            <br />
            <span>Contact Us</span>
            <br />
          </div>

          <div className="footer_widget">
            <h5>Quick Links</h5>
            <span>Become A Supplier</span>
            <br />
            <span>Track Order</span>
            <br />
            <span>Services & Membership</span>
            <br />
            <span>Help & Community</span>
            <br />
          </div>

          <div className="footer_widget">
            <h5>Buy On E-Commerce</h5>
            <span>Terms & Condition</span>
            <br />
            <span>Privacy Rules</span>
            <br />
          </div>

          <div className="footer_widget">
            <h5>Download App</h5>
            <div className="footer_img">
              <img src={Google} alt="Download from Google Play" />
              <img src={Apple} alt="Download from App Store" />
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
