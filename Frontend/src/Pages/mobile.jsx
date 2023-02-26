import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react';
import {  IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import logo from "../Resources/petlogo.png"


const Mobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    const tabs = [
        {name: "Home",
         id:1},
        {name: "carepage",id:2},
        {name: "foodpage",id:3},
        {name: "sign up",id:4},
        {name: "logout",id:4}]
        const [,setVisible] = useState(false)
        const closeMenu = ()=>{
            setVisible(true)
        }    
    return (
        <Box zIndex={"999"} position={"sticky"} top={"0px"}>
            <Flex color={"white"} backgroundColor={"#f7c719"} h="auto" padding={5} justifyContent={'space-between'}>
                <Center fontWeight={'bold'} fontSize="20px">
                <img
              style={{ height: "60px", width: "220px", marginRight: "90px" }}
              src={logo}
              alt=""
            />
                </Center>
            <Button ref={btnRef} colorScheme='yellow' onClick={onOpen}>
            <IoMdMenu size="26px" />
            </Button>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                colorScheme='yellow'
                backgroundColor="yellow"

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody>
                        {
                            tabs.map(({name}, index)=>(
                                <Link to={name} spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{closeMenu()}} key={index}>
                                <Box cursor={"pointer"} key={index} onClick={onClose} marginBottom={9} textAlign={"center"}>{name}</Box></Link>
                            ))
                        }
                        
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Mobile