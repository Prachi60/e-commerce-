import React, { useState, useEffect } from "react";
import "./page.css";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./banner-1.jpg";
import Banner2 from "./banner-2.jpg";
import Logo from "./logo.png";
import Google from "./google.png";
import Apple from "./Apple.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Page = () => {
  const [myData, setMyData] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmI1Y2UyYTI5MGU3MmQxZTYzYzZmZWMiLCJ1c2VyTmFtZSI6IlRpbSBEYXZpZCAiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE3Mzk3NzM4ODl9.T0tODzQs9IO6N2RKTPD1pNW6Zfv_igFnjRl98px-pv8";

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
  useEffect(() => {
    fetchData();
  }, []);

  const wishcount = myData.filter((item) => item.wishlist === true).length;
  console.log(wishcount);

  const handleWishlistToggle = async (productId) => {
    console.log("id", productId);
    try {
      
      const currentItem = myData.find((item) => item._id === productId);
      const isWishlisted = currentItem?.wishlist;

      const response = await axios.post(
        "http://139.59.46.251:3300/wishlist/add-to-wishlist",
        { productId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data?.status) {
        const updatedData = myData.map((item) =>
          item._id === productId ? { ...item, wishlist: !item.wishlist } : item
        );

        setMyData(updatedData);

        
        if (isWishlisted) {
          toast.info(" Removed from Wishlist");
        } else {
          toast.success(" Added to Wishlist");
        }

        console.log("Wishlist API response:", response.data);
      }
    } catch (error) {
      console.error("error in wishlist", error);
      toast.error("Something went wrong");
    }
  };

  const addToCart = async (productId, quantity) => {
    const count =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmI1Y2UyYTI5MGU3MmQxZTYzYzZmZWMiLCJ1c2VyTmFtZSI6IlRpbSBEYXZpZCAiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE3NDQyNjMxNDJ9.GYcmDZQ7yafb7bZ-8HmUteoL8Mz1YfdWigRxC4tD3HA";

    try {
      const response = await axios.post(
        "http://139.59.46.251:3300/cart/add-to-cart",
        {
          productId,
          quantity: quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${count}`,
          },
        }
      );

      if (response.data.status) {
        toast.success("Added to Cart!");
        console.log("Added to cart:", response.data);
      } else {
        console.log("data fetching error");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="page">
      {/* Banner Carousel */}
      <div className="banner">
        <Carousel>
          <Carousel.Item>
            <img src={Banner} alt="Banner 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner2} alt="Banner 2" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Product Slider Section */}
      <div className="slider_wrp w-100">
        <h2>Special Products For You</h2>
        <p>Special Products For You</p>

        <Slider {...settings}>
          {myData.slice(0, 20).map((item) => (
            <div className="cards" key={item.id}>
              <i className={ item.wishlist ? "fas fa-heart liked" : "far fa-heart" }
                style={{color: item.wishlist ? "red" : "red",}}
                onClick={() => handleWishlistToggle(item._id)}></i>

              <img src={item.images[0]} alt={item.name} />
              <p>{item.name}</p>
              <span>Minimum Qty: {item.minimumQuantity}</span>
              <br />
              <span> Remaining Qty: {item.remainingQuantity}</span>

              <div className="button_icon">
                <button type="button" onClick={() => addToCart(item._id, 16)}>
                  <i class="fas fa-bolt"></i> Add To Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="second-container">
        <h2>Special Products For You</h2>
        <p>Special Products for you</p>

        <Slider {...settings}>
          {myData.slice(21, 39).map((item) => (
            <div className="cards" key={item.id}>
              <i className={ item.wishlist ? "fas fa-heart liked" : "far fa-heart" }
               style={{color: item.wishlist ? "red" : "red",}}
               onClick={() => handleWishlistToggle(item._id)}></i>

              
              <img src={item.images[0]} alt={item.name} />
              <p>{item.name}</p>
              <span>Minimum Qty: {item.minimumQuantity}</span>
              <br />
              <span> Remaining Qty: {item.remainingQuantity}</span>
              <button type="button" onClick={() => addToCart(item._id, 2)}>
                <i class="fas fa-bolt"></i> Add To Cart
              </button>
            </div>
          ))}
        </Slider>
      </div>

      <div className="newsletter-wrapper">
        <div className="newsletter">
          <h2>Join Our Newsletter</h2>

          <div className="search_box_wrp">
            <div className="input_field">
              <i className="fas fa-envelope"></i>
              <input placeholder="Enter Your Email" />
            </div>
            <button type="button">
              Subscribe &nbsp; <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="footer">
        <div className="container-sm">
          <div className="footer_wrp">
            <div className="footer_widget">
              <img src={Logo} alt="" />
              <br />
              <span>69 Selous Ave,Harare,Zimbambae</span>
              <br />
              <span>Support(+263)030000052</span>
              <br />
              <br />
              <br />
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
                <img src={Google} alt="" />
                <img src={Apple} alt="" />
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
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-pinterest-p"></i>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <ToastContainer />
    </div>
  );
};

export default Page;
