import "./Intro.css";
const Intro = () => {
  return (
    <div className="intro">
      <div
        className="intro-text"
        data-aos="fade-bottom"
        data-aos-delay="300"
        data-aos-once="true"
      >
        OpenRoof, yatırımcılar ile mülk sahiplerini bir araya getirip, çatıları
        güneş enerjisi santrallerine dönüştüren yeni nesil bir yatırım
        platformudur. Toplanan yatırımlar, uygun bir mülk ile eşleştirilerek
        panellerin kurulumu için kullanılır. Üretilen elektrik devlete satılır
        ve elde edilen gelir, tüm katılımcılar arasında adil bir şekilde
        paylaştırılır.
      </div>
    </div>
  );
};

export default Intro;
