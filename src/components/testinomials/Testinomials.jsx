import React from 'react'
import './testinomials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
{
  avatar: AVTR1,
  name:'xxxx',
  review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aliquid laudantium in, necessitatibus maxime deleniti nulla distinctio ipsa neque veniam.'
},  
{
  avatar: AVTR2,
  name:'trrr',
  review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aliquid laudantium in, necessitatibus maxime deleniti nulla distinctio ipsa neque veniam.'
},  
{
  avatar: AVTR3,
  name:'uuuu',
  review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aliquid laudantium in, necessitatibus maxime deleniti nulla distinctio ipsa neque veniam.'
},  
{
  avatar: AVTR4,
  name:'hhhh',
  review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aliquid laudantium in, necessitatibus maxime deleniti nulla distinctio ipsa neque veniam.'
}
]

const Testinomials = () => {
  return (
    <section id='testinomials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              
              <SwiperSlide KEY={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
                <h5 className="client__name"> {name}</h5>
                <small className="client__review">{review}
                </small>
              </SwiperSlide>
      
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testinomials