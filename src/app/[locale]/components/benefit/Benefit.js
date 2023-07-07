import "./Benefit.css";
import frame309 from "../../../../../public/assets/Home/Frame 309.svg";
import Yatrim from "../../../../../public/assets/Home/Yatırım görsel.svg";
import Kurulum from "../../../../../public/assets/Home/Kurulum görsel.svg";
import kazan from "../../../../../public/assets/Home/Kazanç Görsel.svg";
import frame2 from "../../../../../public/assets/Home/Frame 2.svg";
import frame3 from "../../../../../public/assets/Home/Frame 3.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Benefit = () => {
  const t = useTranslations("benefit");
  return (
    <div className="benefit" id="NasilCalisir">
      <p
        className="tophead"
        data-aos-once="true"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        {t("why")}
      </p>
      <div className="cartmain">
        <div
          className="cartbody"
          data-aos-once="true"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div className="headcartframe">
            <Image
              className="headcartframe-size"
              src={frame309}
              alt="frame309"
            />
          </div>
          <div className="cartdetail">
            <p className="cartdetailhead">{t("investment")}</p>
            <Image className="cartdetailimg" src={Yatrim} alt="..." />
            <p className="cartdetailfooter ">
              {t("Yatırımınızı")} <strong>{t("güvenli")}</strong> {t("ve")}{" "}
              <strong>{t("risksiz")}</strong> {t("bir")}
            </p>
          </div>
        </div>
        <div
          className="cartbody"
          data-aos-once="true"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="headcartframe">
            <Image className="headcartframe-size" src={frame2} alt="..." />
          </div>
          <div className="cartdetail">
            <p className="cartdetailhead">{t("setup")}</p>
            <Image className="cartdetailimg" src={Kurulum} alt="kurulm" />
            <p className="cartdetailfooter ">
              {t("Uygun")} <strong>{t("panel")}</strong> {t("yapalım")}
            </p>
          </div>
        </div>
        <div
          className="cartbody"
          data-aos-once="true"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <div className="headcartframe">
            <Image className="headcartframe-size" src={frame3} alt="..." />
          </div>
          <div className="cartdetail">
            <p className="cartdetailhead">{t("earning")}</p>
            <Image className="cartdetailimg" src={kazan} alt="kazan" />
            <p className="cartdetailfooter ">
              {t("Üretilen")}
              <br />
              <strong>{t("devlet")}</strong> {t("satışlarla")}
              <strong> {t("gelir")} </strong>
              {t("elde")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
