import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from 'image/1.jpg';
import two from 'image/cur4.jpg';
import three from 'image/cur2.jpg';
import four from 'icons/arrowLeft.svg';
import five from 'icons/arrowRight.svg';

import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Slider() {
  return (
    <div className="successful-popap-swiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        pagination={true}
        navigation={{
          nextEl: '.successful-button-next-slide',
          prevEl: '.successful-button-prev-slide',
        }}
        spaceBetween={40}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="successful-popap-swiper__card-block">
            <img src={one} alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="successful-popap-swiper__card-block">
            <img src={two} alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="successful-popap-swiper__card-block">
            <img src={three} alt="1" />
          </div>
        </SwiperSlide>
        <div className="popup-button-block">
          <div className="successful-button-prev-slide">
            <img src={four} alt="1" />
          </div>
          <div className="successful-button-next-slide">
            <img src={five} alt="1" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
