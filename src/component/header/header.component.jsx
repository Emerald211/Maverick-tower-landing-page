import "./header.styles.css";
import messageLogo from "../../assets/Frame.png";

const Header = () => {
  return (
    <div className="header">
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        Skyrocket Your Hotel Bookings with Our Proven Marketing SYSTEMS - Get
        50+ Direct Bookings in 90 Days!
      </h1>
      <button data-aos="zoom-in" className="header-button">
        Unlock my booking boost now
      </button>
      <img
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="message-logo"
        src={messageLogo}
        alt=""
      />
    </div>
  );
};

export default Header;
