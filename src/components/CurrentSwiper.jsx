import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import one from 'image/child.jpg';
import two from 'image/animal.jpg';
import three from 'image/older.jpg';
import four from 'icons/arrowLeft.svg';
import five from 'icons/arrowRight.svg';

function CurrentSwiper({ index, handleClick }) {
  const imgArr = [
    { src:  one  },
    { src:  two  },
    { src:  three  }
  ];

  return (
    <div className="current-swiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        pagination={true}
        navigation={{
          nextEl: '.current-swiper__button-next-slide',
          prevEl: '.current-swiper__button-prev-slide',
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {
          imgArr.map((img, item) =>
            <SwiperSlide key={`${item}_${img}`} onClick={() => handleClick(true, index)}>
              <div className="current-swiper__card-block">
                <img src={(img.src)} alt="1" />
              </div>
            </SwiperSlide>

          )
        }

        <div className="current-swiper__button-next-slide-block">

          <div className="current-swiper__button-prev-slide">
            <img src={four} alt="" />
          </div>


          <div className="current-swiper__button-next-slide">
            <img src={five} alt="" />
          </div>

        </div>
      </Swiper>
    </div>
  );
}

export default CurrentSwiper;
