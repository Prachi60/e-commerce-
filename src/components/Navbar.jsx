import React, { useState, useEffect, useMemo } from "react";
import "./Navbar.css";
import Kulie from "./Kulie.png";

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
import navicon from "./navicon.png";
import { postData } from "../service/service";
import { useSelector,useDispatch } from "react-redux";
import { setCart } from "../redux/cartSlice";

const Navbar = () => {
  const dispatch=useDispatch();
  const cartItem =useSelector(state=> state.cart.cart);
  const [myData, setMyData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
      setIsLogout(false);
    } else {
      setIsLogin(false);
    }
  }, []);
  console.log(isLogin, "----------login");
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");

      if (token) {
        setIsLogin(true);
        setIsLogout(false);
      } else {
        setIsLogin(false);
      }
    };

    checkLogin();
  }, [isLogout]);

  // useEffect(() => {
  //   if (isLogin && sessionStorage.getItem("hasReloaded") !== "true") {
  //     sessionStorage.setItem("hasReloaded", "true");
  //     window.location.reload();
  //   }
  // }, [isLogin]);

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmI1Y2UyYTI5MGU3MmQxZTYzYzZmZWMiLCJ1c2VyTmFtZSI6IlRpbSBEYXZpZCAiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE3Mzk3NzM4ODl9.T0tODzQs9IO6N2RKTPD1pNW6Zfv_igFnjRl98px-pv8";

  // useEffect(() => {
  //    const fetchData = async () => {
  //      try {
  //        const response = await axios.post(
  //          "http://139.59.46.251:3300/product/list-user",
  //          { page: 1, limit: 40 },
  //          {
  //            headers: {
  //              "Content-Type": "application/json",
  //              Authorization: `Bearer ${token}`,
  //            },
  //          }
  //        );
  //        if (response?.data.status) {
  //          console.log("Response:", response?.data?.data?.list);
  //          setMyData(response?.data?.data?.list);
  //        }
  //      } catch (error) {
  //        console.error("Error fetching data:", error);
  //      }
  //    };

  //    fetchData();
  //  }, []);
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      dispatch(setCart(JSON.parse(savedCart)));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await postData("product/list-user", {
          page: 1,
          limit: 40,
        });
        if (response?.status) {
          console.log("fetched data :", response?.data?.list);
          const productList=response?.data?.list;
          setMyData(productList);
          const cartData = productList.filter((item) => item.isCart === true);
          dispatch(setCart(cartData)); 
          localStorage.setItem("cartItems", JSON.stringify(cartData));
  
        }

      } catch (error) {
        console.error("fetching error", error);
      }
    };
    fetchData();
  }, []);
  
  const wishcount = myData.filter((item) => item.isWishListed === true);
  console.log("wishcount",wishcount.length)
  

  // const cartCount =  myData?.filter((item) => item.isCart === true);
  // console.log("cartCount",cartCount.length)


  return (
    <div>
      <div className="navbar">
        <div className="image">
          <img src={Kulie} alt="" />
        </div>
        <div className="categories">
          <div className="productdetails">
            <div className="categories_details">
              <button type="button">
                <img src={navicon} alt="" /> &nbsp; All Categories
              </button>
            </div>
            <div className="categorydropdown">
              <div className="onhover_category_drop_wrp">
                <div className="categorydropdownlist">
                  <img src={Test} alt="" />
                  <span>Test Category</span>
                  <i className="fas fa-chevron-right"></i>
                </div>
                <div className="onhover_categ_drop">
                  <h5>Test category</h5>
                  <ul>
                    <li>Test Sub Category</li>
                  </ul>
                </div>
              </div>

              <div className="onhover_category_drop_wrp">
                <div className="categorydropdownlist">
                  <img src={Electronics} alt="" />
                  <span> Electronics</span>
                  <i className="fas fa-chevron-right"></i>
                </div>
                <div className="onhover_categ_drop">
                  <h5>Electronics</h5>
                  <ul>
                    <li>cycle</li>
                    <li>Laptops & computer</li>
                    <li>Smartphone</li>
                    <li>Tablet</li>
                    <li>cycle</li>
                    <li>Camera</li>
                  </ul>
                </div>
              </div>
              <div className="onhover_category_drop_wrp">
                <div className="categorydropdownlist">
                  <img src={Beauty} alt="" />
                  <span> Beauty&Care</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div className="onhover_categ_drop">
                  <h5>Beauty</h5>
                  <ul>
                    <li>Beauty&care</li>
                  </ul>
                </div>
              </div>
              <div className="onhover_category_drop_wrp">
                <div className="categorydropdownlist">
                  <img src={FMCG} alt="" />
                  <span>FMCG</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div className="onhover_categ_drop">
                  <h5> FMCG</h5>
                  <ul>
                    <li>Assorted Snack Pack</li>
                    <li>Rice</li>
                  </ul>
                </div>
              </div>
              <div className="onhover_category_drop_wrp">
                <div className="categorydropdownlist">
                  <img src={Laptop} alt="" />
                  <span>Laptops</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div className="onhover_categ_drop">
                  <h5>Laptop</h5>
                  <ul>
                    <li>Buisness Laptop</li>
                    <li>Student Laptop</li>
                    <li> Gaming Laptop</li>
                    <li>2-In-1 Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="onhover_category_drop_wrp">
                <div className="categorydropdownlist">
                  <img src={Wrist} alt="" />
                  <span>Wrist Watch</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div className="onhover_categ_drop">
                  <h5>Wrist Watch</h5>
                  <ul>
                    <li>Smart Watch</li>
                    <li>Luxury Watch</li>
                    <li>Analog Watch</li>
                    <li>Digital Waatch</li>
                  </ul>
                </div>
              </div>
              <div className="onhover_category_drop_wrp">
                <div className="categorydropdownlist">
                  <img src={Plastic} alt="" />
                  <span>Plastic Water Bottle</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div className="onhover_categ_drop">
                  <h5>Plastic water Bottle</h5>
                  <ul>
                    <li>Sports Bottle</li>
                    <li>Kids Bottle</li>
                    <li>Insulated Bottle</li>
                  </ul>
                </div>
              </div>
              <div className="onhover_category_drop_wrp">
                <div className="categorydropdownlist">
                  <img src={Cycle} alt="" />
                  <span>Cycle</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div className="onhover_categ_drop">
                  <h5>Cycle</h5>
                  <ul>
                    <li>Mountain Cycle</li>
                    <li>Road Cycle</li>
                    <li>Acesories</li>
                    <li>Kids Cycle</li>
                  </ul>
                </div>
              </div>
              <div className="onhover_category_drop_wrp">
                <div className="categorydropdownlist">
                  <img src={Clothes} alt="" />
                  <span>Clothes</span>
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div className="onhover_categ_drop">
                  <h5>Clothes</h5>
                  <ul>
                    <li>shoes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="searchbar">
          <input
            className="search"
            placeholder="Search For Products, Brands and More"
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
              {isLogin ? (
                <div className="logdrop">
                  <Link to="/profile"> 
                  <span>
                    <i class="fas fa-user-circle"></i> Profile
                  </span>
                  </Link>
                  <hr />
                  <Link to="/wishlist">
                
                  <span>
                  <i class="fas fa-heart"></i> WishList
                  </span>
                  </Link>
                  <hr />
                  <Link to="/profile" state={{tab:"my-shop"}}>
                 
                  <span>
                    <i class="fas fa-store"></i> Shop
                  </span>
                  </Link>
                  <hr />
                  <Link to="/profile" state={{tab:"Address"}}>
              
                  <span>
                    <i class="fas fa-store"></i> Address
                  </span>
                  </Link>
                  <hr />
                  <Link to="/profile" state={{tab:"my-order"}}>
                  
                  <span>
                    <i class="fas fa-luggage-cart"></i> Orders
                  </span>
                  </Link>
                  <hr />
                  <Link to="/profile" state={{tab:"Inquiry"}}>
                  
                  <span>
                    <i class="fas fa-info-circle"></i> Inquiry
                  </span>
                  </Link>
                  <hr />
                  <Link to="/">
                    <span
                      onClick={() => {
                        localStorage.removeItem("token");
                        setIsLogout(true);
                        setIsLogin(true);
                      }}
                    >
                      {" "}
                      <i class="fas fa-sign-out-alt"></i> Logout{" "}
                    </span>
                  </Link>
                  <hr />
                </div>
              ) : (
                <>
                  <Link to="/signup">
                    <span> New customer? </span>
                    <p>Sign Up</p>
                  </Link>
                  <hr />

                  <Link to="/login">
                    <span>
                    <i class="fas fa-sign-out-alt"></i> Log In
                    </span>
                    <hr />
                  </Link>
                </>
              )}
            </div>
          </div>
          <span>|</span>
          <i class="fas fa-heart"></i>
          <span className="number">{wishcount.length}</span>
          <Link to="/wishlist">
            <span className="text">Wishlist</span>{" "}
          </Link>
          <span>|</span>
          <i class="fas fa-shopping-cart"></i>
          <span className="number">{cartItem.length}</span>
          <Link to="/cart">
            <span className="text">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
