import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { GetProductRequest, GetSingleSuccess } from '../../Redux/AppReducer/Action';
import Navbar from '../Navbar'
import { Box, Button, Flex,  Text } from '@chakra-ui/react';
import Footer from '../Footer';
import "./Individual.css"
const Individual = () => {
  const {category,id}=useParams()
  const dispatch=useDispatch()
  const indiData=useSelector((store)=>store.singleData)
 // console.log(indiData)
  let api;
  if(category=="pets"){
    api=`${process.env.REACT_APP_URL}/pets/single/${id}`
    
  }
  else if(category=="food"){
    api=`${process.env.REACT_APP_URL}/pets/foodsingle/${id}`
  }
  else if(category=="care"){
    api=`${process.env.REACT_APP_URL}/pets/caresingle/${id}`
  }
  useEffect(()=>{
    dispatch(GetProductRequest())
  axios.get(api).then((res)=>{
    dispatch(GetSingleSuccess((res.data.data)))
    // console.log(res.data.data)
  })
  .catch((er)=>{
    console.log(er)
  })
  },[])
  return (
    <Box>
      <Navbar/>
      <Box w={"75%"}  m={"auto"} h={"500px"} mt={"3%"}>
        <Flex justifyContent={"space-evenly"}>
          <Box w={"45%"} h={"370px"} >
            <img id="single_img" src={indiData?.url} style={{width:"100%",height:"100%"}} alt="" />
            <Button mt={"10px"} w={"98%"} bgColor={"black"} color={"yellow.400"}>ADD TO CART</Button>
          </Box>
          <Box w={"45%"} h={"500px"} >
            <Box w={"95%"} h={"80px"}  m={"auto"} border={"0.5px solid grey"} textAlign={"justify"} borderRadius={"10px"} > 
             <Text ml={"10px"} fontSize={"18px"} fontWeight={"bold"}><span style={{color:"red", fontWeight:"bold",fontSize:"18px"}}>Name:</span>{indiData?.name}</Text>
             <Text ml={"10px"} fontSize={"18px"} fontWeight={"bold"}><span style={{color:"red", fontWeight:"bold",fontSize:"18px"}}>Price:</span>Rs.{indiData?.price}</Text>
            {indiData?.rating}
            </Box>
            <Box>
            <Box w={"95%"} h={"auto"} border={"0.5px solid grey"} m={"auto"} marginTop={"10px"} textAlign={"justify"} borderRadius={"10px"} > 
             <h2 style={{marginLeft:"10px",color:"red", fontWeight:"bolder"}}>KNOW MORE</h2>
             <h4 style={{marginLeft:"10px",color:"green", fontWeight:"bold"}}>Used For,</h4>
             <Text ml={"20px"} fontSize={"18px"} fontWeight={"bold"}>{indiData?.category}</Text>
             <Text ml={"20px"} fontSize={"18px"} fontWeight={"bold"}>{indiData?.location}</Text>
             <Text ml={"20px"} fontSize={"18px"} fontWeight={"bold"}>{indiData?.breed}</Text>
             <Text ml={"20px"} fontSize={"18px"} fontWeight={"bold"}>{indiData?.color}</Text>
            {indiData?.rating}
            </Box>
            <Box w={"95%"} h={"auto"} border={"0.5px solid grey"} m={"auto"} marginTop={"10px"} textAlign={"justify"} borderRadius={"1px"} > 
             <Text fontSize={"20px"} p={"15px"} fontFamily={"serif"} fontWeight={"bold"}>
              Became the first pet parent , and buy any of your favourite pets like cats ,dogs ,rabbits ,birds ,many option in one .Imported from the differnet parts of the world,
              Also buy pet's grooming and food products from our website. 
             </Text>
            </Box>
            </Box>

          </Box>
         
        </Flex>
        
      </Box>
      <Footer/>
    </Box>
  )
}

export default Individual