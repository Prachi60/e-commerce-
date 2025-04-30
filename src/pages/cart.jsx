import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [newData, setNewData] = useState([]);
  const [myDataNew, setMyDataNew] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmI1Y2UyYTI5MGU3MmQxZTYzYzZmZWMiLCJ1c2VyTmFtZSI6IlRpbSBEYXZpZCAiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE3NDQyNjMxNDJ9.GYcmDZQ7yafb7bZ-8HmUteoL8Mz1YfdWigRxC4tD3HA";
  useEffect(() => {
    const viewcart = async () => {
      try {
        const response = await axios.post(
          "https://api.kulies.com/cart/view-cart",
          {},
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setNewData(response.data.data.products);
        console.log("view cart item", response.data.data.products);
      } catch (error) {
        console.error("error fetching ", error);
      }
    };
    viewcart();
  }, []);
  const removeCart = async (productId) => {
    try {
      const response = await axios.post(
        "https://api.kulies.com/cart/remove-cart-item",
        { productId },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setMyDataNew(response.data.data.products);
      toast.success("item removed from the cart");
    } catch (error) {
      console.error("error fetching ", error);

    }
  };

  return (
    <div>
      <div className="color">
        <div className="bottom">
          <div className="left-side">
            <span>My Cart</span>
          </div>
          <div className="right">
            <i class="fas fa-home"></i>
            <Link to="/">Home</Link>
          </div>
          <div className="mycart">
            <i class="fas fa-chevron-right"></i>
            <span>My Cart</span>
          </div>
        </div>
        <div className="productDescription">
          <div className="product-cards">
            {newData.map((item) => {
              return (
                <div className="product-card" key={item._id}>
                  <div className="product-details">
                    <img
                      src={item.productDetail.images}
                      alt={item.productDetail.name}
                    />
                  </div>
                  <div className="product-info">
                    <span>{item.productDetail.name}</span>
                    <span> Price per piece: ₹{item.price}</span>
                    <p> Qty: {item.quantity}</p>
                    <button onClick={() => removeCart(item.productId)}>
                      Remove from the Cart
                    </button>
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Cart;
