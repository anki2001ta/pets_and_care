import {
  Avatar,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import "./Navbar.css";
import logo from "../Resources/petlogo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { useRef } from "react";
import cat from "../Resources/cutecat.png";
import dog from "../Resources/dog.png";
// import {FaBars,FaTimes} from "react-icons/fa"
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import { GetProductFailure, GetSearchRemove, GetSearchSuccess, PostUserSuccess } from "../Redux/AppReducer/Action";

const Navbar = () => {
  let userInput = useRef();
  const Toast = useToast();
  const dispatch = useDispatch();
  let searchPets = useSelector((store) => store.searchData);
  const user = useSelector((store) => store.user);
  // console.log(userInput.current);
  const Navigate=useNavigate()
  const debounced = useDebouncedCallback(() => {
    axios
      .get(
        `https://breakable-trench-coat-deer.cyclic.app/pets/pet/search?petname=${userInput.current.value}`
      )
      .then((r) => {
        dispatch(GetSearchSuccess(r.data.searchData));
      })
      .catch(()=>{
        dispatch(GetProductFailure())
      })
  }, 1500);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const refer = useRef();
  const handleCart=()=>{
    if(user.token==""){
      Toast({
        title: "Please login first",
        status: "warning",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
      setTimeout(()=>{
        Navigate("/login");
      },1500)
    }else{
      Navigate("/cart");
    }
  }
  const handleLog=(method)=>{
    if(method=="signin"){
      Navigate("/login");
    }
    else{
      dispatch(PostUserSuccess({}))
      Navigate("/login");
    }
  }
  const handledrawer = () => {
    onOpen();
  };
  const handlesearch=(id)=>{
    try {
      userInput.current.value="";
      Navigate(`/individualpage/pets/${id}`)
      dispatch(GetSearchRemove());
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box>
      <Box
        className="nav2"
        justifyContent={"space-around"}
        zIndex={0}
        bgColor={"#f7c719"}
        h={"85px"}
        display={"flex"}
        color="white"
      >
        <Drawer
          id="drawer"
          placement={"top"}
          onClose={onClose}
          isOpen={isOpen}
          ref={refer}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody p={"0px"}>
              <Box bgColor="#f7c719" backdropFilter={"blur(5px)"}>
                <Box marginLeft={"20px"} fontSize={"25px"}>
                  <GrClose onClick={onClose} />
                </Box>
              </Box>
              <Box ref={refer} bgColor="#f7c719" opacity={1} h ={"400px"}>
                <Box bgColor="transparent" h={"100%"} p={"50px"}>
                  <Center>
                    <input
                      ref={userInput}
                      type="text"
                      placeholder="Search your pet partner here"
                      id="input"
                      onChange={debounced}
                    />
                  </Center>
                  <Center>
                    <Box
                      bgColor={searchPets?.length <= 0 ? "#f7c719" : "white"}
                      h={"300px"}
                      w={"700px"}
                      borderRadius={"10px"}
                      overflow={"scroll"}
                      opacity={searchPets?.length <= 0 ? "0" : "1"}
                      pointerEvents={searchPets.length <= 0 ? "none":"auto"}
                    >
                      {searchPets.length > 0 &&
                        searchPets.map(({ url, name,_id }) => (
                          <Flex
                            gap={"10px"}
                            p={"10px"}
                            border={"0.5px solid gray"}
                            padding={"3px"}
                            cursor={"pointer"}
                            onClick={()=>handlesearch(_id)}
                          >
                            <Center>
                              <Box>
                                <Image h={"60px"} w={"70px"} src={url} />
                              </Box>
                            </Center>
                            <Center>
                              <Text>{name}</Text>
                            </Center>
                          </Flex>
                        ))}
                    </Box>
                  </Center>
                  <Flex justifyContent={"space-between"}>
                    <img
                      src={dog}
                      style={{
                        marginLeft: "-60px",
                        width: "420px",
                        height: "250px",
                        marginTop: "-240px",
                      }}
                    />
                    <img
                      src={cat}
                      style={{
                        width: "380px",
                        height: "250px",
                        marginTop: "-250px",
                      }}
                    />
                  </Flex>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* <Box className="nav_barl2"> */}
        <Center>
          <Flex className="nav_data2" gap={25} pt={10} ml={"-8%"} pb={10}>
            <Link to="/">
              <h2 >HOME</h2>
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
          <Box className="logo2" pt={5} pb={5}>
            <img
              style={{ height: "60px", width: "220px", marginRight: "90px" }}
              src={logo}
              alt=""
            />
          </Box>
        </Center>
        <Center>
          <Box className="nav_barR2">
            <Box className="navv_barR2">
              <Flex gap={8}>
                <Box onClick={handledrawer}>
                  <FaSearch />
                </Box>

                <Flex>
                  {/* <GoPerson/>
       <Link to="/signup">
       <h1 id="contact" style={{lineHeight:"12px"}}>SignUp</h1>
       </Link> */}

                  <Menu bgColor={"#f7c719"}>
                    <MenuButton
                      bgColor={"#f7c719"}
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Avatar size={"xs"} src={GoPerson} />
                    </MenuButton>
                    <MenuList alignItems={"center"} zIndex={100}>
                      <Box bgColor={"#f7c719"} color={"black"}>
                        <br />
                        <Center>
                          <Avatar size={"xl"} src={GoPerson} />
                        </Center>
                        <br />
                        <Center>
                          <p className="username_data">
                            {user?.name == "" ? "GUEST" : user.name}
                          </p>
                        </Center>
                        <MenuDivider />
                        <Box fontSize={"16px"}>
                          <MenuItem
                            fontWeight={600}
                            bgColor={"blackAlpha.100"}
                            color={"black"}
                          >
                            <Box onClick={user.name == "" ? ()=>handleLog("signin") : ()=>handleLog("signout")}>{user.name == "" ? "SignIn" : "LogOut"}</Box>
                          </MenuItem>
                          {
                            user.name!=""?(
                              <Link to={"/user"}>
                              <MenuItem
                                fontWeight={600}
                                bgColor={"blackAlpha.100"}
                                color={"black"}
                              >
                                My Account
                              </MenuItem>
                              </Link>
                            ):null
                          }
                        </Box>
                      </Box>
                    </MenuList>
                  </Menu>
                </Flex>
                <Box onClick={handleCart}>
                <FaShoppingCart /></Box>
                {/* <div id="mobile" onClick={()=>setNav(!nav)}>
       {nav?<FaTimes size={18}/>:<FaBars size={18}/>}
    </div> */}
              </Flex>
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Navbar;
