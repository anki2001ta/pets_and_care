import { Box } from '@chakra-ui/react'
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
                   
                    <div style={{textAlign:"left"}}>
                        
                        <span>₹{(price * 0.8).toFixed(2)}</span>
                       <strike> <span style={{color:"red",marginLeft:"8px",textAlign:"left"}}>₹{price}</span></strike>
                        <br></br>
                        <span style={{color:"green",textAlign:"left"}}> You Save {(price * 0.2).toFixed(2)}</span>
                    </div>
                    
        <div>
            <Box textAlign={"right"} fontWeight={"bold"}>Qty: {qty}</Box>
        </div>
    </div>
</div>
  )
}
