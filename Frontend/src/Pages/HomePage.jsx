import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import Cat from './Cat'
import './Crausal.css'
import Footer from './Footer'
import Navbar from './Navbar'
import { MdOutlinePets } from "react-icons/md"
import Graph from './Graph'
 import "./Homepage.css"
import Streetcat from './streetcat'
import Birds from './birds'
import Rabbit from './rabbits'
import bone from "../Resources/bone.png"
import sitdog from "../Resources/sitdog.png"
import fibone from "../Resources/fibone.png"
import cati from "../Resources/cati.png"
import parrot from "../Resources/parrot.png"
import bbirds from "../Resources/bbirds.png"
import carrot from "../Resources/carrot.png"
import bunny from "../Resources/bunny.png"
import Slider, { ProductCarousel } from './customslider'
import { useDispatch, useSelector } from 'react-redux'
import { GetfoodlideShowSuccess, GetGROOMSlideShowFailure, GetGROOMSlideShowRequest, GetGROOMSlideShowSuccess } from '../Redux/AppReducer/Action'
import axios from 'axios'
import bush from "../Resources/bushes.png"

import Autocrausel from './Autocrausal'

const HomePage = () => {
  const dispatch=useDispatch()
const foodData=useSelector((store)=>store.FoodSlideShow)
 const groomData=useSelector((store)=>store.GroomSlideShow )


  // grooming
  const groomslider=()=>{
    dispatch(GetGROOMSlideShowRequest())
    axios.get("https://breakable-trench-coat-deer.cyclic.app/pets/all/care")
    .then((res)=>{
      dispatch(GetGROOMSlideShowSuccess(res.data.cares))
    })
    .catch((er)=>{
      dispatch(GetGROOMSlideShowFailure())
    })
  }
// food
const foodslider=()=>{
  dispatch(GetGROOMSlideShowRequest())
  axios.get("https://breakable-trench-coat-deer.cyclic.app/pets/all/food")
  .then((res)=>{
    dispatch(GetfoodlideShowSuccess(res.data.foods))
  })
  .catch((er)=>{
    dispatch(GetGROOMSlideShowFailure())
  })
}


  useEffect(()=>{
    groomslider()
    foodslider()
  },[])
  
  return (
    <Box className='home_wrap' >
      <Box >
        <Navbar/>
        </Box>
        <Box mt={"10px"}>
        <Autocrausel/>
        </Box>
        <Box >
        <Box width={"98%"}  mt={"50px"} >
          <Center>
          <Flex gap={"5px"}>
            <Center>
         
         < MdOutlinePets/>
         </Center>
        
           <h1 style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight:"bolder"}}>HOME FOR HOMELESS</h1>
          
           <Center>
           < MdOutlinePets/>
          
           </Center>
           </Flex>
           </Center>
          <div className='graph_card'>
            <div id="dog">
              <Graph/>
              <div>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder"}}>TOTAL DOGS IN INDIA:<span style={{color:"white"}}>62,000000</span></h3>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder",lineHeight:"40px"}}>STREET DOGS IN INDIA:<span style={{color:"white"}}>102,00000</span></h3>
              </div>
              
            </div>
            <div className='data_pets'>
              
                <h1>Dogs Are <span style={{color:"red"}}>INCREDIBLE</span></h1>
                <div className='data_fill'>
                  <p>Dogs can be there for you even when people can't. They offer unconditional love, emotional support, and constant cuddles that help stave off social isolation.Be a dog parent and love them like your child.</p>
                  <img src={bone} style={{width:"50px", opacity:0.5}} alt="" />
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div>
                  <ul style={{marginLeft:"38px",color:"red"}}>WHY DOGS?</ul>
                  <li>Dogs can read our emotions</li>
                  <li>Dogs Can Make You Happier.</li>
                  <li>Dogs Can Keep You Safe.</li>
                  </div>
                  <div>
                  <img src={sitdog}  style={{width:"210px",opacity:0.9}} alt="" />
                  </div>
                  </div>
                  <p><span style={{color:"red"}}>Shop</span> your favrouite Dog partner from here.</p>
                </div>
              </div>
              <div className='data_pets'>
              
                <h1>Cats Are <span style={{color:"red"}}> LOVABLE</span></h1>
                <div className='data_fill'>
                  <p>Mikel Delgado, cat behavior expert with Rover, confirmed that cats can, indeed, feel affection for humans. “Cats can have a lot of the same emotions that we do, including liking to be around us and enjoying our presence,” .</p>
                  <img src={fibone} style={{width:"80px", opacity:0.5}} alt="" />
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div>
                  <ul style={{marginLeft:"38px",color:"red"}}>WHY CATS?</ul>
                  <li>Cat has the ability to both calm your nervous system.</li>
                  <li> Cat affectionate with their owners and people they trust.</li>
                  <li>Cats Protect Your Home From Pests.</li>
                  </div>
                  <div>
                  <img src={cati}  style={{width:"150px",opacity:0.9}} alt="" />
                  </div>
                  </div>
                  <p><span style={{color:"red"}}>Shop</span> your favrouite Cat partner from here.</p>
                </div>
              </div>
            <div id="cat">
              <Streetcat/>
            <div>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder"}}>TOTAL CATS IN INDIA:<span style={{color:"white"}}>121 BILLION</span></h3>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder",lineHeight:"40px"}}>STREET CATS IN INDIA:<span style={{color:"white"}}>91 LAKH</span></h3>
              </div>
            </div>
            
            <div id="birds">
              <Birds/>
            <div>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder"}}>TOTAL BIRDS SPECIES IN INDIA:<span style={{color:"white"}}>1324</span></h3>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder",lineHeight:"40px"}}>BIRDS DIED ANUALLY:<span style={{color:"white"}}>30,000</span></h3>
              </div>
            </div>
            <div className='data_pets'>
              
                <h1>Birds Are <span style={{color:"red"}}>PRETTIEST</span></h1>
                <div className='data_fill'>
                  <p>Birds become 'possessive' and tend to bond to one person in particular so it is a good idea to keep the bird interacting with all the family members</p>
                  <img src={bbirds} style={{width:"50px", opacity:0.5}} alt="" />
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div>
                  <ul style={{marginLeft:"38px",color:"red"}}>WHY BIRDS?
                  </ul>
                  <li>Birds can be A Beautiful Addition to Your Life</li>
                  <li>Low Maintenance Pets. </li>
                  <li>Birds Are Extremely Intelligent, Easy to Train, and Social.</li>
                  </div>
                  <div>
                  <img src={parrot}  style={{width:"130px",opacity:0.9}} alt="" />
                  </div>
                  </div>
                  <p><span style={{color:"red",marginTop:"-80px"}}>Shop</span> your favrouite Birds  from here.</p>
                </div>
              </div>
              <div className='data_pets'>
              
              <h1>Rabbits Are <span style={{color:"red"}}>JOYFUL</span></h1>
              <div className='data_fill'>
                <p>Are rabbits a good pet
