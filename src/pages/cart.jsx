import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./cart.css";


const Cart = () => {
  const navigate = useNavigate();

  const [newData, setNewData] = useState([]);
  const [myDataNew, setMyDataNew] = useState([]);
  const [upData, setUpData] = useState([]);
  

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM1OGM5NDNlYmM4ZTQ4YzA4YjBmNDQiLCJ1c2VyTmFtZSI6ImFkbWluIGt1bGllcyIsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE3MzM1NjUwOTZ9.NHAfARXRivrr448iiWLo-P5gVqGxYggIRG8U8Lcok9U";
  
  
  
//     useEffect(() => {
     
  

//   const viewcart = async () => {
//     try {
//       const response = await axios.post(
//         "https://api.kulies.com/cart/view-cart",
//         {},
//         {
//           headers: {
//             "content-type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const products = response?.data?.data?.products || [];
//       console.log("view cart item", products);
//       setNewData(products);
//     } catch (error) {
//       console.error("error fetching ", error);
//       setNewData([]);  
//     }
//   };
// })
  // const removeCart = async (productId) => {
  //    try {
  //     const response = await axios.post(
  //        "https://api.kulies.com/cart/remove-cart-item",
  //        { productId },
  //        {
  //          headers: {
  //            "content-type": "application/json",
  //            Authorization: `Bearer ${token}`,
  //          },
  //        }
  //      );
  //      console.log(response.data);
  //      setMyDataNew(response.data.data.products);
  //      toast.success("item removed from the cart");
  //    } catch (error) {
  //      console.error("error fetching ", error);
  //    }
  //  };

  const updatecart = async (productId, quantity, cartId) => {
    try {
      const response = await axios.post(
        "https://api.kulies.com/cart/update-product-quantity",
        { productId, quantity, cartId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.status && response.data.data?.products) {
        const updatedProduct = response.data.data.products.find(
          (item) => item.productId === productId
        );
        console.log("Updated product", updatedProduct);
      } else {
        console.warn("Product not found in cart:", response.data.message);
      }
      // console.log(response.data);
      setUpData(response.data.data.products);
    } catch (error) {
      console.log("feteching error", error);
    }
  };

  const handleDecrease = async (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;

      await updatecart(item.productId, newQuantity, item._id);
      refreshCart();
    }
  };

  const handleIncrease = async (item) => {
    const newQuantity = item.quantity + 1;

    await updatecart(item.productId, newQuantity, item._id);
    refreshCart();
  };
  // 
  const refreshCart = async () => {
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
      const products = response?.data?.data?.products || [];
      setNewData(products);
    } catch (error) {
      console.error("error refreshing cart", error);
      setNewData([]);
    }
  };
  
  useEffect(() => {
    refreshCart();
  }, []);

  const subtotal = newData
    .reduce((acc, item) => acc + item.price*item.quantity, 0)
    .toFixed(2);
  const amount = newData.reduce((acc, item) => acc + item.price*item.quantity, 0);

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

        <div className="product_desc_wrapper">
          <div className="cart_layout">
            <div className="productDescription">
              <div className="product-cart">
             
                {newData.map((item) => {
                  return (
                    <table className="table">
                      <tr>
                        <td
                          className="productDetail  "
                          style={{ maxWidth: "600px", width: "400px" }}
                        >
                          <div className="product-card">
                            <img
                              src={item.productDetail.images}
                              alt={item.productDetail.name}
                            />

                            <div className="texttruncate">
                              <h5>{item.productDetail.name}</h5>
                              <span>Price Per Piece ${item.price}</span>
                            </div>
                          </div>
                        </td>
                        <td productDetail>
                          <div
                            className="Quantity "
                            style={{ maxWidth: "200px", width: "100px" }}
                          >
                            <h5>Qty</h5>
                            <div className="quantity-price">
                              <div className="cart-qty">
                                <button
                                  type="submit"
                                  onClick={() => handleDecrease(item)}
                                >
                                <i class="fas fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button
                                  type="submit"
                                  onClick={() => handleIncrease(item)}
                                >
                                <i class="fas fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="productDetail">
                          <div
                            className="cost"
                            style={{ maxWidth: "400px", width: "400px" }}
                          >
                            <span>Total</span>
                            <p>${(item.price*item.quantity).toFixed(2)}</p>
                          </div>
                        </td>
                        <td className="productDetail">
                          <div className="action">
                            <h6>Action</h6>
                            <button
                              onClick={() =>
                                navigate("/remove", { state: { item } })
                              }
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    </table>
                  );
                })
              }
              
              </div>
                
            </div>
              

            <div className="summary_header">
              <div className="summary_content">
                <div className="sub_summary">
                  <h5>Cart Total</h5>
                  <hr />
                  <div className="subtotal">
                    <span>Subtotal </span>
                    <p> $ {subtotal} </p>
                  </div>
                  <hr />
                  <div className="total_amt">
                    <h5>Total Amount</h5>
                    <p>$ {amount}</p>
                  </div>
                  <div className="continue_btn">
                    <button type="submit">
                      {" "}
                      <Link to="/" style={{ color: "white" }}>
                        Continue To Checkout
                      </Link>
                    </button>
                  </div>
                  <div className="return_shop">
                    <button type="submit">
                      <Link to="/login" style={{ color: "black" }}>
                      <i class="fas fa-long-arrow-alt-left"></i>&nbsp; Return To
                        Shopping
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Cart;
