import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

const logos = ["/open.png", "/next.svg", "/open.png", "/next.svg", "/open.png"];

SwiperCore.use([Autoplay]);

const swiperProps = {
  slidesPerView: 2,
  spaceBetween: 0,
  // breakpoints: {
  //   768: {
  //     slidesPerView: 3,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //   },
  // },
  loop: true,
  autoplay: {
    delay: 0,
  },
  loopAdditionalSlides: 2,
  // modules={[Autoplay]}
};

export default function Carousel() {
  return (
    <Swiper
      {...swiperProps}
      // spaceBetween={30}
      // centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      // modules={[Autoplay, Pagination, Navigation]}
      // className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      {/* {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <Image src={logo} alt="" height="100" width="250" />
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
}
