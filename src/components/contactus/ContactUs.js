import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png";
import insta from "../../assets/insta.png";
import whatssap from "../../assets/whatssap.png";
import phone from "../../assets/phone.png";
import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
import "./Contactus.css";
const ContactUs = () => {
  return (
    <div id="contactus">
      <footer>
        <div className="footer-content">
          <LightSpeed right>
            {" "}
            <h3 style={{ color: "black" }}>Foolish Developer</h3>{" "}
          </LightSpeed>
          <p>
            Raj Template is a blog website where you will find great tutorials
            on web design and development. Here each tutorial is beautifully
            described step by step with the required source code.
          </p>
          <ul className="socials">
            <li>
              <a href=" https://wa.me/9725332062">
                <img
                  src={whatssap}
                  alt="whatssap"
                  style={{ height: "30px", width: "30px" }}
                />
              </a>
              <a href="https://www.instagram.com/_priyank_24_md_/">
                <img
                  src={insta}
                  alt="insta"
                  style={{ height: "30px", width: "30px" }}
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100083866235692">
                <img
                  src={facebook}
                  alt="facebook"
                  style={{ height: "30px", width: "30px" }}
                />
              </a>
              <a href="mailto:priyamdodiya123@gmail.com?subject=for review&body=please send your review">
                <img
                  src={gmail}
                  alt="gmail"
                  style={{ height: "30px", width: "30px" }}
                />
              </a>
              <a href="tel:9725332062">
                <img
                  src={phone}
                  alt="phone"
                  style={{ height: "30px", width: "30px" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
export default ContactUs;