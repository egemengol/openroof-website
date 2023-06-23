import "./revenue1.css";
import homeOwner from "../../../../public/assets/Home/Homeowner.svg";
import guy from "../../../../public/assets/Home/Homeownercoin.svg";
import shakehand from "../../../../public/assets/Home/Homeowner hand.svg";
import itemIcon from "../../../../public/assets/Home/ikon.svg";
import itemIcontwo from "../../../../public/assets/Home/ikon sta.svg";
import itemIconthree from "../../../../public/assets/Home/ikonhome.svg";
import iconfour from "../../../../public/assets/Home/ikon4.svg";
import iconfive from "../../../../public/assets/Home/ikon5.svg";
import iconsix from "../../../../public/assets/Home/ikon6.svg";
import iconseven from "../../../../public/assets/Home/ikon7.svg";
import itemIconeight from "../../../../public/assets/Home/ikon8.svg";
import itemIconnine from "../../../../public/assets/Home/ikon9.svg";
import itemIconten from "../../../../public/assets/Home/ikon10.svg";
import Image from "next/image";

const Revenue = () => {
  return (
    <>
      <div className="revenue" id="Faydalar">
        <div
          className="head"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-once="true"
          data-aos-offset="-100"
        >
          Neden OpenRoof?
        </div>
        <div className="home-item-wrapper">
          <Image
            className="homeOwner"
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-once="true"
            data-aos-offset="-100"
            src={homeOwner}
            alt="homeOwner"
          />
          <div className="item-wrapper">
            <div
              className="item"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-offset="-100"
              id="first"
            >
              <Image className="item-icon" src={itemIcon} alt="itemIcon" />
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
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-offset="-100"
              id="second"
            >
              <Image className="item-icon" src={itemIcontwo} alt="itemIcon" />
              <div className="item-title">Evin satış değerini artırıyoruz</div>
              <div className="item-desc">
                Elektrik faturası ödemeyen, hatta kendi kendine para kazandıran
                bir ev satışına imkan sağlıyoruz.
              </div>
            </div>
            <div
              className="item"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="-100"
              data-aos-delay="300"
              id="third"
            >
              <Image className="item-icon" src={itemIconthree} alt="itemIcon" />
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
          <Image
            className="guy-mobile"
            data-aos-once="true"
            data-aos-offset="-100"
            data-aos="fade-down"
            data-aos-delay="150"
            src={guy}
            alt="guy"
          />
          <div className="item-wrapper-two">
            <div
              className="itemtwo"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-offset="-100"
              id="four"
            >
              <Image className="item-icon-two" src={iconfour} alt="iconfour" />
              <div className="item-title">Hızlı amorti süresi</div>
              <div className="item-desc">
                {" "}
                Ev alıp 20 yıl beklemek yerine, güneş doğduğu sürece 5-6 yıl
                içinde yatırımınızı geri alabilir ve kazanç elde etmeye devam
                edebilirsiniz.
              </div>
            </div>
            <div
              className="itemtwo"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-offset="-100"
              id="five"
            >
              <Image className="item-icon-two" src={iconfive} alt="iconfive" />
              <div className="item-title">Gerçek üretim temelli</div>
              <div className="item-desc">
                {" "}
                Yatırımınız gerçek üretimden beslendiği için spekülatif
                risklerden uzak, sağlam bir temele oturtuyoruz.
              </div>
            </div>
            <div
              className="itemtwo"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-offset="-100"
              id="six"
            >
              <Image className="item-icon-two" src={iconsix} alt="iconsix" />
              <div className="item-title">Minimal risk</div>
              <div className="item-desc">
                {" "}
                Yatırımcıyı koruyan sözleşmemiz sayesinde, yatırımınızın
                belirlenen süre zarfında amorti olmaması durumunda, yatırdığınız
                miktarı faiziyle birlikte geri ödeme garantisi veriyoruz!
              </div>
            </div>
            <div
              className="itemtwo"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-offset="-100"
              id="seven"
            >
              <Image
                className="item-icon-two"
                src={iconseven}
                alt="iconseven"
              />
              <div className="item-title">Düşük yatırım olanağı</div>
              <div className="item-desc">
                {" "}
                Küçük yatırımların birleşik gücü ile, bireysel olarak ulaşılması
                güç olan büyük projelere OpenRoof ile erişebilirsiniz.
              </div>
            </div>
          </div>
          <Image
            className="guy-img"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-offset="-100"
            src={guy}
            alt="guy"
          />
        </div>
      </div>

      <div className="shake">
        <div className="home-item-wrapper">
          <Image
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-offset="-100"
            className="homeOwner"
            src={shakehand}
            alt="homeOwner"
          />
          <div className="item-wrapper">
            <div
              className="item"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="-100"
              data-aos-delay="150"
              id="first"
            >
              <Image className="item-icon" src={itemIconeight} alt="itemIcon" />
              <div className="item-title">Yeşil bir gelecek yaratma imkanı</div>
              <div className="item-desc">
                Sürdürülebilir enerjiye geçerek doğaya verilen zararı minimize
                etmeyi hedefliyoruz.{" "}
              </div>
            </div>
            <div
              className="item"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-offset="-100"
              data-aos-delay="300"
              id="second"
            >
              <Image className="item-icon" src={itemIconnine} alt="itemIcon" />
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
              data-aos-offset="-100"
              data-aos="fade-down"
              data-aos-delay="300"
              id="third"
            >
              <Image className="item-icon" src={itemIconten} alt="itemIcon" />
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
