import React, { useEffect, useState } from 'react'
import "../Cart/Address.css"
import { useSelector } from 'react-redux'
import { AddressItem } from '../../Components/Cart/AddressItem'
import { PaymentDetils } from '../../Components/Cart/PaymentDetils'
import Razorpay from './../../Components/Razorpay';
import Navbar from '../Navbar'
export const Address = () => {
 
  let [price,setPrice]=useState(0);
  let cart=useSelector((store)=>store.cart);
  let coupon=useSelector((store)=>store.coupon);
  // coupon ? cartPrice*0.6 : Math.floor(cartPrice*0.8)
  useEffect(()=>{
   let x=0;
    for(let i=0;i<cart.length;i++){
      x=x+cart[i].price*cart[i].qty
    }
    setPrice(x);
  },[])
  return (
    
     
    <div className='Address'>
      
      <br />
      <div>
        <div>Order Summary</div>
        <div></div>
      </div>
      <div>
        <div>
          <div className='basket'>
            <div>
              <div>Groceries Basket <span>{`(${cart.length} items)`}</span></div>
              <div></div>
            </div>
            <div>
            {cart.length&&cart.map((el,i)=>{
               return  <AddressItem  key={i} {...el}/>
            })}
            </div>
          </div>
        </div>
        <div>
          <PaymentDetils cartPrice={price}/>
          <Razorpay/>
        </div>
      </div>
    </div>
   
  )
}
