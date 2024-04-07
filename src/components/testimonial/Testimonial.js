import React from "react";
import "./testimonial.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: avatar1,
    name: "tina snow",
    review: "Modi alias animi auaris from the deployment via look",
  },
  {
    avatar: avatar2,
    name: "shatta wale",
    review: "Modi alias animi auaris from the deployment via look",
  },
  {
    avatar: avatar3,
    name: "kwame despite",
    review: "Modi alias animi auaris from the deployment via look",
  },
  {
    avatar: avatar4,
    name: "mcbrown",
    review: "Modi alias animi auaris from the deployment via look",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial_container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
     >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt=" avatar " />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
