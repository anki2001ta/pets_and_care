import { Route,Routes } from "react-router-dom";


import React from 'react'
import HomePage from "../Pages/HomePage";
import Login from "../Pages/login";
import Signup from "../Pages/Signup";
import Footer from "../Pages/Footer";
import UpperNavbar from "../Pages/Navbar";

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/signup" element ={<Signup/>}/>
    <Route path="/Footer" element ={<Footer/>}/>
    <Route path="/Navbar" element ={<UpperNavbar/>}/>
    </Routes>
  )
}

export default AllRoutes