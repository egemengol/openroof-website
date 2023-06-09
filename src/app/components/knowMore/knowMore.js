import "./knowMore.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const KnowMore = () => {
  return (
    <div className="knowMore-wrapper" id="">
      <div
        className="knowMore-title"
        data-aos="fade-bottom"
        data-aos-delay="300"
        data-aos-once="true"
        // style={{ margin: "64px 0px 48px 0px" }}
      >
        Aklınızda soru kalmasın! Merak ettiğiniz tüm soruları cevapladık.
      </div>

      <div className="knowMore-button">
        <a href={"/sss"}>
          <button className="knowMore-button-body">
            <div className="knowMore-button-text">
              <p className="knowMore-button-text-info">Merak Edilenler</p>
            </div>
            <ArrowForwardIosIcon className="knowMore-chevron" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default KnowMore;
