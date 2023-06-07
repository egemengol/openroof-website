import React from "react";
import "./Benefit.css";
import frame309 from "../../assets/Home/Frame 309.svg";
import Yatrim from "../../assets/Home/Yatırım görsel.svg";
import Kurulum from "../../assets/Home/Kurulum görsel.svg";
import kazan from "../../assets/Home/Kazanç Görsel.svg";
import frame2 from "../../assets/Home/Frame 2.svg";
import frame3 from "../../assets/Home/Frame 3.svg";

const Benefit = () => {
  return (
    <div className="benefit" id="nasil">
      <p className="tophead" data-aos-once="true" data-aos="fade-down" data-aos-delay="300">
        Nasıl Çalışır?
      </p>
      <div className="cartmain">
        <div className="cartbody"data-aos-once="true" data-aos="fade-down" data-aos-delay="300">
          <div className="headcartframe">
            <img className="headcartframe-size" src={frame309} alt="frame309" />
          </div>
          <div className="cartdetail">
            <p className="cartdetailhead">Yatırım</p>
            <img className="cartdetailimg" src={Yatrim} alt="..." />
            <p className="cartdetailfooter ">
              Yatırımınızı <strong>güvenli</strong> ve <strong>risksiz</strong>{" "}
              bir şekilde gerçekleştirin.
            </p>
          </div>
        </div>
        <div className="cartbody"data-aos-once="true" data-aos="fade-down" data-aos-delay="300">
          <div className="headcartframe">
            <img className="headcartframe-size" src={frame2} alt="..." />
          </div>
          <div className="cartdetail">
            <p className="cartdetailhead">Kurulum</p>
            <img className="cartdetailimg" src={Kurulum} alt="kurulm" />
            <p className="cartdetailfooter ">
              Uygun bir mülk ile eşleştirerek <strong>panel kurulumu</strong>{" "}
              yapalım.
            </p>
          </div>
        </div>
        <div className="cartbody"data-aos-once="true" data-aos="fade-down" data-aos-delay="300">
          <div className="headcartframe">
            <img className="headcartframe-size" src={frame3} alt="..." />
          </div>
          <div className="cartdetail">
            <p className="cartdetailhead">Kazanç</p>
            <img className="cartdetailimg" src={kazan} alt="kazan" />
            <p className="cartdetailfooter ">
              Üretilen <strong>elektrik</strong> satılsın ve{" "}
              <strong>gelir</strong> elde edin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
