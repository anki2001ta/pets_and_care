import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Autocrausel from './Autocrausal'
import Cat from './Cat'
import Footer from './Footer'
import Navbar from './Navbar'
import { MdOutlinePets } from "react-icons/md"
import Graph from './Graph'

const HomePage = () => {
  return (
    <Box>
      <Box>
        <Navbar/>
        </Box>
        <Box>
          <Autocrausel/>
        </Box>
        <Box margin={"auto"} width={"98%"}  mt={3}>
          <Center>
          <Flex gap={"5px"}>
            <Center>
         < MdOutlinePets/>
         </Center>
           <Text >STREET DOGS IN INDIA</Text>
           <Center>
           < MdOutlinePets/>
           </Center>
           </Flex>
           </Center>
          <Box>
            <Graph/>
          </Box>

           
        </Box>
       
    </Box>
  )
}

export default HomePage