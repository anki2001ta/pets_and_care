
import { Box } from "@chakra-ui/react";
import "../Cart/CartItem.css";
import { AddSubstact } from "./AddSubstact";
export const CartItem = (props) => {
    console.log(props)
    const { qty, url, name, price, _id }=props
    return (
        <div className="CartItem">
            <div>
                <div>
                    <img src={url} alt="image1" />
                </div>
            </div>
            <div>
                <div>{name}</div>
                <div>
                   
                    <div style={{textAlign:"left"}}>
                        
                        <span>₹{(price * 0.8).toFixed(2)}</span>
                       <strike> <span style={{color:"red",marginLeft:"8px",textAlign:"left"}}>₹{price}</span></strike>
                        <br></br>
                        <span style={{color:"green",textAlign:"left"}}> You Save {(price * 0.2).toFixed(2)}</span>
                    </div>
                    <Box>
                        <AddSubstact quantity={qty} image={url} id={_id} />
                    </Box>
                </div>
            </div>
        </div>
    );
};
