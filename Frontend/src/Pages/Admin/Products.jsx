import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from './AdminNav'
const AdminPets = () => {
  return (
    <Box>
       <AdminNavbar>
        <SimpleGrid columns={2}>
            <Center>
            <Center>
            <Box p={"15px"}>ADD PETS</Box>
            </Center>
            <Center>
            <Box p={"15px"}>DELETE PETS</Box>
            </Center>
            <Center>
            <Box p={"15px"}>MODIFY PETS</Box>
            </Center>
            </Center>
        </SimpleGrid>
       </AdminNavbar>
    </Box>
  )
}

export default AdminPets