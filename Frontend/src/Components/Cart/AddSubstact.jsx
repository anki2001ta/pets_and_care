import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import "../Cart/AddSubstract.css";
import { useDispatch, useSelector } from "react-redux";
import { AddCartitems, DeleteFromCart, ReduceCartItems } from "../../Redux/AppReducer/Action";
import axios from "axios";
// import {AddCartitems, ReduceCartItems,DeleteFromCart} from "../../redux/Cart/action";
export const AddSubstact = ({quantity,image,id}) => {
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  const handleReduce=()=>{
    dispatch(ReduceCartItems(image))
  }
  const handleAdd=()=>{
    dispatch(AddCartitems(image))
  }
  const handleDelete=()=>{
    axios.delete(`${process.env.REACT_APP_URL}/cart/delete/${id}`,{
      headers: {
        Authorization: `Bearer ${user.token}` 
      }})
    .then(()=>{
      dispatch(DeleteFromCart(image))
    })
    .catch((er)=>{
      console.log(er)
    })
  }
  return (
    <div className="AddSubstact">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button colorScheme="blue" onClick={(quantity==1)?()=>{
          handleDelete()
        }:()=>{
          handleReduce()
        }} >
          -
        </Button>
        <Text style={{ margin: "1rem" }}>{quantity}</Text>
        <Button colorScheme="blue" onClick={()=>{
          handleAdd()
          }}>
          +
        </Button>
      </Box>
    </div>
  );
};
