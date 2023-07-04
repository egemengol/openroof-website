import "./Metin.css";
import { PhoneButton } from "../Ask/svg/phone";
import { tallyHref } from "../../commons/commons";
import {useTranslations} from 'next-intl';
const Metin = () => {
  const t = useTranslations('metin');
  return (
    <div className="metin-page">
      <div>
        <p className="metin-head">
          <strong className="metin-head">{t('low')}</strong> {t('Invest')}
        </p>
        <p className="metin-head">
          <strong className="metin-head">{t('hight')}</strong> {t('ret')}
        </p>
        <p className="metin-head">
          <strong className="metin-head">{t('min')}</strong> {t('risk')}
        </p>
      </div>

      <div className="metin-body">{t('metin')}</div>
      <div className="metin-button">
        <a href={tallyHref}>
          <button className="metin-body-button">
            <div className="metin-img-button ">
              <PhoneButton className="phone-img-button "></PhoneButton>
            </div>
            <div className="metin-button-text">
              <p className="metin-button-text-info">{t('button')}</p>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Metin;
