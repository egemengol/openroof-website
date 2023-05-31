import React from "react";
import "./Revenue.css";
import icon from "../../assets/Home/ikon.svg";
import homeowner from "../../assets/Home/Homeowner.svg";
import iconsta from "../../assets/Home/ikon sta.svg";
import iconhome from "../../assets/Home/ikonhome.svg";
import iconcoin from "../../assets/Home/Homeownercoin.svg";
import icon4 from "../../assets/Home/ikon4.svg";
import icon5 from "../../assets/Home/ikon5.svg";
import icon6 from "../../assets/Home/ikon6.svg";
import icon7 from "../../assets/Home/ikon7.svg";
import icon8 from "../../assets/Home/ikon8.svg";
import icon9 from "../../assets/Home/ikon9.svg";
import icon10 from "../../assets/Home/ikon10.svg";
import homeownerhand from "../../assets/Home/Homeowner hand.svg";

const Revenue = () => {
  return (
    <div className="revenue">
      <div className="rev-head-body">
      <p className="rev-head">Neden OpenRoof?</p>
      <div className="wrap-row-one">
        <img className="home-icon" src={homeowner} alt="..." />
        <div className="wrap-icon-box">
          <div className="wrap-box one">
            <img className="icon-class" src={icon} alt="icon" />
            <div className="description">
              <p className="desc-head">Panel kurulum maliyetini üstleniyoruz</p>
              <p className="desc-body">
                Maliyetin istediğiniz kadarına ortak olarak, elektrik
                faturasından tasarruf etmek ile para kazanmak arasında bir
                tercih yapabilirsiniz.
              </p>
            </div>
          </div>
          <div className="wrap-box two">
            <img className="icon-class" src={iconsta} alt="icon" />
            <div className="description">
              <p className="desc-head">Evin satış değerini artırıyoruz</p>
              <p className="desc-body">
                Elektrik faturası ödemeyen, hatta kendi kendine para kazandıran
                bir ev satışına imkan sağlıyoruz.
              </p>
            </div>
          </div>
          <div className="wrap-box three">
            <img className="icon-class" src={iconhome} alt="icon" />
            <div className="description">
              <p className="desc-head">Panelleri devrediyoruz</p>
              <p className="desc-body">
                Sözleşme sonunda tüm sistemi ve gelirleri mülk sahibine
                devrediyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="line" />
      <div className="wrap-row-one">
        <img className="coin-icon-reverse" src={iconcoin} alt="..." />
        <div className="wrap-icon-box">
          <div className="wrap-box four">
            <div className="description">
              <p className="desc-head">Hızlı amorti süresi</p>
              <p className="desc-body">
                Güneş doğmaya devam ettikçe 5-6 yıl içinde yatırımınızı geri
                alabilirsiniz.
              </p>
            </div>

            <img className="icon-class" src={icon4} alt="icon" />
          </div>
          <div className="wrap-box five">
            <div className="description">
              <p className="desc-head">Gerçek üretim temelli</p>
              <p className="desc-body">
                Yatırımınız gerçek üretimden beslendiği için spekülatif
                risklerden uzak, sağlam bir temele oturtuyoruz.
              </p>
            </div>
            <img className="icon-class" src={icon5} alt="icon" />
          </div>
          <div className="wrap-box six">
            <div className="description">
              <p className="desc-head">Minimal risk</p>
              <p className="desc-body">
                Yatırımcıyı koruyan sözleşmemiz sayesinde ana paranızı geri
                almanızı garanti ediyoruz!
              </p>
            </div>
            <img className="icon-class" src={icon6} alt="icon" />
          </div>
          <div className="wrap-box seven">
            <div className="description">
              <p className="desc-head">Yatırım anından itibaren şeffaflık</p>
              <p className="desc-body">
                GES projesinin akıbeti ve aylık geri ödemelerin raporlanması
                gibi tüm süreçlerde para akışlarını şeffaflıkla paylaşıyoruz.
              </p>
            </div>
            <img className="icon-class" src={icon7} alt="icon" />
          </div>
        </div>
        <img className="coin-icon" src={iconcoin} alt="..." />
      </div>

      <hr className="line" />

      <div className="wrap-row-final">
        <img className="hand-icon" src={homeownerhand} alt="..." />
        <div className="wrap-icon-box-three">
          <div className="wrap-box eight">
            <img className="icon-class" src={icon8} alt="icon" />
            <div className="description">
              <p className="desc-head">Yeşil bir gelecek yaratma imkanı</p>
              <p className="desc-body">
                Sürdürülebilir enerjiye geçerek doğaya verilen zararı minimize
                etmeyi hedefliyoruz.
              </p>
            </div>
          </div>
          <div className="wrap-box nine">
            <img className="icon-class" src={icon9} alt="icon" />
            <div className="description">
              <p className="desc-head">Tüm detaylarla biz ilgileniyoruz</p>
              <p className="desc-body">
                Kurulum firması, kurulum gücü, kullanılacak ekipmanlar, başvuru
                süreçleri, kar dağıtımı, ve benzeri tüm bürokratik, teknik ve
                operasyonel konuları biz üstleniyoruz.
              </p>
            </div>
          </div>

          <div className="wrap-box ten">
            <img className="icon-class" src={icon10} alt="icon" />
            <div className="description">
              <p className="desc-head">Eşsiz Yatırım Fırsatı</p>
              <p className="desc-body">
                Yatırımcı ve mülk sahibini bir araya getirerek, yenilenebilir
                enerji sektöründe benzersiz bir yatırım imkanı sunuyoruz.
                Kapsamlı sözleşmemiz ile tarafların haklarını güvence altına
                alarak, yenilenebilir enerjiye erişim ve katılımı
                kolaylaştırıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Revenue;
