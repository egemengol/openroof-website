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
import itemIconeleven from "../../../../public/assets/Home/ikon11.svg";
import Image from "next/image";
import {useTranslations} from 'next-intl';
const Revenue = () => {
  const t = useTranslations('revenue');
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
          {t('neden')}
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
                {t('titleone')}
              </div>
              <div className="item-desc">
                {t('descone')}
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
              <div className="item-title">{t('titletwo')}</div>
              <div className="item-desc">
                {t('desctwo')}
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
              <div className="item-title">{t('titlethree')}</div>
              <div className="item-desc">
                {t('descthree')}
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
              <div className="item-title">{t('titlefour')}</div>
              <div className="item-desc">
                {" "}
                {t('descfour')}
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
              <div className="item-title">{t('titlefive')}</div>
              <div className="item-desc">
                {" "}
               {t('descfive')}
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
              <div className="item-title">{t('titlesix')}</div>
              <div className="item-desc">
                {" "}
                {t('descsix')}
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
                src={itemIconeleven}
                alt="itemIconeleven"
              />
              <div className="item-title">{t('titleseven')}</div>
              <div className="item-desc">
                {" "}
                {t('descseven')}
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
              <div className="item-title">{t('titleeight')}</div>
              <div className="item-desc">
                {t('desceight')}{" "}
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
              <div className="item-title">{t('titlenine')}</div>
              <div className="item-desc">
                {t('descnine')}{" "}
              </div>
            </div>
            <div
              className="item"
              data-aos-once="true"
              data-aos-offset="-100"
              data-aos="fade-down"
              data-aos-delay="300"
              id="three"
            >
              <Image className="item-icon" src={itemIconten} alt="itemIcon" />
              <div className="item-title">{t('titleten')} </div>
              <div className="item-desc">
                {t('descten')}{" "}
              </div>
            </div>
            <div
              className="item"
              data-aos-once="true"
              data-aos-offset="-100"
              data-aos="fade-down"
              data-aos-delay="300"
              id="fourth"
            >
              <Image className="item-icon" src={iconseven} alt="iconseven" />
              <div className="item-title">{t('titleel')} </div>
              <div className="item-desc">
                {t('descel')}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revenue;
