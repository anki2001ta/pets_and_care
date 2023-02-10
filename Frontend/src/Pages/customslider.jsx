import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import { GrNext, GrPrevious } from 'react-icons/gr'; 
import { Box, Button, Center, Image, Tag, Text } from '@chakra-ui/react'; 
import "./Crausal.css"


 
const Prev = (props) => { 
    // console.log(props); 
    const { className, onClick } = props; 
    return ( 
        <> <Center>
            <Box   p={"30px 8px"} zIndex={"10"} position={"absolute"} top={"35%"} left={"0px"} onClick={onClick} > 
                <GrPrevious fontSize={"20px"} color={"#3f4246"} /> 
            </Box> 
            </Center>
        </> 
    ); 
}; 
 
const Next = (props) => { 
    // console.log(props); 
    const { className, onClick } = props; 
    return ( 
        <> 
            <Box  p={"30px 8px"} zIndex={"10"} position={"absolute"} top={"35%"} right={"0px"} onClick={onClick} > 
                <GrNext fontSize={"20px"} color={"#3f4246"} /> 
            </Box> 
        </> 
    ); 
}; 
 
 
export const ProductCarousel = ({data}) => { 
 
   
     
    // below is the amount of products want to show 
    // data = data?.filter((e, i) => i<10) 
 
    const settings = { 
        dots: false, 
        // below option is used for scroll inifite function set true to use. 
        
        infinite: true, 
        speed: 500, 
        slidesToShow: 6, 
        slidesToScroll: 1, 
        initialSlide: 0, 
        gap:10,
        autoplay:true,
        autoplaySpeed:2500,
        responsive: [ 
            { 
                breakpoint: 1240, 
                settings: { 
                    slidesToShow: 3, 
                } 
            }, 
            { 
                breakpoint: 940, 
                settings: { 
                    slidesToShow: 2, 
                } 
            }, 
            { 
                breakpoint: 640, 
                settings: { 
                    slidesToShow: 1, 
                } 
            } 
        ] 
    }; 
     
 
    return ( 
        <Box w={"98%"} m={"auto auto 50px auto"} mt={"20px"}> 
 
            <Slider {...settings} prevArrow={<Prev />} nextArrow={<Next />} > 
 
                { 
                    data?.map((item) => ( 
                      <Box  id='trending' h={"350px"} p='6' rounded='md' className='slider_box'>
                      <Center >
    
                        <Image className="slider_view "w={"180px"} h={"180px"} src={item.url}  alt="Image 1"  />
    
                      </Center>
                      <Center>
                        <Text mt={"15px"}>{item.name}</Text>
                      </Center>
                      <Text mt={"15px"}><span style={{color:"red",fontFamily:"sans-serif",fontSize:"14px"}}>Used For:</span>{item.Usedfor}</Text>
                      <Center>
                       
                      </Center>
                      <Tag mt={"15px"} bgColor={"green.400"} color={"white"}>{item.rating}</Tag>
                    </Box>
                    )) 
                } 
 
            </Slider> 
        </Box> 
    ); 
};