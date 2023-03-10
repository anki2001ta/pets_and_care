import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  Link,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Center,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { RiLoginBoxFill } from 'react-icons/ri'
import { ReactText } from 'react';
import logo from "../../Resources/petlogo.png"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const LinkItems= [
    { name: 'ADMIN PANEL',style:"bold", text:"underline" },
  { name: 'Dashboard', icon: FiHome,path:"/admin" },
  { name: 'Profile', icon: FiTrendingUp ,path:"/admin/profile"},
  { name: 'Management', icon: FiStar,path:"/admin/management" },
  { name: 'Purchase History', icon: FiSettings,path:"/admin/purchase" },
  { name: 'PRODUCTS DATA',style:"bold", text:"underline"  },
  { name: 'Pets', icon: FiCompass,path:"/admin/pets" },
  { name: 'Grooming', icon: FiCompass ,path:"/admin/admingroom"},
  { name: 'Nourishment', icon: FiCompass,path:"/admin/adminfood" },
];

export default function ANavbar({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  const Navigate=useNavigate();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#fcd236', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
         <img src={logo} alt="" />
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Box onClick={()=>Navigate(link.path)}>
        <NavItem key={link.name} icon={link.icon} fontWeight={link.style==undefined?null:link.style} textDecoration={link.text==undefined?null:link.text} >
          {link.name}
           
        </NavItem>
       </Box>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>

      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
       
        _hover={{
          bg: 'gray.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const navigate=useNavigate();
  const handlelogout =()=>{
    navigate("/login")
  };

  
  const user = useSelector((store) => store.user);
  return (
    
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('gray.400', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        
      </Text>

      <HStack  spacing={{ base: '0', md: '6' }}>
        
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{user.name}</Text>
                  <Text fontSize="xs" color="yellow.300">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('#fcd236', 'gray.900')}
              borderColor={useColorModeValue('#fcd236','#fcd236')}>
              <MenuDivider />
                <Center>
              <MenuItem bgColor={"#fcd236"} onClick={handlelogout}>Log out
              <RiLoginBoxFill/></MenuItem>
              </Center>
            </MenuList>
          </Menu>
        </Flex>
       
      </HStack>
      
    </Flex>
  
   
  );
};