//
import React from "react";
import "./revenue1.css";
import homeOwner from "../../assets/Home/Homeowner.svg";
import guy from "../../assets/Home/Homeownercoin.svg";
import shakehand from "../../assets/Home/Homeowner hand.svg";
import itemIcon from "../../assets/Home/ikon.svg";
import itemIcontwo from "../../assets/Home/ikon sta.svg";
import itemIconthree from "../../assets/Home/ikonhome.svg";
import iconfour from "../../assets/Home/ikon4.svg";
import iconfive from "../../assets/Home/ikon5.svg";
import iconsix from "../../assets/Home/ikon6.svg";
import iconseven from "../../assets/Home/ikon7.svg";
import itemIconeight from "../../assets/Home/ikon8.svg";
import itemIconnine from "../../assets/Home/ikon9.svg";
import itemIconten from "../../assets/Home/ikon10.svg";
const Revenue = () => {
  return (
    <>
      <div className="revenue" id="Faydalar">
        <div
          className="head"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Neden OpenRoof?
        </div>
        <div className="home-item-wrapper">
          <img
            className="homeOwner"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-once="true"
            src={homeOwner}
            alt="homeOwner"
          />
          <div className="item-wrapper">
            <div
              className="item"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-once="true"
              id="first"
            >
              <img className="item-icon" src={itemIcon} alt="itemIcon" />
              <div className="item-title">
                Panel kurulum maliyetini üstleniyoruz
              </div>
              <div className="item-desc">
                Maliyetin istediğiniz kadarına ortak olarak, elektrik
                faturasından tasarruf etmek ile para kazanmak arasında bir
                tercih yapabilirsiniz.
              </div>
            </div>
            <div
              className="item"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-once="true"
              id="second"
            >
              <img className="item-icon" src={itemIcontwo} alt="itemIcon" />
              <div className="item-title">Evin satış değerini artırıyoruz</div>
              <div className="item-desc">
                Elektrik faturası ödemeyen, hatta kendi kendine para kazandıran
                bir ev satışına imkan sağlıyoruz.
              </div>
            </div>
            <div
              className="item"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="300"
              id="third"
            >
              <img className="item-icon" src={itemIconthree} alt="itemIcon" />
              <div className="item-title">Panelleri devrediyoruz</div>
              <div className="item-desc">
                Sözleşme sonunda tüm sistemi ve gelirleri mülk sahibine
                devrediyoruz.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guy">
        <div className="guy-item-wrapper">
          <img
            className="guy-mobile"
            data-aos-once="true"
            data-aos="fade-left"
            data-aos-delay="150"
            src={guy}
            alt="guy"
          />
          <div className="item-wrapper-two">
            <div
              className="itemtwo"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-once="true"
              id="four"
            >
              <img className="item-icon-two" src={iconfour} alt="iconfour" />
              <div className="item-title">Hızlı amorti süresi</div>
              <div className="item-desc">
                {" "}
                Güneş doğmaya devam ettikçe 5-6 yıl içinde yatırımınızı geri
                alabilirsiniz.
              </div>
            </div>
            <div
              className="itemtwo"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-once="true"
              id="five"
            >
              <img className="item-icon-two" src={iconfive} alt="iconfive" />
              <div className="item-title">Gerçek üretim temelli</div>
              <div className="item-desc">
                {" "}
                Yatırımınız gerçek üretimden beslendiği için spekülatif
                risklerden uzak, sağlam bir temele oturtuyoruz.
              </div>
            </div>
            <div
              className="itemtwo"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-once="true"
              id="six"
            >
              <img className="item-icon-two" src={iconsix} alt="iconsix" />
              <div className="item-title">Minimal risk</div>
              <div className="item-desc">
                {" "}
                Yatırımcıyı koruyan sözleşmemiz sayesinde ana paranızı geri
                almanızı garanti ediyoruz!
              </div>
            </div>
            <div
              className="itemtwo"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-once="true"
              id="seven"
            >
              <img className="item-icon-two" src={iconseven} alt="iconseven" />
              <div className="item-title">
                Yatırım anından itibaren şeffaflık
              </div>
              <div className="item-desc">
                {" "}
                GES projesinin akıbeti ve aylık geri ödemelerin raporlanması
                gibi tüm süreçlerde para akışlarını şeffaflıkla paylaşıyoruz.
              </div>
            </div>
          </div>
          <img className="guy-img" src={guy} alt="guy" />
        </div>
      </div>

      <div className="shake">
        <div className="home-item-wrapper">
          <img className="homeOwner" src={shakehand} alt="homeOwner" />
          <div className="item-wrapper">
            <div
              className="item"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="150"
              id="first"
            >
              <img className="item-icon" src={itemIconeight} alt="itemIcon" />
              <div className="item-title">Yeşil bir gelecek yaratma imkanı</div>
              <div className="item-desc">
                Sürdürülebilir enerjiye geçerek doğaya verilen zararı minimize
                etmeyi hedefliyoruz.{" "}
              </div>
            </div>
            <div
              className="item"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="300"
              id="second"
            >
              <img className="item-icon" src={itemIconnine} alt="itemIcon" />
              <div className="item-title">Tüm detaylarla biz ilgileniyoruz</div>
              <div className="item-desc">
                Kurulum firması, kurulum gücü, kullanılacak ekipmanlar, başvuru
                süreçleri, kar dağıtımı, ve benzeri tüm bürokratik, teknik ve
                operasyonel konuları biz üstleniyoruz.{" "}
              </div>
            </div>
            <div
              className="item"
              data-aos-once="true"
              data-aos="fade-right"
              data-aos-delay="300"
              id="third"
            >
              <img className="item-icon" src={itemIconten} alt="itemIcon" />
              <div className="item-title">Eşsiz Yatırım Fırsatı </div>
              <div className="item-desc">
                Yatırımcı ve mülk sahibini buluşturarak, yenilenebilir enerji
                sektöründe benzersiz bir yatırım imkanı sağlıyoruz; yenilebilir
                enerjiye erişim ve katılımı kapsamlı sözleşmemizle
                kolaylaştırıyoruz.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revenue;
