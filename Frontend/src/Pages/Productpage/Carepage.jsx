import { Box, Center, Image, Tag, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductcatSuccess, GetProductRequest } from '../../Redux/AppReducer/Action'
import Footer from '../Footer'
import Navbar from '../Navbar'
import "./productpage.css"

//sorting by asc and desc
const sortDataByDesc = () => {
  return axios.get(
    "https://breakable-trench-coat-deer.cyclic.app/pets/care/groom?sortBy=desc"
  );
 };

 const sortDataByAsc = () => {
  return axios.get(
    "https://breakable-trench-coat-deer.cyclic.app/pets/care/groom?sortBy=asc"
  );
 };


const Carepage = () => {
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(false)
    const catData=useSelector((store)=>store.CatProduct)

    const catproduct=()=>{
        dispatch( GetProductRequest())
        axios.get("https://breakable-trench-coat-deer.cyclic.app/pets/care/groom")
        .then((res)=>{
            dispatch(GetProductcatSuccess(res.data.caredata))
            console.log(res.data.caredata)
        })
    };


    const handlesortByDesc = () => {
      dispatch(GetProductRequest());
      sortDataByDesc().then((res) => {
        dispatch(GetProductcatSuccess(res.data.caredata));
        console.log(res.data.caredata);
      });
    };
  
  const handlesortByAsc=()=>{
  dispatch(GetProductRequest());
  sortDataByAsc().then((res) => {
  dispatch(GetProductcatSuccess(res.data.caredata));
  console.log(res.data.caredata);
  });
  }
  useEffect(()=>{
    setLoading(true)
    catproduct()
    setLoading(false)
  },[])
  return (
    <div className='Product_page'>
        <div><Navbar/></div>
        <div className='Product_br'>
         <div className='Product_g'>
            <h3 id="title">PET CARE </h3>
            <div className='functi'>
            <h2 id="title2">SORT BY PRICES</h2>
            <button class="button-73" role="button" onClick={handlesortByDesc }>PRICE: HIGH TO LOW</button>
            <button class="button-73" role="button" onClick={handlesortByAsc}>PRICE: LOW TO HIGH</button>
            </div>
         </div>
         <div className='Product_gr'>
         <h3 id="title">GROOM ME</h3>
         <div className='product_list'>
         {loading===true?(
           <div className="productPage_product_side_loading">
           <img
             src="https://cdn.svgator.com/images/2022/07/cute-animated-cat-tutorial.gif"
             alt=""
           />
           </div>):(
         
                    catData?.map((item) => ( 
                      <Box className='para'  h={"auto"} p='3' rounded='md'  border={"1px solid grey"} mb={"20px"}>
                  <Center >
    
    <Image className="slider_view "w={"100%"} h={"180px"} src={item.url}  alt="Image 1"  />

  </Center>
  <Center>
    <Text fontWeight={"bold"}>{item.name}</Text>
  </Center>
  <Center>
  <Text><span style={{color:"red",fontFamily:"sans-serif",fontSize:"14px"}}>Used For:</span>{item.Usedfor}</Text>
  </Center>
  
  <Tag mt={"15px"} bgColor={"green.400"} color={"white"}> {item.rating}</Tag>
  <Center>
    <Text>Price: Rs{item.Price}</Text>
  </Center>
                      <button className="button-54">VIEW ME</button>
                     
                    </Box>
                    )) 
               ) } 

         </div>
           
         </div>
        </div>
        <div >
            <Footer/>
        </div>
    </div>
  )
}

export default Carepage