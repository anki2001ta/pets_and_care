import { Avatar, Box, Button, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import "./Navbar.css"
import logo from"../Resources/petlogo.png"
import { FaSearch ,FaShoppingCart} from "react-icons/fa"
import { GrClose} from "react-icons/gr"
import { GoPerson} from "react-icons/go"
import { useRef } from 'react'
import cat from "../Resources/cutecat.png"
import dog from"../Resources/dog.png"
import Footer from './Footer'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
//import dog from"../Resources/dogi.png"

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const user=useSelector((store)=>store.user);
    const refer=useRef()

const handledrawer=()=>{
 console.log(refer)
 onOpen()
}

  return (
    <Box >
    <Box className='nav2' justifyContent={"space-around"} bgColor={"#f7c719"} h={"85px"} display={"flex"}  color="white">
    
        <Drawer id="drawer" placement={"top"} onClose={onClose} isOpen={isOpen} ref={refer}  >
      
        <DrawerOverlay />
        <DrawerContent>
          
          <DrawerBody p={"0px"}>
            <Box bgColor="#f7c719" backdropFilter={"blur(5px)"}>
            <Box  marginLeft={"20px"} fontSize={"25px"}><GrClose onClick={onClose} /></Box>
            </Box>
          <Box ref={refer} h={"450px"}  bgColor="#f7c719"  opacity={1}>
            
            <Box bgColor="transparent"   h={"100%"} p={"50px"}>
              <Center>
               <input type="text" placeholder='Search pets,products here' id="input"/>
               </Center>
              <Flex justifyContent={"space-between"} >
               <img src={dog} style={{marginLeft:"-60px", width:"420px",height:"320px",marginTop:"74px"}}/>
               <img src={cat}  style={ {width:"380px",height:"320px",marginTop:"74px"}}/>
               </Flex>
            </Box>
            
            </Box>
            
          </DrawerBody>
        </DrawerContent>
       
      </Drawer> 
      
        {/* <Box className="nav_barl2"> */}
        <Center>
            <Flex className='nav_data2' gap={25} pt={10} ml={"-8%"} pb={10}>
           <Link to="/">
            <h2>HOME</h2>
            </Link>
            <Link to="/carepage">
            <h2>GROOMING</h2>
            </Link>
            <Link to="/foodpage">
            <h2>NURISHMENT</h2>
            </Link>
            <h2>EXPLORE</h2>
           
            </Flex>
            </Center>
        {/* </Box> */}
        <Center>
        <Box className='logo2' pt={5} pb={5}>
           
           <img style={{height:"60px",width:"220px",marginRight:"90px"}} src={logo} alt="" />
          
        </Box>
        </Center>
        <Center>
      <Box className='nav_barR2'  >
       
        <Box className='navv_barR2'>
        
        <Flex gap={8}>
          <Box onClick={handledrawer}>
          
        <FaSearch />
        
        </Box>
        
        <Flex>
           
       {/* <GoPerson/>
       <Link to="/signup">
       <h1 id="contact" style={{lineHeight:"12px"}}>SignUp</h1>
       </Link> */}
      
        <Menu
        >
          
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  
                  minW={0}
                  zIndex={2000}>
                  <Avatar
                    size={"xs"}
                    
                    src={'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}
               zIndex={100} >
                <Box bgColor={"#f7c719"}
                color={"black"}>
                
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={GoPerson}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{user.name==""?"Guest":user.name}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>My Account</MenuItem>
                  <MenuItem >Logout</MenuItem>
                  </Box>
                </MenuList>
               
              </Menu>
       </Flex>
       <FaShoppingCart/>
       </Flex>
        </Box>
       
       
       
       

      </Box>
      </Center>
    
    </Box>
   
    </Box>
  )
}

export default Navbar