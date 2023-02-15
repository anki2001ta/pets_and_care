import React from "react";

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
  useToast,
  Center,
  Divider,
} from "@chakra-ui/react";
import { MdOutlinePets } from "react-icons/md";
import { useContext, useState } from "react";
import "./toast.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useFire } from "../Components/firebaseconfig";

export default function Signup() {
  const { HandleFacebook, HandleGoogle, HandleSignout } = useFire();
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateUser = useNavigate();
  const toast = useToast();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    axios
      .post("https://breakable-trench-coat-deer.cyclic.app/signup", payload)
      .then((res) => {
        console.log(res.data);

        if (res.status === 200) {
          navigateUser("/login");
        }
      });
  };
  const HandgoogleSignUp = () => {
    try {
      HandleGoogle();
    } catch (err) {
      console.log(err);
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
      bgSize={{md:"100%",lg:"100%",base:"100%"}}
      size="100%"
    >
      <div id="toast"></div>
      <Center>
        <Box
          mt={{md:"0%",lg:"3%",base:"0%"}}
          alignItems={"center"}
          justifyContent={"center"}
          w={{md:"100%",lg:"50%",base:"100%"}}
          borderRadius="10px"
          
        >
          <Box
            bg="white"
            p={39}
            rounded="md"
            textAlign={"center"}
            backgroundColor={"transparent"}
            backdropFilter={"blur(5px)"}
          >
            <Heading variant={"solid"} color="black">
              <MdOutlinePets fontSize={{md:"20px",lg:"40px",base:"8px",sm:"7px"}} />
              CREATE ACCOUNT{" "}
            </Heading>
            <form onSubmit={HandleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel
                    htmlFor="name"
                    variant={"smooth"}
                    fontSize={"17px"}
                  >
                    <b> Username</b>
                  </FormLabel>
                  <Input
                    isInvalid
                    errorBorderColor="black"
                    id="name"
                    name="name"
                    type="name"
                    required={true}
                    placeholder="Enter a name"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    htmlFor="email"
                    variant={"smooth"}
                    fontSize={"17px"}
                  >
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
                  <FormLabel
                    htmlFor="password"
                    variant={"smooth"}
                    fontSize={"17px"}
                  >
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
                  CREATE ACCOUNT
                </Button>
                <Box alignSelf="center">
                  <Text fontSize="17px">
                    <b>
                      {" "}
                      Already a member? <Link to="/login">Sign in</Link>
                    </b>
                  </Text>
                </Box>
                <Box alignSelf="center">
                  <Text variant={"outline"} fontSize={{md:"15px",lg:"17px",base:"12px"}}>
                    <b>
                      {" "}
                      By signing up, you agree to the Pets&Care Terms of Use and
                      Privacy Policy. We respect and protect your information
                      and privacy.
                    </b>
                  </Text>
                </Box>
              </VStack>
            </form>
            <Box direction={{ base: "column", md: "column", lg: "row" }}>
              <Flex m={"10px"} justifyContent="center" alignItems={"center"}>
                <Box
                  border={"1px solid black"}
                  w="35%"
                  h="0px"
                  m={"10px"}
                ></Box>

                <Center>
                  <Text fontWeight={700}>Or sign up with</Text>
                </Center>

                <Box
                  border={"1px solid black"}
                  w="35%"
                  h="0px"
                  m={"10px"}
                ></Box>
              </Flex>
              <Flex gap={4} justifyContent="center" mt={"10px"}>
                <Box>
                  <Button colorScheme={"#50b6ff"} >
                    <Box fontSize={"30px"} onClick={HandgoogleSignUp}>
                      <FcGoogle />
                    </Box>
                  </Button>
                </Box>
                <Button onClick={handleFacebookSignUp} colorScheme={"#50b6ff"}>
                  <Box fontSize={"30px"} color="black">
                    <BsFacebook />
                  </Box>
                </Button>
                <Box></Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
