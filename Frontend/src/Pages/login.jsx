import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  Center
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { MdOutlinePets} from "react-icons/md";
import {useState } from "react";
import "./toast.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useFire } from "../Components/firebaseconfig";
import {useDispatch} from "react-redux"
import { PostUserSuccess } from "../Redux/AppReducer/Action";

export default function Login() {
  const dispatch=useDispatch();
  const { HandleFacebook, HandleGoogle} = useFire();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateUser=useNavigate()
  const toast = useToast()
  const HandleSubmit = (e) => {
    e.preventDefault();
    const payload={
      email,
      password
    }
    axios.post("https://breakable-trench-coat-deer.cyclic.app/login",payload).then((res)=>{
      console.log(res.data);
      {res.data.msg=="User not found"? toast({
          title: res.data.msg,
          description: "Please login with right cridentials.",
          status: 'error',
          position:"top",
          backgroundColor:"black",
          duration: 9000,
          isClosable: true,
        }):res.data.msg==="Wrong password"?toast({
          title: res.data.msg,
          status: 'error',
          position:"top",
          backgroundColor:"black",
          duration: 9000,
          isClosable: true,
        }):toast({
          title: res.data.msg,
          description: "Now Enjoy the services",
          status: 'success',
          position:"top",
          backgroundColor:"black",
          duration: 9000,
          isClosable: true,
        })}
      if(res.data.administration==false && res.data.token!==""){
        dispatch(PostUserSuccess({name:res.data.displayName,token:res.data.token}))
        navigateUser("/")
      }
      else if(res.data.administration==true && res.data.token!==""){
        navigateUser("/admin")
      }
      else{
        toast({
          title:"Try Login Again",
          status: 'error',
          position:"top",
          backgroundColor:"black",
          duration: 9000,
          isClosable: true,
        })
      }
     
      
    }).catch((err)=>{
      toast({
          title: "Wrong Credential",
          description: "Please Login with correct details",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })

    })
   
  };
  const handlegoogleSignUp = async (e) => {
    try {
      HandleGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  const handleFacebookSignUp = async (e) => {
    e.preventDefault();
    try {
      HandleFacebook();
    } catch (err) {}
  };
  return (
    <Box
    h={{md:"100vh",lg:"100vh",base:"100vh"}}
    bgImage="url(https://img.freepik.com/premium-vector/animals-paw-print-pattern_601658-115.jpg?size=626&ext=jpg&ga=GA1.1.479537317.1675179122)"
    bgPos="center"
    bgRepeat="no-repeat"
    bgSize="100%"
    Size="100%"
    
    >
     <div id="toast"></div>
     <Center>
     
      <Box mt={"6%"} alignItems={"center"}  justifyContent={"center"}  w={{md:"100%",lg:"50%",base:"100%"}} borderRadius="10px">
         
        <Box bg="white" p={39} rounded="md" textAlign={"center"} backgroundColor={"transparent"} backdropFilter={"blur(5px)"}>
          <Heading variant={"solid"} color="black"><MdOutlinePets fontSize={{md:"20px",lg:"40px",base:"8px",sm:"7px"}}/> SIGN IN </Heading>
          <form onSubmit={HandleSubmit}>
            <VStack spacing={4} align="flex-start">
              
              <FormControl>
                <FormLabel htmlFor="email" variant={"smooth"} fontSize={"17px"}>
                 <b> Email</b>
                </FormLabel>
                <Input
                  isInvalid
                  errorBorderColor="black"
                  id="email"
                  name="email"
                  type="email"
                  required={true}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password" variant={"smooth"} fontSize={"17px"}>
                 <b> Password</b>
                </FormLabel>
                <Input
                  isInvalid
                  errorBorderColor="black"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  color="black"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button type="submit" bg="black" color="white" width="full">
              LOG IN
              </Button>
              <Box alignSelf="center">
                <Text fontSize="17px">
                 <b> Forget Password? <Link to="/signup">forgot</Link></b>
                </Text>
              </Box>
              <Box alignSelf="center">
                <Text variant={"outline"} fontSize={"17px"}>
                 <b> Thanks for SignIn for Pets & Care. Welcome to our Family</b>
                </Text>
              </Box>
              
            </VStack>
          </form>
          <Box direction={{ base: 'column', md: 'column',lg:'row' }}>
            <Flex  m={"10px"} justifyContent="center" alignItems={"center"} >
             
           <Box border={"1px solid black"} w="35%" h="0px" m={"10px"}></Box>
           
           <Center>
           <Text fontWeight={700}>Or sign in with</Text>
           </Center>
          
           <Box border={"1px solid black"} w="35%" h='0px'  m={"10px"}></Box>
         
           </Flex>
            <Flex gap={4} justifyContent="center"  mt={"10px"} >
              <Box>
                <Button
                 
                  colorScheme={"#50b6ff"}
                  onClick={handlegoogleSignUp}
                 
                >
                  <Box fontSize={"30px"} >
                  <FcGoogle  />
                  </Box>
                </Button>
              </Box> 
               <Button  colorScheme={"#50b6ff"} onClick={handleFacebookSignUp}>
                <Box fontSize={"30px"} color="black">
                <BsFacebook />
                </Box>
              </Button>
              <Box>
              </Box>
            </Flex>
           
            
          </Box>
        </Box>
     
      </Box>
      </Center>
     
    </Box>
   
  );
}
