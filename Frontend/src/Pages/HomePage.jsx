import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Autocrausel from './Autocrausal'
import Cat from './Cat'
import Footer from './Footer'
import Navbar from './Navbar'
import { MdOutlinePets } from "react-icons/md"
import Graph from './Graph'
import "./Homepage.css"
import Streetcat from './streetcat'
import Birds from './birds'
import Rabbit from './rabbits'
import border from"../Resources/border.png"

const HomePage = () => {
  return (
    <Box className='home_wrap'>
      <Box>
        <Navbar/>
        </Box>
        <Box>
          <Autocrausel/>
        </Box>
        <Box margin={"auto"} width={"98%"}  mt={"35px"}>
          <Center>
          <Flex gap={"5px"}>
            <Center>
         
         < MdOutlinePets/>
         </Center>
        
           <h3 style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight:"bolder"}}>GRAPHICAL REPRESENTATION</h3>
          
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
        <Box margin={"auto"} width={"98%"}  mt={"100px"}>
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
       
        <Box mt={"25px"}>
      <Footer/>
    </Box>
    </Box>
  )
}

export default HomePage