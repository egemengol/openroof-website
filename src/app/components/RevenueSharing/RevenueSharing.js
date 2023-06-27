import "./RevenueSharing.css";
import revenueSharingImage from "../../../../public/assets/Home/revenueSharing.svg";
import Image from "next/image";
const RevenueSharing = () => {
  return (
    <div className="revenueSharing" id="GelirPaylasimi">
      <div
        className="head"
        data-aos="fade-bottom"
        data-aos-delay="300"
        data-aos-once="true"
        style={{ margin: "64px 0px 48px 0px" }}
      >
        Gelir Paylaşımı
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
            Üretilen değer
            <strong className="text"> 10 yıl boyunca </strong>
            yatırımcı, mülk sahibi ve OpenRoof arasında paylaşılır.
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
            <strong className="text"> %50</strong>&apos;sine katılarak hasılat
            paylaşımındaki oranlarını belirleyebilirler. Yatırımcılar ise
            yatırmak istedikleri tutara göre bir mülk ile eşleştirilir.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueSharing;
