import React, { useEffect, useState } from "react";
import "./CartLoginItem.css";
import { Box, useToast } from "@chakra-ui/react";
import { CartLogin } from "./CartLogin";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../../Components/Cart/CartItem";
import { Applycoupon } from "../../Components/Cart/Applycoupon";
import { PaymentDetils } from "../../Components/Cart/PaymentDetils";
import axios from "axios";
import { AddToCart } from "../../Redux/AppReducer/Action";
import Navbar from "../Navbar";
import Footer from "../Footer";
export const CartLoginItems = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let [price, setPrice] = useState(0);
  let cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user);
  

  const Toast = useToast();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((r) => {
        dispatch(AddToCart(r.data));
      })
      .catch((er) => {
        console.log(er);
      });
    
  }, []);
  useEffect(()=>{
    let x = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        x = x + Number(cart[i].price) * Number(cart[i].qty);
      }
      setPrice(x);
    }
  }, [price,cart])

  return cart.length === 0 ? (
    <Box >
      <Navbar />
      <CartLogin />
    </Box>
  ) : (
    <Box>
      <Navbar />
    
    <div className="CartLoginitems">
      
      <div>
        <div>
          <div>{`My Cart : ${cart.length} Item`}</div>
          <div></div>
        </div>
        <div className="cart1">
          <div>
            <div className="basket">
              <div>
                <div style={{color:"red"}}>
                  My Pets
                </div>
                <div>₹ {price.toFixed(2)}</div>
              </div>
              <div>
                {cart.length &&
                  cart.map(({ qty, url, name, price, _id }, i) => {
                    return (
                      <CartItem
                        qty={qty}
                        url={url}
                        name={name}
                        price={price}
                        _id={_id}
                      />
                    );
                  })}
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div>
            <Applycoupon cartPrice={price} />
            <PaymentDetils cartPrice={price} />
            <div className="PaymentButton2">
              <button bgColor={"#f7c719"}
                onClick={() => {
                  navigate("/address", { state: price });
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </Box>
  );
};
