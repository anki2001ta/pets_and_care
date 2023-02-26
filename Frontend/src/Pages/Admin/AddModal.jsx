import React, { useRef } from 'react'
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
  import axios from "axios";
const AddModal = ({getData}) => {
    const url=useRef();
  const name=useRef();
  const breed=useRef();
  const color=useRef();
  const price=useRef();
  const category=useRef();
  const stock=useRef();
  const Toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
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
        axios.post(`${process.env.REACT_APP_URL}/pets/petsCreate`,payload)
        .then(()=>{
          Toast({
            title: "Added",
            status: "success",
            duration: 1500,
            isClosable: true,
            position: "top",
          });
          onClose();
          getData();
        })
      };
  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
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
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button bgColor={"#f7c719"} onClick={onOpen}>ADD PRODUCTS</Button>
    </div>
  )
}

export default AddModal