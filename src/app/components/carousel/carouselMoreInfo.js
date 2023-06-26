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
            Birlikte Daha İyi Bir Gelecek İnşa Ediyoruz
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Hayata geçirilen her bir OpenRoof projesi, karbondioksit
              salınımlarını ve atmosferimize verilen zararı azaltır. Yeşil
              enerjiye destek vererek, gezegenimizin sürdürülebilir bir geleceğe
              sahip olmasını sağlayabilirsiniz.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Risksiz Yatırım: Sözleşmelerle Güvence Altında
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              OpenRoof, yatırımcıların güvenini en ön planda tutar. Yatırımınızı
              yaparken herhangi bir ekonomik belirsizlikten etkilenmemeniz için,
              yaptığınız yatırımlarınız sözleşmelerle güvence altına alınır.
              Örneğin, yatırımınızın belirlenen süre zarfında amorti olmaması
              durumunda, sizlere bir güvence olarak, yatırdığınız sermayeyi
              faiziyle birlikte geri ödeme taahhüdünde bulunuyoruz. Bu,
              yatırımcı sözleşmemizde net bir şekilde belirtilir ve yasal olarak
              güvence altına alınır. OpenRoof, yatırımcısına güven veren,
              belirsizliklerden uzak, sağlam bir yapıya sahip bir yatırım
              aracıdır.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Küçük Yatırımlarla Büyük Adımlar{" "}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              OpenRoof, her bütçeye uygun yatırım imkanı sunar.
              Yatırımcılarımızın hepsine, yatırım miktarları ne olursa olsun,
              eşit fırsatlar ve olanaklar sunmayı hedefleriz. Küçük yatırımlarla
              bile büyük adımlar atabilir, gelir elde ederken aynı zamanda çevre
              dostu bir enerji kaynağını destekleyebilirsiniz. Sizin için en
              uygun yatırım miktarı ne olursa olsun, OpenRoof size yatırım yapma
              fırsatı sunar ve sizin için en uygun çatıyı bulur. Yatırımınızın
              miktarı ne olursa olsun, güneş enerjisi projelerine yaptığınız her
              yatırım, hem sizin hem de gezegenimizin geleceğine yatırım
              yapmanızı sağlar.
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
            Şeffaflıkla Kazanç Paylaşımı
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <br></br>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              OpenRoof, şeffaf ve adil bir gelir paylaşımı modeli ile
              yatırımcılarına güven sağlar. Herhangi bir gizli ücret olmaksızın,
              sadece yatırımcılar kazandıkça kazanır. Düzenli raporlar ve
              geliştirmekte olduğumuz portal ve mobil uygulama ile
              yatırımlarınızın performansını her an takip edebilir, anlık getiri
              ve ay sonu tahmini getirilerinizi görebilirsiniz.{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
