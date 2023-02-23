import {
  Box,
  Button,
  Center,
  Flex,
  grid,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsCalendar2Check } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "./../Navbar";

const AccountPage = () => {
  const [val, setVal] = useState({});
  const user = useSelector((store) => store.user);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/user`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((r) => {
        setVal(r.data[0]);
      });
  }, []);

  return (
    <Box>
      <Navbar />
    <Box bg={"whitesmoke"} padding={{ lg: "50px 150px", base: "10px" }}>
      
      <Heading
        textAlign={{ base: "center", md: "left" }}
        mb="20px"
        fontSize="25px"
        as="h2"
      >
        My Account
      </Heading>

      <Grid
        bg={"whitesmoke"}
        templateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
        gap={6}
      >
        <GridItem
          p={"25px"}
          borderRadius={"10px"}
          w={{ lg: "80%", base: "95%" }}
          h="240px"
          bg="#008ecc"
        >
          <Grid
            color={"white"}
            bg="#008ecc"
            templateColumns="repeat(2, 1fr)"
            gap={2}
          >
            <GridItem fontSize={"60px"} w="30%" h="50" bg="#008ecc">
              {" "}
              <CgProfile />{" "}
            </GridItem>
            <GridItem
              ml={{ lg: "-115px", base: "-95px" }}
              w="100%"
              h="10"
              bg="#008ecc"
            >
              <Text as={"b"}>{`${val.name} `}</Text> <br />
              <Text as={"i"} color={"#cecece"} fontSize={"12px"}>
                {val.email}
              </Text>
            </GridItem>

            <GridItem
              mt={"25px"}
              fontSize={"12px"}
              fontWeight={"bold"}
              borderRadius={"5px"}
              w="100%"
              p={"15px"}
              h="50px"
              bg="#66bbe0"
            >
              <Flex>
                <Box fontSize={"25px"} mr="15px">
                  <BsCreditCardFill />
                </Box>
                <Box>Payment Method</Box>
              </Flex>
            </GridItem>
            <GridItem
              mt={"25px"}
              fontSize={{ lg: "14px", base: "12px" }}
              fontWeight={"bold"}
              borderRadius={"5px"}
              p={"15px"}
              w="100%"
              h="50px"
              bg="#66bbe0"
            >
              <Flex>
                <Box fontSize={"25px"} mr="15px">
                  <BsCalendar2Check />
                </Box>
                <Box>Order history</Box>
              </Flex>
            </GridItem>

            <GridItem
              fontSize={"14px"}
              fontWeight={"bold"}
              borderRadius={"5px"}
              p={"15px"}
              w="204%"
              h="50px"
              bg="#66bbe0"
            >
              <Flex>
                <Box fontSize={"25px"} mr="15px">
                  <MdLocationOn />
                </Box>
                <Box> Delivery Addresses</Box>
              </Flex>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
    </Box>
  );
};

export default AccountPage;
