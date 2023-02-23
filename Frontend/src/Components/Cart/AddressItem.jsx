import React from 'react'
import "../Cart/AddressItem.css"
export const AddressItem = ({url,name,price,qty}) => {
  return (
    <div className='CartItem'>
    <div>
        <div>
            <img src={url} alt="image1" />
        </div>
    </div>
    <div>
        <div>
            {name}
        </div>
        <div>
             <span>{price*0.8}</span>
                <span>{price}</span>
                <span>You Save {(price*0.2).toFixed(2)}</span>
        </div>
        <div>
            <div>Qty: {qty}</div>
        </div>
    </div>
</div>
  )
}
