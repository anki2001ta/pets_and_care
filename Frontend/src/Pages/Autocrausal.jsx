import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Crausal.css"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from '@chakra-ui/react'
export default function Autocrausel() {
  return (
    <Box mt={"10px"} >
      <Swiper
     
     
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
           <img   src="https://cdn.shopify.com/s/files/1/1199/8502/files/walking_essential_4_1920x.png?v=1669010018" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="https://cdn.shopify.com/s/files/1/1199/8502/files/tags_banner_1920x.png?v=1671707208"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img  style={{borderRadius:"5px"}} src="https://cdn.shopify.com/s/files/1/1199/8502/files/whiskas_banner_1920x.png?v=1671598548"></img> </SwiperSlide>
        <SwiperSlide>
        <img   src="https://cdn.shopify.com/s/files/1/1199/8502/files/Bed_Banner_1.jpg?v=1667887437"></img>
        </SwiperSlide>
        
        
      </Swiper>
    </Box>
  );
}
