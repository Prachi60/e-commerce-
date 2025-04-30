import React from "react";
import Navbar from "./components/Navbar";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/footer";
import { Routes, Route,useLocation } from "react-router-dom";

import Cart from "./pages/cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Remove from "./pages/remove";
import Removewish from "./pages/removewish"; 
import Profile from "./pages/Profile";
import Inquiry from "./pages/Inquiry";
import Address from "./pages/Address";
import Shop from "./pages/Shop";
import Order from"./pages/order";
import Page from "./components/page";
import Aboutus from "./pages/aboutus";

const App = () => {
  const location = useLocation();
  return (
    <>
       {location.pathname !== "/remove" && <Navbar />}
      {/* <Navbar/> */}
      
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/remove" element={<Remove/>}/>
        <Route path="/removewish" element={<Removewish/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/inquiry" element={<Inquiry/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
      </Routes>
      <Footer/>
      
      </>
  );
};

export default App;
