import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, GetProductRequest, GetSingleSuccess } from '../../Redux/AppReducer/Action';
import Navbar from '../Navbar'
import { Box, Button, Flex,  SimpleGrid,  Text, useToast } from '@chakra-ui/react';
import Footer from '../Footer';
import "./Individual.css"
const Individual = () => {
  const {category,id}=useParams();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const Toast = useToast()
  const indiData=useSelector((store)=>store.singleData);
  const user=useSelector((store)=>store.user);
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
  const handleCart=()=>{
    if(user.token==""){
      
      Toast({
        title: "Please login first",
        status: "warning",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
      setTimeout(()=>{
        navigate("/login");
      },1500)
    }
    else{
      axios.post(`${process.env.REACT_APP_URL}/cart/create`,indiData,{
        headers: {
          Authorization: `Bearer ${user.token}` 
        }
       }).then(()=>{
        Toast({
          title: "Item Added To Cart Successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((er)=>{
        console.log(er)
      })
    }
  }
  useEffect(()=>{
    dispatch(GetProductRequest())
  axios.get(api).then((res)=>{
    dispatch(GetSingleSuccess((res.data.data)))
    // console.log(res.data.data)
  })
},[])
  return (
    <Box>
      <Navbar/>
      <Box w={"95%"}  m={"auto"}  h={{ base: "800px",sm: "auto"}} mt={"3%"}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 ,sm: 1}} >
          <Box w={{ base: "98%", md: "80%", lg: "78%" }} h={{ base: "250px", md: "300px", lg: "360px",sm:"250px" }} ml={{ base: "0px", md: "0px", lg: "160px",sm:"0px" }} >
            <img id="single_img" src={indiData?.url} style={{width:"100%",height:"100%"}} alt="" />
            {/* add to the cart */}
            <Button mt={"10px"} w={"98%"} bgColor={"black"} color={"yellow.400"} onClick={handleCart}>ADD TO CART</Button>
          </Box>
          <Box  w={{ base: "98%", md: "80%", lg: "78%",sm:"98%" }} mt={{ base: "16%", md: "14%", lg: "auto", sm:"23%"}}  >
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
         
        </SimpleGrid>
        
      </Box>
      <Footer/>
    </Box>
  )
}

export default Individual