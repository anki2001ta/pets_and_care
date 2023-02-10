import { Route,Routes } from "react-router-dom";


import React from 'react'
import HomePage from "../Pages/HomePage";
import Login from "../Pages/login";
import Signup from "../Pages/Signup";
import Footer from "../Pages/Footer";
import UpperNavbar from "../Pages/Navbar";
import Catspage from "../Pages/Productpage/Catspage";
import Dogspage from "../Pages/Productpage/Dogspage";
import Birdspage from "../Pages/Productpage/Birdpage";
import Rabbitspage from "../Pages/Productpage/Rabbitpage";
import Carepage from "../Pages/Productpage/Carepage";
import Foodspage from "../Pages/Productpage/Foodpage";

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/signup" element ={<Signup/>}/>
    <Route path="/Footer" element ={<Footer/>}/>
    <Route path="/Navbar" element ={<UpperNavbar/>}/>
    <Route path="/catspage" element ={<Catspage/>}/>
    <Route path="/dogspage" element ={<Dogspage/>}/>
    <Route path="/birdspage" element={<Birdspage/>}/>
    <Route path="/rabbitspage" element={<Rabbitspage/>}/>
    <Route path="/carepage" element={<Carepage/>}/>
    <Route path="/foodpage" element={<Foodspage/>}/>
    </Routes>
  )
}

export default AllRoutes