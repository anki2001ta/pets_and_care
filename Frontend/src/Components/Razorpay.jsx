import axios from "axios";
import React, { useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Razorpay = () => {
  const Razorpay = useRazorpay();
  const Navigate = useNavigate();
  let [price, setPrice] = useState(0);
  let cart = useSelector((store) => store.cart);
  let coupon = useSelector((store) => store.coupon);
  const user = useSelector((store) => store.user);
  useEffect(() => {
    let x = 0;
    for (let i = 0; i < cart.length; i++) {
      x = x + cart[i].price * cart[i].qty;
    }
    if (coupon) {
      setPrice(Math.floor(x * 0.6));
    } else {
      setPrice(Math.floor(x * 0.8));
    }
  }, []);
  const handlePayment = () => {
    const order = {
      currency: "INR",
      receipt: "qwsaq1",
    };
    const options = {
      key: "rzp_test_sYtoH5zOp7BCJ8",
      amount: price * 100,
      currency: "INR",
      name: "Pets & Care",
      image: "https://i.ibb.co/ThRyLG1/petlogo.png",
      order_id: order.id,
      handler: (res) => {
        swal({
          title: "Order placed successfully",
          text: "Enjoy your day",
          icon: "success",
        });
        axios
          .delete(`${process.env.REACT_APP_URL}/cart/remove`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
          .then(() => {
            Navigate("/");
          })
          .catch((er) => {
            console.log(er);
          });
      },
      prefill: {
        name: "name",
        email: "email",
        contact: "number",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  };
  return (
    <div className="PaymentButton">
      <button onClick={() => handlePayment()}>Buy</button>
    </div>
  );
};

export default Razorpay;
