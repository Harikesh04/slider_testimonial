import React from "react";
import data from "./data/data.js";
import "./Slider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const Slider = () => {
  return (
    <div className="slidercontainer">
      <Swiper
        spaceBetween={25}
        slidesPerView={4}
        breakpoints={{
            0: {
             
              slidesPerView: 1,
            },
            520: {
             
              slidesPerView: 2,
            },
           950: {
             
              slidesPerView: 4,
            },
           
          }}
       
        modules={[Navigation, Pagination, Scrollbar, A11y]}
       
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.properties.map((user) => (
          <SwiperSlide key={user.id} className="slide">
            <div className="slide-content">
                <div >
                    <h1 className="slide-name">{user.username}</h1>
                </div>
              <div>
                <img src={user.image} alt="image"  className="user-image" />
              </div>
              <div className="slide-role">
                <h2>{user.positon}</h2>
              </div>
              <div className="slide-disc">
                <p>{user.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
