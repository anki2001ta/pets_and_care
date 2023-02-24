import React from 'react'
import { Link } from 'react-router-dom'
import "../Cart/CartLogin.css"
export const CartLogin = () => {
    return (
        <div className="CartLogin" style={{backgroundColor:"#f8f8f8",marginTop:"22px"}}>
            <div style={{backgroundColor:"#f8f8f8"}}>
                <div id="cart_my" style={{backgroundColor:"#f8f8f8"}}>
                    My Cart
                </div>
                <div style={{backgroundColor:"#f8f8f8"}}>
                    <div style={{backgroundColor:"#f8f8f8"}}>
                    <img id="empty" src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="noCartImage" />
                    
                    </div>
                </div>
               
            </div>
           
            <div>Check the items below or <span style={{color:"blue"}}> <Link to="/dogs"> continue shopping</Link> </span></div>
        </div>
    )
}
