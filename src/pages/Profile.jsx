import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./profile.css";
import Cover from "./cover.png";
import User from "./user.png";
import leaf from "./leaf.png";
import Data from "./DataNotFound.png";

const Profile = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("profile");
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);



  return (
    <div className="main_dashboard">
      <div className="top-head">
        <div className="sub-header">
          <div className="left_side_position">
            <span>My Dashboard</span>
          </div>
          <div className="right_side_position">
            <i className="fas fa-home"></i>
            <Link to="/">Home</Link>
          </div>
          <div className="wishlist">
            <i className="fas fa-chevron-right"></i>
            <span>My Dashboard</span>
          </div>
        </div>
        <div className="profile_dash">
          <div className="profile_card">
            <div className="cover_picture">
              <img src={Cover} alt={""} />
              <div className="user_con">
                <img src={User} alt="" />
                <div className="edit_icon">
                  <i class="fas fa-pen edit_"></i>
                </div>
              </div>
            </div>
            <div className="name_of owner">
              <h5>Prachi Porwal</h5>
            </div>
            <hr />

            <div className="my_dashboard">
              <ul className="nav_user">
                <div
                  className={`nav_link ${
                    activeTab === "profile" ? "active " : ""
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  <li className="nav_item">
                    <i class="fas fa-home"></i> My Profile{" "}
                  </li>
                </div>
                <div
                  className={`nav_link ${
                    activeTab === "my-order" ? "active " : ""
                  }`}
                  onClick={() => setActiveTab("my-order")}
                >
                  <li className="nav_item">
                    <i class="fas fa-luggage-cart"></i> My Orders{" "}
                  </li>
                </div>
                <div
                  className={`nav_link ${
                    activeTab === "my-shop" ? "active " : ""
                  }`}
                  onClick={() => setActiveTab("my-shop")}
                >
                  <li className="nav_item">
                    <i class="fas fa-store"></i> My Shop
                  </li>
                </div>
                <div
                  className={`nav_link ${
                    activeTab === "Address" ? "active " : ""
                  }`}
                  onClick={() => setActiveTab("Address")}
                >
                  <li className="nav_item">
                    <i class="fas fa-map-marker-alt"></i> Address
                  </li>
                </div>

                <div
                  className={`nav_link ${
                    activeTab === "Inquiry" ? "active " : ""
                  }`}
                  onClick={() => setActiveTab("Inquiry")}
                >
                  <li className="nav_item">
                    <i class="fas fa-info-circle"></i> Inquiry{" "}
                  </li>
                </div>
                  <div

                 
                    className={`nav_link ${
                      activeTab === "Logout" ? "active " : ""
                    }`}
                    onClick={() => handleLogout()}
                  >
                    <li className="nav_item">
                      <i class="fas fa-sign-out-alt"></i> Log Out{" "}
                    </li>
                    </div>
              </ul>
            </div>
          </div>
          <div className="profile_pg">
            {activeTab === "profile" && (
              <div className="my_profile">
                <h3>My Profile</h3>
                <div className="image_profile">
                  <img src={leaf} alt="" />
                </div>

                <div className="userr_info">
                  <div className="edit_button">
                    <span>Prachi Porwal</span>

                    <button type="button">Edit</button>
                  </div>
                  <div className="user_add">
                    <i class="fas fa-map-marker-alt"></i>

                    <div className="user_mail">
                      <p>
                        {" "}
                        <i class="fas fa-envelope"></i>&nbsp;
                        prachi.porwal06@gmail.com
                      </p>
                    </div>
                  </div>
                  <hr />
                  <span>
                    Residences can be classified by and how they are connected
                    to neighbouring residences and land. Different types of
                    housing tenure can be used for the same physical type.
                  </span>
                </div>
                <h5>About Profile</h5>
                <div className="profile_categ">
                  <p>Gender:</p>
                  <p>Phone Number:</p>
                  <p>Birthday:</p>
                  <p>Postal Code:</p>
                  <p>Address:</p>
                  <p>City:</p>
                  <p>State:</p>
                  <p>Country:</p>
                </div>
              </div>
            )}
            {activeTab === "my-order" && (
              <div>
                <h3>My Order History</h3>
                <div className="image_profile">
                  <img src={leaf} alt="" />
                </div>
                <div className="nodata">
                  <img src={Data} alt="" />
                </div>
              </div>
            )}
            {activeTab === "my-shop" && (
              <div className="shop">
                <h3>My Shop</h3>
                <div className="image_profile">
                  <img src={leaf} alt="" />
                </div>
                <button>
                  <i class="fas fa-plus"></i>&nbsp; Add New Shop
                </button>

                <div className="nodata">
                  <img src={Data} alt="" />
                </div>
              </div>
            )}
            {activeTab === "Address" && (
              <div className="shop">
                <h3> My Address Book </h3>
                <div className="image_profile">
                  <img src={leaf} alt="" />
                </div>
                <button>
                  <i class="fas fa-plus"></i>&nbsp; Add New Address
                </button>

                <div className="nodata">
                  <img src={Data} alt="" />
                </div>
              </div>
            )}
            {activeTab === "Inquiry" && (
              <div>
                <h3>Inquiry</h3>
                <div className="image_profile">
                  <img src={leaf} alt="" />
                </div>
                <div className="line">.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
