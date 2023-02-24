import React from 'react'
import "../Cart/CartNoLogin.css"
export const CartNotLogin = () => {
    return (
        <div className="CartNoLogin" >
            <div>
                My Cart
            </div>
            <div>
                <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="noCartImage" />
                <p>Your Cart is empty!</p>
            </div>
        </div>
    )
}
