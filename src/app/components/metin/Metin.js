import "./Metin.css";
import { PhoneButton } from "../Ask/svg/phone";
import { tallyHref } from "../../commons/commons";
const Metin = () => {
  return (
    <div className="metin-page">
      <div>
        <p className="metin-head">
          <strong className="metin-head">GÜVENLİ</strong> Yatırım
        </p>
        <p className="metin-head">
          <strong className="metin-head">SÜREKLİ</strong> Üretim
        </p>
        <p className="metin-head">
          <strong className="metin-head">TEMİZ</strong> Enerji
        </p>
      </div>

      <div className="metin-body">Yatırımlarınızı Güneşin Gücüyle Büyütün!</div>
      <div className="metin-button">
        <a href={tallyHref}>
          <button className="metin-body-button">
            <div className="metin-img-button ">
              <PhoneButton className="phone-img-button "></PhoneButton>
            </div>
            <div className="metin-button-text">
              <p className="metin-button-text-info">Sizi Arayalım!</p>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Metin;
