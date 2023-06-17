import React from "react";
import "./RevenueSharing.css";
import revenueSharingImage from "../../assets/Home/revenueSharing.svg";

const RevenueSharing = () => {
  return (
    <div className="revenueSharing">
      <div
        className="head"
        data-aos="fade-bottom"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Hasılat Paylaşımı
      </div>
      <img src={revenueSharingImage} alt="Example" className="image" />
      <div>
        <p className="text">
          Üretilen değer
          <strong className="text"> 10 yıl boyunca </strong>
          yatırımcı, mülk sahibi, ve OpenRoof arasında paylaşılır.
        </p>
        <br />
        <p className="text">
          Ardından gelen <strong className="text"> 5 yıl boyunca </strong>{" "}
          yatırımcının payı düzenli olarak azalırken, mülk sahibinin payı aynı
          ölçüde artar.
        </p>
        <br />
        <p className="text">
          Toplam
          <strong className="text"> 15 yılın sonunda</strong>, sistemin
          mülkiyeti ve gelirleri tamamen mülk sahibinin olur.
        </p>
        <br />
        <p className="text">
          Mülk sahipleri, kurulum maliyetinin
          <strong className="text"> %10 </strong>ila
          <strong className="text"> %50</strong>'sine katılarak hasılat
          paylaşımındaki oranlarını belirleyebilirler. Yatırımcılar ise yatırmak
          istedikleri tutara göre bir mülk ile eşleştirilir.{" "}
        </p>
      </div>
    </div>
  );
};

export default RevenueSharing;
