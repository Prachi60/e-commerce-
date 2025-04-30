import React from "react";
import Navbar from "./components/Navbar";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const App = () => {
  return (
    <>
  
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      
      </>
  );
};

export default App;
