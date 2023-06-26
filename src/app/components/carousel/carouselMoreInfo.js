import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

import { Parallax, Pagination, Navigation } from "swiper";

export default function CarouselMoreInfo() {
  return (
    <>
      <Swiper
        centeredSlides={true} // this doesn't work?
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
            {/* &ldquo;Herkes İçin Akıllı Yatırım&ldquo; */}
            Herkes İçin Akıllı Yatırım
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              İster ilk yatırımınızı yapacak bir birey olun, ister uzun vadeli
              düşünen bir yatırımcı; OpenRoof, risk almadan, hızlı ve şeffaf
              getiri elde etmek isteyen herkes için ideal bir yatırım aracıdır.
              Aynı zamanda, sosyal sorumluluk ve sürdürülebilirlik fikirlerine
              değer verenler için de özel bir anlam taşır. OpenRoof ile yatırım
              yaparak hem kazanabilir hem de çevre dostu bir enerji kaynağına
              destek olabilirsiniz.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Gerçek Üretim, Gerçek Getiri
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              OpenRoof yatırımlarının arkasında somut bir değer vardır:
              elektrik. Güneş enerjisi sistemlerimiz, doğal ve yenilenebilir bir
              kaynak olan güneşten enerji üretir ve bu enerjiyi elektrik
              şebekesine satar. Bu sayede, yatırımlarınızın getirisi, güneşin
              doğuşuna ve insanların elektriğe olan sürekli ihtiyacına dayanır.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Birlikte Daha İyi Bir Gelecek İnşa Ediyoruz
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              OpenRoof ile yapılan her yatırım, sadece maddi bir getiri
              sağlamakla kalmaz, aynı zamanda çevreye ve topluma da olumlu
              katkılar sağlar. Güneş enerjisi projeleri, karbon emisyonlarını
              azaltır, yerel ekonomiyi destekler ve yeni istihdam olanakları
              yaratır. OpenRoof, birlikte daha yeşil ve sürdürülebilir bir
              gelecek inşa etme fırsatını sunar.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Şeffaflıkla Kazanç Paylaşımı
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              OpenRoof, şeffaf ve adil bir gelir paylaşımı modeli ile
              yatırımcılarına güven sağlar. Herhangi bir komisyon ya da gizli
              ücret olmaksızın, sadece yatırımcılar kazandıkça kazanır. Düzenli
              raporlar ve geliştirmekte olduğumuz portal ve mobil uygulama ile
              yatırımlarınızın performansını her an takip edebilir, anlık getiri
              ve ay sonu tahmini getirilerinizi görebilirsiniz.{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
