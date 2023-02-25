import { Route, Routes } from "react-router-dom";

import React from "react";

import AdminPets from "../Pages/Admin/Products";

import Admin from "../Pages/Admin/Admin";
import AdminFood from "../Pages/Admin/AdminFood";
import AdminGrooms from "../Pages/Admin/AdminGrooms";
import Management from "../Pages/Admin/Management";
import Purchase from "../Pages/Admin/Purchase";
import Profile from "../Pages/Admin/Profile";

const AdminRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Admin/>} />
      <Route path="/pets" element={<AdminPets/>} />
     
      <Route path="/adminfood" element={<AdminFood />} />
      <Route path="/admingroom" element={<AdminGrooms />} />
      <Route path="/management" element={<Management/>} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/profile" element={<Profile />} />
      
      
    </Routes>
  );
};

export default AdminRoutes;
