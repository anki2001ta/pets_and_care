import {
  Box,
  Button,
  Center,
  Divider,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid,
  useToast,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  Input,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import "./Admin.css";
import React from "react";
import { useState } from "react";
import AdminNavbar from "./AdminNav";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
import AddModal from "./AddModal";
const AdminFood = () => {
  const [pet, setPets] = useState([]);
  const [page, setPage] = useState(1);
  const url=useRef();
  const id=useRef();
  const name=useRef();
  const breed=useRef();
  const color=useRef();
  const price=useRef();
  const category=useRef();
  const stock=useRef();
  const Toast = useToast();
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/pets/care/groom?page=${page}`)
      .then((r) => {
        setPets(r.data.caredata);
      });
  };
  useEffect(() => {
    getData();
  }, [page]);
  const handleEdit = () => {
    let payload={};
    if(url.current.value!==""){
      payload.url=url.current.value;
    }
    if(name.current.value!==""){
      payload.name=name.current.value;
    }
    if(breed.current.value!==""){
      payload.breed=breed.current.value;
    }
    if(color.current.value!==""){
      payload.color=color.current.value;
    }
    if(price.current.value!==""){
      payload.price=price.current.value;
    }
    if(category.current.value!==""){
      payload.category=category.current.value;
    }
    if(stock.current.value!==""){
      payload.stock=stock.current.value;
    }
    axios.patch(`${process.env.REACT_APP_URL}/pets/petsupdate/${id.current}`,payload)
    .then(()=>{
      Toast({
        title: "Updated",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
      onClose();
      getData();
    })
  };
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_URL}/pets/groomdelete/${id}`)
      .then(() => {
        Toast({
          title: "Deleted",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
        getData();
      });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <Flex direction={"column"} gap={"20px"}>
            <Input ref={url} placeholder="Image"></Input>
            <Input ref={name} placeholder="Name"></Input>
            <Input ref={breed} placeholder="Breed"></Input>
            <Input ref={color} placeholder="Color"></Input>
            <Input ref={price} placeholder="Price" type={"number"}></Input>
            <Input ref={category} placeholder="Category"></Input>
            <Input ref={stock} placeholder="Stock" type={"number"}></Input>
          </Flex>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={handleEdit}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AdminNavbar>
        <Flex justifyContent={"flex-end"} mb={"10px"}>
          <AddModal getData={getData}/>
        </Flex>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={"15px"}>
          {pet.length > 0 &&
            pet.map((el) => (
              <Card maxW="sm">
                <CardBody>
                  <Center>
                    <Image h={"200px"} w={"200px"} src={el.url} />
                  </Center>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{el.name}</Heading>
                    <Text color="blue.600" fontSize="2xl">
                      ${el.Price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Flex justifyContent={"space-between"} w={"100%"}>
                    <Button variant="solid" colorScheme="blue" onClick={()=>{
                      onOpen();
                      id.current=el._id;
                    }}>
                      Edit
                    </Button>
                    <Button
                      variant="solid"
                      colorScheme="red"
                      onClick={() => handleDelete(el._id)}
                    >
                      Delete
                    </Button>
                  </Flex>
                </CardFooter>
              </Card>
            ))}
        </SimpleGrid>
        <Flex justifyContent={"space-around"} mt={"20px"}>
          <Button
            bgColor={"#f7c719"}
            className="prodbtn"
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          >
            Prev
          </Button>
          <Text>{page}</Text>
          <Button
            bgColor={"#f7c719"}
            className="prodbtn"
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Next
          </Button>
        </Flex>
      </AdminNavbar>
    </Box>
  );
};

export default AdminFood;
