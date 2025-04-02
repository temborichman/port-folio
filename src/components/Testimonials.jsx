import React from 'react'
import "./testimonials.css";
import { Data } from './testimonials/Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonial container section">
       <h2 className='section-title' style={{ display: 'flex', justifyContent: 'center' }}>My clients say</h2>
       <span className='section-subtitle' style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>Testimonials</span> 

       <Swiper className="testimonial-container" 
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          
        }}
        modules={[Pagination]}
       >
        {Data.map(({id, image, title, description }) =>{
            return (
                <SwiperSlide className="testimonial-card" key={id}>
                    <img src={image} alt='' className='testimonial-img'/>

                    <h3 className='testimonial-name'>{title}</h3>
                    <p className='testimonial-description'>{description}</p>
                </SwiperSlide>
            )
        })}
       </Swiper>
    </section>
  )
}

export default Testimonials
