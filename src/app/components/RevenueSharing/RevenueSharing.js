import "./RevenueSharing.css";
import revenueSharingImage from "../../../../public/assets/Home/revenueSharing.svg";
import Image from "next/image";
import {useTranslations} from 'next-intl';
const RevenueSharing = () => {
  const t = useTranslations('sharing');
  return (
    <div className="revenueSharing" id="GelirPaylasimi">
      <div
        className="head"
        data-aos="fade-bottom"
        data-aos-delay="300"
        data-aos-once="true"
        style={{ margin: "64px 0px 48px 0px" }}
      >
        {t('Gelir')}
      </div>
      <div className="revenueSharing-wrapper">
        <Image
          src={revenueSharingImage}
          alt="Example"
          className="image"
          data-aos-once="true"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-offset="-100"
        />
        <div className="text-body">
          <p className="text">
            {t('Üretilen')}
            <strong className="text"> {t('yıl')} </strong>
            {t('yatırımcı')}
          </p>
          <br />
          <p className="text">
            {t('Ardından')} <strong className="text"> {t('boyunca')} </strong>{" "}
            {t('payı')}
          </p>
          <br />
          <p className="text">
            {t('Toplam')}
            <strong className="text"> {t('sonunda')}</strong>, {t('sistemin')}
          </p>
          <br />
          <p className="text">
            {t('Mülk')}
            <strong className="text"> %10 </strong>{t('ila')}
            <strong className="text"> %50</strong>&{t('apos')}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueSharing;
