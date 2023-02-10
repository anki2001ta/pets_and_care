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
    "https://breakable-trench-coat-deer.cyclic.app/pets/dogs?sortBy=desc"
  );
 };

 const sortDataByAsc = () => {
  return axios.get(
    "https://breakable-trench-coat-deer.cyclic.app/pets/dogs?sortBy=asc"
  );
 };


const Dogspage = () => {
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(false)
    const catData=useSelector((store)=>store.CatProduct)

    const catproduct=()=>{
        dispatch( GetProductRequest())
        axios.get("https://breakable-trench-coat-deer.cyclic.app/pets/dogs")
        .then((res)=>{
            dispatch(GetProductcatSuccess(res.data.petbase))
            console.log(res.data.petbase)
        })
    };

    //getting data by desc
   const handlesortByDesc = () => {
    dispatch(GetProductRequest());
    sortDataByDesc().then((res) => {
      dispatch(GetProductcatSuccess(res.data.petbase));
      console.log(res.data.petbase);
    });
  };

const handlesortByAsc=()=>{
dispatch(GetProductRequest());
sortDataByAsc().then((res) => {
dispatch(GetProductcatSuccess(res.data.petbase));
console.log(res.data.petbase);
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
            <h3 id="title">DOGGU'S HERE</h3>
            <div className='functi'>
            <h2 id="title2">SORT BY PRICES</h2>
            <button class="button-73" role="button" onClick={handlesortByDesc}>PRICE: HIGH TO LOW</button>
            <button class="button-73" role="button" onClick={handlesortByAsc}>PRICE: LOW TO HIGH</button>
            </div>
         </div>
         <div className='Product_gr'>
         <h3 id="title">PICK ME</h3>
         <div className='product_list'>
         {loading===true?(
           <div className="productPage_product_side_loading">
           <img
             src="https://cdn.svgator.com/images/2022/07/cute-animated-cat-tutorial.gif"
             alt=""
           />
         </div>):(
                    catData?.map((item) => ( 
                      <Box className='para'  h={"auto"} p='3' rounded='md'  border={"1px solid grey"}>
                    <Image className="slider_v"w={"100%"} h={"180px"} src={item.url}  alt="Image 1"  />
                      
                        <p><span style={{color:"red",fontFamily:"sans-serif",fontSize:"16px",textAlign:"left"}}>Name:</span> {item.name}</p>
                      
                      <p><span style={{color:"red",fontFamily:"sans-serif",fontSize:"14px",textAlign:"left"}}>Breed:</span> {item.breed}</p>
                      
                      <p ><span style={{color:"red",fontFamily:"sans-serif",fontSize:"14px",textAlign:"left"}}>Location:</span> {item.location}</p>
                     
                      <p ><span style={{color:"red",fontFamily:"sans-serif",fontSize:"14px",textAlign:"left"}}>Color:</span> {item.color}</p>
                     
                      <p ><span style={{color:"red",fontFamily:"sans-serif",fontSize:"14px",textAlign:"left"}}>Price:</span> Rs{item.price}</p>
                      <button className="button-54">VIEW ME</button>
                     
                    </Box>
                    )) 
               ) } 

         </div>
           
         </div>
        </div>
        <div style={{marginTop:"50px"}}>
            <Footer/>
        </div>
    </div>
  )
}

export default Dogspage