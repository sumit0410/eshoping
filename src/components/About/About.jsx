import React from "react";
import "./About.scss";
import CartImg from "../../assets/cartImage.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-left">
          <img src={CartImg} alt="" />
        </div>
        <div className="about-right">
          <span>About Us</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            delectus ex earum quaerat itaque ducimus rem sint, illum reiciendis
            debitis. Sequi blanditiis incidunt consectetur dolorem quibusdam
            voluptas temporibus quaerat soluta nisi. Mollitia maiores eveniet
            aperiam soluta aspernatur, quidem natus recusandae, sed eos
            assumenda dolor illum molestiae excepturi voluptates unde minima!
          </p>
          <div className="social-icons">
            <div className="icon">
              <FaFacebookF size={14} />
            </div>
            <div className="icon">
              <FaInstagram size={14} />
            </div>
            <div className="icon">
              <FaLinkedin size={14} />
            </div>
            <div className="icon">
              <FaTwitter size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
