import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import "../Cart/Applycoupon.css";
import { useDispatch, useSelector } from "react-redux";
import { ApplyCouponFn } from "../../Redux/AppReducer/Action";
// import {ApplyCouponFn} from '../../Redux/Cart/action'
export const Applycoupon = ({ cartPrice }) => {
const dispatch = useDispatch()
const coupon = useSelector((store)=> store.coupon)
  const toast = useToast();
  const [promo, setPromo] = useState("");
  const handleDiscount = () => {
    if (promo == "Pets") {
      toast({
        title: "Coupon Applied",
        status: "success",
        discription:"40% Discount Applied",
        duration: 7000,
        isClosable: true,
        position:"top"
      });
      dispatch(ApplyCouponFn())
      console.log(coupon);
    }
  };
  return (
    <div className="ApplyCoupon">
      <div>
        <span id="coupon">Apply Coupon</span>
       
      </div>
      <div>
        <div>
          {" "}
          <img
            src="https://img.icons8.com/windows/512/discount.png"
            alt="offer icon"
          />
          <input
            type="text"
            onChange={(e) => setPromo(e.target.value)}
            placeholder="Enter Coupon Code"
          />
          <button style={{ color:"green"
            }} onClick={handleDiscount}>Apply</button>
        </div>
      </div>
      <hr />
    </div>
  );
};
