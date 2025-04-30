import React, { useState } from 'react';
import './remove.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation, useNavigate } from 'react-router-dom';

const Remove = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;
  const [myDataNew, setMyDataNew] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM1OGM5NDNlYmM4ZTQ4YzA4YjBmNDQiLCJ1c2VyTmFtZSI6ImFkbWluIGt1bGllcyIsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE3MzM1NjUwOTZ9.NHAfARXRivrr448iiWLo-P5gVqGxYggIRG8U8Lcok9U";

  const removeCart = async (productId) => {
    if (!productId) {
      toast.error("Product ID is missing.");
      return;
    }

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
      toast.success("The Product Has Been Removed From The Cart", {
        className: 'custom-toast',
        position: 'top-center',
        autoClose: 2000,
      });

      
      setTimeout(() => {
        navigate('/cart');
      }, 1000);

    } catch (error) {
      console.error("Error removing item", error);
      toast.error("Failed to remove the product from the cart.");
    }
  };

  return (
    <div className='react_alert'>
      <div className="react_alert_message">
        <h4>Remove Product Confirmation</h4>
        <p>Are you sure you want to remove this product from the cart?</p>
        <div className="react_alert_button_group">
         
          {item ? (
            <button onClick={() => removeCart(item?.productId)}>Yes</button>
          ) : (
            <button disabled>Item not found</button>
          )}
          <button onClick={() => navigate(-1)}>No</button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Remove;