Image result for rabbits as a pet
Rabbits make great pets. In general rabbits need appropriate housing, exercise, socialisation and a specific diet for good welfare. Some breeds of rabbits, particularly the longer haired rabbits, may require daily grooming.</p>
                <img src={carrot} style={{width:"50px", opacity:0.5}} alt="" />
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>
                <ul style={{marginLeft:"38px",color:"red"}}>WHY RABBITS?</ul>
                <li>They Have Big Personalities. </li>
                <li>They're Economic to Keep.</li>
                <li>They're Good House Pets.</li>
                </div>
                <div>
                <img src={bunny}  style={{width:"210px",opacity:0.9}} alt="" />
                </div>
                </div>
                <p><span style={{color:"red"}}>Shop</span> your favrouite Bunny partner from here.</p>
              </div>
            </div>
            <div id="rabbits">

              <Rabbit/>
            <div>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder"}}>TOTAL RABBITS SPECIES IN INDIA:<span style={{color:"white"}}>50</span></h3>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder",lineHeight:"40px"}}>RABBITS DIED ANUALLY:<span style={{color:"white"}}>15,000apx.</span></h3>
              </div>
            </div>
            
            {/* <Graph/> */}
          </div>
          </Box>
{/* home for homeless */}

        </Box>
        {/* product crausal */}
        <Box mt={"200px"}>
          <Box>
          <Center>
          <Flex gap={"5px"}>
            <Center>
         
         < MdOutlinePets/>
         </Center>
           <h1 style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight:"bolder"}}>GROOM YOUR PETS</h1>
           <Center>
           < MdOutlinePets/>
           </Center>
           </Flex>
           </Center>
          </Box>
          <Box>
          <Center>
          <Flex gap={"18px"} mt={"15px"}>
            
          <button style={{color:"#f7c719",fontSize:"15px"}} className="button-89">Dogs</button>
          <button style={{color:"#f7c719",fontSize:"15px"}}  className="button-89">Cats</button>
          <button style={{color:"#f7c719",fontSize:"15px"}}  className="button-89">Birds</button>
          <button style={{color:"#f7c719",fontSize:"15px"}} className="button-89">Rabbits</button>
          
           </Flex>
           </Center>
          </Box>

