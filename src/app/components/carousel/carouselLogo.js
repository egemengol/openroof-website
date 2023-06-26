import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

const logos = ["/open.png", "/next.svg", "/open.png", "/next.svg", "/open.png"];

SwiperCore.use([Autoplay]);

const swiperProps = {
  slidesPerView: 5,
  spaceBetween: 0,
  breakpoints: {
    // 768: {
    //   slidesPerView: 3,
    // },
    1024: {
      slidesPerView: 3,
    },
  },
  loop: true,
  autoplay: {
    delay: 1500,
  },
  loopAdditionalSlides: 2,
  // modules={[Autoplay]}
};

export default function CarouselLogo() {
  return (
    // <div>
    //   <div
    //     className="head"
    //     data-aos="fade-bottom"
    //     data-aos-delay="300"
    //     data-aos-once="true"
    //     style={{
    //       margin: "48px 0px 48px 0px",
    //       "font-family": "Dancing Script",
    //       color: "#4a584e",
    //     }}
    //   >
    //     Çözüm Ortaklarımız
    //   </div>

    <Swiper {...swiperProps} className="mySwiper" id="logo">
      <SwiperSlide id="logo">OpenRoof 1</SwiperSlide>
      <SwiperSlide id="logo">OpenRoof 2</SwiperSlide>
      <SwiperSlide id="logo">OpenRoof 3</SwiperSlide>
      <SwiperSlide id="logo">OpenRoof 4</SwiperSlide>
      <SwiperSlide id="logo">OpenRoof 5</SwiperSlide>
      <SwiperSlide id="logo">OpenRoof 6</SwiperSlide>
      <SwiperSlide id="logo">OpenRoof 7</SwiperSlide>
      <SwiperSlide id="logo">OpenRoof 8</SwiperSlide>
      <SwiperSlide id="logo">OpenRoof 9</SwiperSlide>
      {/* {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <Image src={logo} alt="" height="100" width="250" />
        </SwiperSlide>
      ))} */}
    </Swiper>
    // </div>
  );
}
