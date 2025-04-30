import React, { useState, useEffect } from "react";
import "./page.css";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner3 from "./Banner3.png"
import Banner4 from "./Banner4.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { postData } from "../service/service";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const Page = () => {
  const [myData, setMyData] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [cartQuantities,setCartQuantities]=useState({});
  const dispatch = useDispatch();


  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM1OGM5NDNlYmM4ZTQ4YzA4YjBmNDQiLCJ1c2VyTmFtZSI6ImFkbWluIGt1bGllcyIsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE3MzM1NjUwOTZ9.NHAfARXRivrr448iiWLo-P5gVqGxYggIRG8U8Lcok9U";
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await postData("product/list-user", {
            page: 1,
            limit: 40,
          });
          if (response?.status) {
            console.log("fetched data :", response?.data?.list);
            setMyData(response?.data?.list);
          }
        } catch (error) {
          console.error("fetching error", error);
        }
      };
      fetchData();
    }, []);
    

  const wishcount = myData.filter((item) => item.wishlist === true).length;
  console.log(wishcount);

  // const handleWishlistToggle = async (productId) => {
  //   console.log("id", productId);
  //   try {
      
  //     const currentItem = myData.find((item) => item._id === productId);
  //     const isWishlisted = currentItem?.wishlist;

  //     // const response = await axios.post(
  //     //   "http://139.59.46.251:3300/wishlist/add-to-wishlist",
  //     //   { productId },
  //     //   {
  //     //     headers: {
  //     //       "Content-Type": "application/json",
  //     //       Authorization: `Bearer ${token}`,
  //     //     },
  //     //   }
  //     // );
  //      const response = await postData("wishlist/add-to-wishlist",{
  //       productId,});

  //     if (response?.data?.status) {
  //       const updatedData = myData.map((item) =>
  //         item._id === productId ? { ...item, wishlist: !item.wishlist } : item
  //       );

  //       setMyData(updatedData);

        
  //       if (isWishlisted) {
  //         toast.info(" Removed from Wishlist");
  //       } else {
  //         toast.success(" Added to Wishlist");
  //       }

  //       console.log("Wishlist API response:", response.data);
  //     }
  //   } catch (error) {
  //     console.error("error in wishlist", error);
  //     toast.error("Something went wrong");
  //   }
  // };

  // const addToCart = async (productId, quantity) => {
  //   const count =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmI1Y2UyYTI5MGU3MmQxZTYzYzZmZWMiLCJ1c2VyTmFtZSI6IlRpbSBEYXZpZCAiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE3NDQyNjMxNDJ9.GYcmDZQ7yafb7bZ-8HmUteoL8Mz1YfdWigRxC4tD3HA";

  //   try {
  //     const response = await axios.post(
  //       "http://139.59.46.251:3300/cart/add-to-cart",
  //       {
  //         productId,
  //         quantity: 1,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${count}`,
  //         },
  //       }
  //     );


  const handleWishlistToggle = async (productId) => {
    try {
      const currentItem = myData.find((item) => item._id === productId);
      const isWishlisted = currentItem?.wishlist;
  
      const response = await postData("wishlist/add-to-wishlist", {
        productId,
      });
  
      if (response?.data?.status) {
        const updatedData = myData.map((item) =>
          item._id === productId
            ? { ...item, wishlist: !item.wishlist }
            : item
        );
        setMyData(updatedData);
       
  
        
        if (isWishlisted) {
          toast.info("Removed from Wishlist");
        } else {
          toast.success("Added to Wishlist");
        }
      }
    } catch (error) {
      console.error("error in wishlist", error);
      toast.error("Something went wrong");
    }
  };
  
 const addToCart = async (productId, quantity=1) => {
    try {
      const product = myData.find((item) => item._id === productId);

      // if (!product) {
      //   toast.error("Product not found.");
      //   return;
      // }
      const minimumQuantity = product.minimumQuantity || 1;
  
      const response = await postData("cart/add-to-cart", {
        productId,
         quantity: minimumQuantity, 
      });
  
      if (response.data.status) {
     
        dispatch(addToCart({ productId, quantity: minimumQuantity }));
        setAddedItems((prev) => [...prev, productId]); 
        toast.success("Added to Cart!");
        console.log("Added to cart:", response.data);
      } else {
        console.log("Added to cart :",response.data);
        toast.success("Added To Cart");
        setAddedItems((prev) => [...prev, productId]); 
        setCartQuantities((prev) => ({ ...prev, [productId]: minimumQuantity }));
        
      }
    }catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const updateCartQuantity = async (productId, delta) => {
    const newQuantity = (cartQuantities[productId] || 1) + delta;
    if (newQuantity < 1) return;
  
    // Optional: update backend if needed
    await postData("cart/update-cart-quantity", {
      productId,
      quantity: newQuantity,
    });
  
    setCartQuantities((prev) => ({ ...prev, [productId]: newQuantity }));
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
            <img src={Banner3} alt="Banner 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner4} alt="Banner 2" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Product Slider Section */}
      <div className="slider_wrp w-100">
        <h2>Special Products For You</h2>
        <div className="slider_special">
        <p>Special Products For You</p>
        </div>
       

        <Slider {...settings}>
          {myData.slice(0, 20).map((item) => (
            <div className="cards" key={item.id}>
              <div className="heart">
               <i className={ item.isWishListed ? "fas fa-heart liked" : "far fa-heart" }
                style={{color: item.isWishListed ? "red" : "red",}}
                onClick={() => handleWishlistToggle(item._id)}></i> 
                
        </div>
             

              <img src={item.images[0]} alt={item.name} />
              <p>{item.name}</p>
              <span>From ${item.startingFrom}</span>
              
             

              <div className="button_icon">
                <button type="button" onClick={() => addToCart(item._id)}
                  disabled={addedItems.includes(item._id)}
                >
                  
                  <i class="fas fa-bolt"></i> &nbsp; &nbsp; 
                   {addedItems.includes(item._id) ? "ADDED TO CART" : "ADD TO CART"}
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
            <div className="cards" key={item._id}>
              <div className="heart">
              <i className={ item.isWishListed  === true ? "fas fa-heart liked" : "far fa-heart" }
               style={{color: item.isWishListed ? "red" : "red",}}
               onClick={() => handleWishlistToggle(item._id)}></i>

              </div>
              

              
              <img src={item.images[0]} alt={item.name} />
              <p>{item.name}</p>
              <span> From ${item.startingFrom}</span>
              <br />
              <div className="button_icon">
              <button type="button" onClick={() => addToCart(item._id, 2)}
                   disabled={addedItems.includes(item._id)}>
                <i class="fas fa-bolt"></i> &nbsp; &nbsp;
                {addedItems.includes(item._id) ? "ADDED TO CART" : "ADD TO CART"}
              </button>
              </div>
             {addedItems.includes(item._id)&&(
              <div className="message_added">
                <p> <i class="fas fa-check"></i>Item Added to cart</p>
              </div>
             )}
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

      <ToastContainer />
    </div>
  );
};

export default Page;
