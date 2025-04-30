import "./remove.css";
import { postData } from "../service/service";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Removewish = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;
  console.log(item, "-----------removeitem");

  const handleRemove = async (wishlistId, productId) => {
    try {
      const response = await postData("wishlist/remove", {
        wishlistId,
        productId,
      });
      console.log(response?.data);

      toast.success("The Product Has Been Removed From The WishList", {
        className: "custom-toast",
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/wishlist");
      }, 2000);
    } catch (error) {
      console.error("Fetching error", error);
      toast.error("Error removing the product.");
    }
  };

  return (
    <div className="react_alert">
      <div className="react_alert_message">
        <h4>Confirm To Remove Product</h4>
        <p>Are you sure you want to remove this product from your Wishlist</p>
        <div className="react_alert_button_group">
          {item ? (
            <>
              <button
                onClick={() => handleRemove(item._id, item.productId)}
                className="confirm-button"
              >
                Yes
              </button>
              <button onClick={() => navigate(-1)} className="cancel-button">
                No
              </button>
            </>
          ) : (
            <button disabled>Item not found</button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Removewish;
