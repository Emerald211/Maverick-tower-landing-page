import "./banner.styles.css";
import bannerImage from "../../assets/Rectangle 1.png";
const Banner = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="banner-div"
    >
      <div className="banner-image">
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
