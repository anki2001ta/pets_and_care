import { Route, Routes } from "react-router-dom";

import React from "react";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/login";
import Signup from "../Pages/Signup";
import Footer from "../Pages/Footer";
import UpperNavbar from "../Pages/Navbar";
import Carepage from "../Pages/Productpage/Carepage";
import Foodspage from "../Pages/Productpage/Foodpage";
import Petspage from "../Pages/Productpage/Petspage";
import Indiividual from "../Pages/Individualpage/Indiividual";
import Cart, { Address } from "../Pages/Cart/Address";
import ProtectedRoute from "../Pages/secured/ProtectedRoute";
import { CartLoginItems } from "../Pages/Cart/CartLoginItems";
import { PaymentPage } from "../Pages/Cart/PaymentPage";
import AccountPage from "../Pages/Cart/UserAccount";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Navbar" element={<UpperNavbar />} />
      <Route path="/:pets" element={<Petspage />} />
      <Route path="/carepage" element={<Carepage />} />
      <Route path="/foodpage" element={<Foodspage />} />
      {/* <Route path="/cart" element={<Cart/>}/> */}
      <Route path="/individualpage/:category/:id" element={<Indiividual />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartLoginItems />
          </ProtectedRoute>
        }
      />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
