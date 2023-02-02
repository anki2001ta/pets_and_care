import { Box, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import "./Navbar.css"
import logo from"../Resources/petlogo.png"
import { FaSearch ,FaShoppingCart} from "react-icons/fa"
import { GoPerson} from "react-icons/go"
import { useRef } from 'react'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const refer=useRef()

const handledrawer=()=>{
 console.log(refer)
 onOpen()
}

  return (
    <Box className='nav'>
    <Box ref={refer} h={"350px"}>
       <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} ref={refer} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
        <Box className="nav_barl">
            <Box className='nav_data'>
           
            <h2>HOME</h2>
            <h2>GROOMING</h2>
            <h2>NURISHMENT</h2>
            <h2>EXPLORE</h2>
           
            </Box>
        </Box>
        <Center>
        <Box className='logo'>
           
           <img style={{height:"60px",width:"220px"}} src={logo} alt="" />
          
        </Box>
        </Center>
      <Box className='nav_barR'>
        <Center>
        <Box className='navv_barR'>
        
        <Flex gap={8}>
          <Box onClick={handledrawer}>
        <FaSearch />
        </Box>
        
        <Flex>
           
       <GoPerson/>
       <h1 id="contact" style={{lineHeight:"12px"}}>SignUp</h1>
       </Flex>
       <FaShoppingCart/>
       </Flex>
        </Box>
       
        </Center>
       

      </Box>
    
    </Box>
  )
}

export default Navbar