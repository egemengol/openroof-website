import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

import SwiperCore, { Autoplay, Parallax, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay]);
import {useTranslations} from 'next-intl';
export default function CarouselMoreInfo() {
  const t = useTranslations('CarouselMoreInfo');
  return (
    <>
      <Swiper
        centeredSlides={true}
        grabCursor={true}
        rewind={true}
        style={{
          "--swiper-navigation-color": "#FFF5E9",
          "--swiper-pagination-color": "#FFF5E9",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        autoplay={{
          delay: 8000,
          // autoplayDisableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        id="info"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: "url(/assets/Home/carouselPhoto.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            {t('titleone')}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
             {t('textone')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
           {t('titletwo')}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
             {t('texttwo')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
           {t('titlethree')}{" "}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            {t('textthree')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
           {t('titlefour')}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              {t('textfour')}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            {t('titlefive')}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              {t('textfive')}{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
