import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from 'image/1.jpg';
import two from 'image/cur4.jpg';
import three from 'image/cur2.jpg';
import four from 'icons/3.svg';

import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Slider() {
  return (
    <Swiper className='mySwiper'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      pagination={false}
      navigation={{
        nextEl: '.button-next-slide',
        prevEl: '.button-prev-slide',
      }}
      spaceBetween={40}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="swiper-image-block">
          <img className='swiper-img' src={one} alt="1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-block">
          <img className='swiper-img swiper-img2' src={two} alt="1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-block">
          <img className='swiper-img' src={three} alt="1" />
        </div>
      </SwiperSlide>
      <div className="button-next-slide"><img src={four} alt="arrow" /></div>
    </Swiper>
  );
}

export default Slider;