</Box>
<Box>
  <ProductCarousel data={groomData}/>
</Box>

        <Box  width={"98%"} mt={200} >
        <Center>
          <Flex gap={"5px"}>
            <Center>
         
         < MdOutlinePets/>
         </Center>
           <h3 style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight:"bolder"}}>GET YOUR PET PARTNER</h3>
           <Center>
           < MdOutlinePets/>
          
           </Center>
           </Flex>
           </Center>
           <div className='products'>
            <div className='prd'> 
            <img src="https://www.pedigree.in/cdn-cgi/image/format%3Dauto%2Cq%3D90/sites/g/files/fnmzdf1241/files/2022-04/hero-icon-Jack.png" alt="dog" />
            </div>  
            <div className='prd2'>
            <div>
            <div class="overlay">
           <div class="text">CLICK HERE TO BUY YOUR PET DOGS</div>
             </div>
            </div>
            <div>
            <div class="overlay">
           <div class="text">CLICK HERE TO BUY YOUR PET CATS</div>
             </div>
            </div>
            <div>
            <div class="overlay">
           <div class="text">CLICK HERE TO BUY YOUR PET BIRDS</div>
             </div>
            </div>
            <div>
            <div class="overlay">
           <div class="text">CLICK HERE TO BUY YOUR PET RABBITS</div>
             </div>
            </div>
            </div>
            <div className='prd'>
            <img src="https://classic.cdn.media.amplience.net/i/petsathome/rabbit-and-lizzrd-vip-footer?w=312&" alt="" />
            </div>
           </div>
           
        </Box>
        {/* CARAUSAL 2 */}
        <Box mt={"200px"}>
          <Box>
          <Center>
          <Flex gap={"5px"}>
            <Center>
         
         < MdOutlinePets/>
         </Center>
           <h1 style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight:"bolder"}}>FEED YOUR PETS</h1>
           <Center>
           < MdOutlinePets/>
           </Center>
           </Flex>
           </Center>
          </Box>
          <Box>
          <Center>
          <Flex gap={"19px"} mt={"15px"}>
            
          <button style={{color:"#f7c719",fontSize:"15px"}} className="button-89">Dogs</button>
          <button style={{color:"#f7c719",fontSize:"15px"}}  className="button-89">Cats</button>
          <button style={{color:"#f7c719",fontSize:"15px"}}  className="button-89">Birds</button>
          <button style={{color:"#f7c719",fontSize:"15px"}} className="button-89">Rabbits</button>
          
          
          
           </Flex>
           </Center>
          </Box>

</Box>
<Box>
  <ProductCarousel data={foodData}/>
</Box>
       
        <Box mt={"25px"}>
      <Footer/>
    </Box>
    </Box>
  )
}

export default HomePage