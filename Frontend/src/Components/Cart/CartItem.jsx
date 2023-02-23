
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
                    <div>
                        {name}
                    </div>
                    <div>
                        <span>{(price * 0.8).toFixed(2)}</span>
                        <span>{price}</span>
                        <span>You Save {(price * 0.2).toFixed(2)}</span>
                    </div>
                    <Box>
                        <AddSubstact quantity={qty} image={url} id={_id} />
                    </Box>
                </div>
            </div>
        </div>
    );
};
