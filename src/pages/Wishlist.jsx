import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./wishlist.css";
import { useNavigate } from "react-router-dom";
import WishPhoto from "./wishlist_empty.png";
import { postData } from "../service/service";

const Wishlist = () => {
  const [wishListItems, setWishListItems] = useState([]);
  const navigate = useNavigate();

  const myWishlist = async () => {
    try {
      const response = await postData("wishlist/my-wishlist");
      console.log("Wishlist API response:", response?.data);
      setWishListItems(response?.data || []);
    } catch (error) {
      console.error("Fetching error in data:", error);
    }
  };

  useEffect(() => {
    myWishlist();
  }, []);

 const handleRemoveItem = (item)=>{
  navigate("/removewish" ,{state:{item}})
 }
  return (
    <div>
      <div className="top-header">
        <div className="sub-head">
          <div className="left-posi">
            <span>My WishList</span>
          </div>
          <div className="rightt-posi">
            <i className="fas fa-home"></i>
            <Link to="/">Home</Link>
          </div>
          <div className="wishlist">
            <i className="fas fa-chevron-right"></i>
            <span>My Wishlist</span>
          </div>
        </div>

        <div className="wishcontain">
          {Array.isArray(wishListItems) && wishListItems.length > 0 ? (
            wishListItems.map((item) => {
              const product = item.productDetails;
              return (
                <div key={item._id} className="wishlist-item">
                  <div className="removeitem">
                  <i
                  className="fas fa-times-circle"
                  onClick={() => handleRemoveItem(item)} 
                ></i>
                  </div>

                  <div className="img_wrp">
                    <img src={product.images?.[0]} alt={product.name} />{" "}
                  </div>

                  <div className="text_trauncate">
                    <p>{product.name}</p>
                  </div>
                  <div className="productunit">
                    <span>{product.unit}</span>
                  </div>

                  <div className="productprice">
                    <p>from $ {product.priceRange?.[0]?.price}</p>
                  </div>
                  <div className="btn_disable">
                  <button disabled={true}> <i class="fas fa-shopping-cart"></i> &nbsp;Add To Cart</button >
                  </div>

                  
                </div>
              );
            })
          ) : (
            <div className="alter_wrp">
              <div className="alternate_wish">
                <img src={WishPhoto} alt={""} />
              </div>
                <div className="alterwishtext">
                <p>Your Wishlist Is Empty!</p>
                </div>

              <span> Add Items To It Now</span>
              <div className="alterwish_shop">
              <Link to="/">
                <button>
                  {" "}
                  <i class="fas fa-arrow-left"></i> Return To Shopping
                </button>
              </Link>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
