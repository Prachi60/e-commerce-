import React from "react";
import About from "./about.png";
import vegetable from "./vegetable.png";
import vision from "./Vision.png";
import mission from "./Mission.png";
import Goal from "./Goal.png";
import "./aboutus.css";

const aboutus = () => {
  return (
    <div className="about_page">
      <div className="about_pg">
        <img src={About} alt="" />
      </div>
      <div className="vegetable_pg">
        <div className="vegetable_image">
          <img src={vegetable} alt="" />
        </div>
        <div className="vegetable_content">
          <div className="review_title">
            <h4>About Us</h4>
            <h2>About Kulies.com</h2>
          </div>
          <div className="delivery_list">
            <p>
              Kulies.com is a B2B2C eMarketplace that serves to facilitate easy
              trade in Africa and the world at large. We are committed to
              provide trade infrastructures within Kulies that helps to easy on
              how trade is done in Africa. Our solutions disrupt Brick 'n'
              Mortar supply-chains by creating a decentralized e-commerce
              platform.
            </p>
          </div>
        </div>
      </div>
      <div className="client_section">
        <div className="client_intro">
          <span>What We Do</span>
          <h2>We Are Trusted By Clients</h2>
        </div>
        <div className="client_card_box">
          <div className="client_card">
            <img src={mission} alt="" />
            <span>Our Mission</span>
            <p>
              Linking African Suppliers and Global Buyers, whilst empowering the
              African Informal Retail Market (MSME’s) to become formal
            </p>
          </div>
          <div className="client_card">
            <img src={vision} alt="" />
            <span>Our Vision</span>
            <p>
              To become the largest and most dependable trade infrastructure in
              Africa created by Africans.
            </p>
          </div>
          <div className="client_card">
            <img src={Goal} alt="" />
            <span>Our Goal</span>
            <p>
              Creating value for suppliers and empowering last mile distributors
              by smartening the supply chain with digital tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
