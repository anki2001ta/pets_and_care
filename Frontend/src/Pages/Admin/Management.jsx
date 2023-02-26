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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import AddModal from "./AddModal";
import AdminNavbar from "./AdminNav";
import axios from "axios";
import { useSelector } from "react-redux";
const Management = () => {
  const [user, setUser] = useState([]);
  const url = useRef();
  const id = useRef();
  const name = useRef();
  const breed = useRef();
  const color = useRef();
  const price = useRef();
  const category = useRef();
  const stock = useRef();
  const Toast = useToast();
  const users = useSelector((store) => store.user);
  const getData = () => {
    axios.get(`${process.env.REACT_APP_URL}/user/alluser`,{
      headers: {
        Authorization: `Bearer ${users.token}`,
      },
    }).then((r) => {
      setUser(r.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleEdit = () => {
    let payload = {};
    if (url.current.value !== "") {
      payload.url = url.current.value;
    }
    if (name.current.value !== "") {
      payload.name = name.current.value;
    }
    if (breed.current.value !== "") {
      payload.breed = breed.current.value;
    }
    if (color.current.value !== "") {
      payload.color = color.current.value;
    }
    if (price.current.value !== "") {
      payload.price = price.current.value;
    }
    if (category.current.value !== "") {
      payload.category = category.current.value;
    }
    if (stock.current.value !== "") {
      payload.stock = stock.current.value;
    }
    axios
      .patch(
        `${process.env.REACT_APP_URL}/user/usersupdate/${id.current}`,
        payload
      )
      .then(() => {
        Toast({
          title: "Updated",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
        onClose();
        getData();
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_URL}/user/usersdelete/${id}`)
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
        <TableContainer>
          <Table size="sm" variant='striped' colorScheme='teal'>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Admin Access</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {user?.length > 0 &&
                user?.map((el) => (
                  <Tr>
                    <Td>{el.name}</Td>
                    <Td>{el.email}</Td>
                    <Td>{el.administration?"Yes":"No"}</Td>
                    <Td>
                      <Button bgColor="red" onClick={()=>handleDelete(el._id)}>Delete</Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </AdminNavbar>
    </Box>
  );
};

export default Management;
