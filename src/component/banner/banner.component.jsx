import "./banner.styles.css";
import bannerImage from "../../assets/Rectangle 1.png";
const Banner = () => {
  return (
    <div className="banner-div">
      <div
    
        className="banner-image"
      >
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
