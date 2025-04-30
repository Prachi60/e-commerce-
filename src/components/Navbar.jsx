import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "./logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Clothes from "./clothes.png";
import Cycle from "./cycle.webp";
import Beauty from "./Beauty.png";
import Electronics from "./Electronics.png";
import FMCG from "./FMCG.png";
import Laptop from "./Laptop.jpg";
import Plastic from "./Plastic-bottle.webp";
import Wrist from "./Wrist Watch.jpg";
import Test from "./test.webp";

const Navbar = () => {
  const [myData, setMyData] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmI1Y2UyYTI5MGU3MmQxZTYzYzZmZWMiLCJ1c2VyTmFtZSI6IlRpbSBEYXZpZCAiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE3Mzk3NzM4ODl9.T0tODzQs9IO6N2RKTPD1pNW6Zfv_igFnjRl98px-pv8";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://139.59.46.251:3300/product/list-user",
          { page: 1, limit: 40 },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response?.data.status) {
          console.log("Response:", response?.data?.data?.list);
          setMyData(response?.data?.data?.list);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const wishcount = myData.filter((item) => item.isWishListed === true).length;
  console.log(wishcount);

  const cartCount = myData.filter((item) => item.isCart === true).length;
  console.log("cart value", cartCount);

  return (
    <div>
      <div className="navbar">
        <div className="image">
          <img src={Logo} alt="" />
        </div>
        <div className="categories">
          <div className="productdetails">
            <div className="categories_details">
              <button type="button">
                <i class="fas fa-signal-alt fa-rotate-90"></i> &nbsp; All
                Categories
              </button>
            </div>
            <div className="categorydropdown">
              <div className="categorydropdownlist">
                <img src={Test} alt="" />
                <span>Test Category</span>
              </div>
              <div className="categorydropdownlist">
                <img src={Electronics} alt="" />
                <span> Electronics</span>
              </div>

              <div className="categorydropdowmlist">
                <img src={Beauty} alt="" />
                <span> Beauty&Care</span>
              </div>

              <div className="categorydropdowmlist">
                <img src={FMCG} alt="" />
                <span>FMCG</span>
              </div>
              <div className="categorydropdownlist">
                <img src={Laptop} alt="" />
                <span>Laptops</span>
              </div>
              <div className="categorydropdownlist">
                <img src={Wrist} alt="" />
                <span>Wrist Watch</span>
              </div>
              <div className="categorydropdownlist">
                <img src={Plastic} alt="" />
                <span>Plastic Water Bottle</span>
              </div>
              <div className="categorydropdownlist">
                <img src={Cycle} alt="" />
                <span>Cycle</span>
              </div>
              <div className="categorydropdownlist">
                <img src={Clothes} alt="" />
                <span>Clothes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="searchbar">
          <input
            className="search"
            placeholder="Search For Products,Brands and More"
          ></input>
          <i class="fas fa-search"></i>
        </div>
        <div className="right-side">
          <div className="logindetails">
            <div className="loginbutton">
              <i class="fas fa-user-circle"></i>
              <span className="text">Login</span>
              <i class="far fa-angle-down"></i>
            </div>
            <div className="logindropdown">
              <Link to="/signup">
                <span> New member ? Sign Up</span>
              </Link>
              <hr />

              <Link to="/login">
                <span>
                  {" "}
                  <i class="fal fa-sign-in-alt"></i> &nbsp; Log In
                </span>
              </Link>
            </div>
          </div>
          <span>|</span>
          <i class="fas fa-heart"></i>
          <span className="number">{wishcount}</span>
          <Link to="/wishlist">
            <span className="text">Wishlist</span>{" "}
          </Link>
          <span>|</span>
          <i class="fas fa-shopping-cart"></i>
          <span className="number">{cartCount}</span>
          <Link to="/cart">
            <span className="text">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
