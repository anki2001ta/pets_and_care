import { Box, Center, Image, Tag, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { GetProductcatSuccess, GetProductRequest,GetGROOMSlideShowFailure } from '../../Redux/AppReducer/Action'
import Footer from '../Footer'
import Navbar from '../Navbar'
import "./productpage.css"

//sorting by asc and desc
const sortDataByDesc = () => {
  return axios.get(
    "https://breakable-trench-coat-deer.cyclic.app/pets/food/feed?sortBy=desc"
  );
 };

 const sortDataByAsc = () => {
  return axios.get(
    "https://breakable-trench-coat-deer.cyclic.app/pets/food/feed?sortBy=asc"
  );
 };

 //filteration
 const getdatabydog=()=>{
  return (
   axios.get("https://breakable-trench-coat-deer.cyclic.app/pets/food/feed?used=dogs")
   );
 };
 
 const getdatabycat=()=>{
   return (
    axios.get("https://breakable-trench-coat-deer.cyclic.app/pets/food/feed?used=cats")
    );
  };
 
  const getdatabybird=()=>{
   return (
    axios.get("https://breakable-trench-coat-deer.cyclic.app/pets/food/feed?used=birds")
    );
  };
 
  const getdatabyrabbit=()=>{
   return (
    axios.get("https://breakable-trench-coat-deer.cyclic.app/pets/food/feed?used=rabbits")
    );
  };


const Foodspage = () => {
  const load = useSelector((store) => store.isLoading);
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const catData=useSelector((store)=>store.CatProduct)

    const catproduct=()=>{
        dispatch( GetProductRequest())
        axios.get("https://breakable-trench-coat-deer.cyclic.app/pets/food/feed")
        .then((res)=>{
            dispatch(GetProductcatSuccess(res.data.food_data))
            // console.log(res.data.food_data)
        })
    };

    const handlesortByDesc = () => {
      dispatch(GetProductRequest());
      sortDataByDesc().then((res) => {
        dispatch(GetProductcatSuccess(res.data.food_data));
        // console.log(res.data.food_data);
      });
    };
  
  const handlesortByAsc=()=>{
  dispatch(GetProductRequest());
  sortDataByAsc().then((res) => {
  dispatch(GetProductcatSuccess(res.data.food_data));
  // console.log(res.data.food_data);
  });
  }

  const handledogdata=()=>{
    getdatabydog(GetProductRequest())
    getdatabydog().then((res)=>{
      dispatch(GetProductcatSuccess(res.data.food_data))
      // console.log(res.data.caredata
      //   )
    })
    .catch((er)=>{
      dispatch(GetGROOMSlideShowFailure())
    })
  };
  
  const handlecatdata=()=>{
    getdatabycat(GetProductRequest())
    getdatabycat().then((res)=>{
      dispatch(GetProductcatSuccess(res.data.food_data))
      // console.log(res.data.caredata
      //   )
    })
    .catch((er)=>{
      dispatch(GetGROOMSlideShowFailure())
    })
  };
  
  const handlebirddata=()=>{
    getdatabybird(GetProductRequest())
    getdatabybird().then((res)=>{
      dispatch(GetProductcatSuccess(res.data.food_data))
      // console.log(res.data.caredata
      //   )
    })
    .catch((er)=>{
      dispatch(GetGROOMSlideShowFailure())
    })
  };
  
  const handlerabbitdata=()=>{
    getdatabyrabbit(GetProductRequest())
    getdatabyrabbit().then((res)=>{
      dispatch(GetProductcatSuccess(res.data.food_data))
      // console.log(res.data.caredata
      //   )
    })
  };

  const handleSinglepage=(id)=>{
    try {
      Navigate(`/individualpage/food/${id}`)
    } catch (error) {
      console.log(error)
    }
    
  }

  const handlerefreash=()=>{
    catproduct()
  };

  useEffect(()=>{
    catproduct() 
  },[])
  return (
    <div className='Product_page'>
        <div><Navbar/></div>
        <div className='Product_br'>
         <div className='Product_g'>
            <h3 id="title">PETS FOOD </h3>
            <div className='functi'>
            <h2 id="title2">SORT BY PRICES</h2>
            <button class="button-73" role="button" onClick={handlesortByDesc}>PRICE: HIGH TO LOW</button>
            <button class="button-73" role="button" onClick={handlesortByAsc}>PRICE: LOW TO HIGH</button>
            </div>
            <h3 id="title" style={{ marginTop: "35px" }}>
            FILTERATION
          </h3>
          <Box className="filter_grp">
            <h2 id="title2">FILTER BY PETS</h2>
            <Box className="radio_gp">
            <button class="button-73" role="button" onClick={handledogdata} >DOGS CARE</button>
            <button class="button-73" role="button"  onClick={handlecatdata}>CATS CARE</button>
            <button class="button-73" role="button" onClick={handlebirddata}>BIRDS CARE</button>
            <button class="button-73" role="button" onClick={handlerabbitdata}>RABBITS CARE</button>
            <button class="button-73" role="button" onClick={handlerefreash} >RESET</button>
            </Box>
            </Box>
         </div>
         <div className='Product_gr'>
         <h3 id="title">I AM HUNGRY</h3>
         <div className='product_list'>
         {load===true?(
           <div className="productPage_product_side_loading">
           <img
             src="https://cdn.svgator.com/images/2022/07/cute-animated-cat-tutorial.gif"
             alt=""
           />
           </div>
         ):(
         
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
                      <button className="button-54" onClick={()=>handleSinglepage(item._id)}>VIEW ME</button>
                     
                    </Box>
                    )) 
              )  } 

         </div>
           
         </div>
        </div>
        <div >
            <Footer/>
        </div>
    </div>
  )
}

export default Foodspage