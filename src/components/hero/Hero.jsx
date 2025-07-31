import React, { use, useEffect, useState } from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getGalaryData } from "../../services/App";

function Hero() {
  const [galaryData, setGalaryData] = useState([]);

useEffect(() => {
  getGalaryData().then((data) =>{
    setGalaryData(data)
  } );
}, []);


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {galaryData?.results?.map((item) => {
          return (
            <SwiperSlide className="swiper1">
              <img src={item?.image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Hero;
