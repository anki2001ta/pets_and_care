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

const HomePage = () => {
  return (
    <Box>
      <Box>
        <Navbar/>
        </Box>
        <Box>
          <Autocrausel/>
        </Box>
        <Box margin={"auto"} width={"98%"}  mt={5}>
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
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder"}}>TOTAL DOGS IN INDIA:<span style={{color:"red"}}>62,000000</span></h3>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder",lineHeight:"40px"}}>STREET DOGS IN INDIA:<span style={{color:"red"}}>102,00000</span></h3>
              </div>
            </div>
            <div id="cat">
              <Streetcat/>
            <div>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder"}}>TOTAL CATS IN INDIA:<span style={{color:"red"}}>121 BILLION</span></h3>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder",lineHeight:"40px"}}>STREET CATS IN INDIA:<span style={{color:"red"}}>91 LAKH</span></h3>
              </div>
            </div>
            <div id="birds">
              <Birds/>
            <div>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder"}}>TOTAL BIRDS SPECIES IN INDIA:<span style={{color:"red"}}>1324</span></h3>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder",lineHeight:"40px"}}>BIRDS DIED ANUALLY:<span style={{color:"red"}}>30,000</span></h3>
              </div>
            </div>
            <div id="rabbits">
              <Rabbit/>
            <div>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder"}}>TOTAL RABBITS SPECIES IN INDIA:<span style={{color:"red"}}>50</span></h3>
                <h3 style={{color:"black",fontFamily:"Verdana, Arial, Tahoma, Serif", fontWeight:"bolder",lineHeight:"40px"}}>RABBITS DIED ANUALLY:<span style={{color:"red"}}>15,000apx.</span></h3>
              </div>
            </div>
            
            {/* <Graph/> */}
          </div>

           
        </Box>
       
    </Box>
  )
}

export default HomePage