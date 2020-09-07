import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="contacts">
          <h3>Contact Us</h3>
          <p>Email: victorykitchen_serve@outlook.com</p>
          <p>Phone:555-555-5555</p>
        </div>

        <div className="footer_socialmedia">
          <a href="mailto:victorykitchen_serve@outlook.com">
            <FontAwesomeIcon icon="envelope" size="2x" className="icon" />
          </a>
          <a
            href="https://www.facebook.com/pg/victorykitchenkaty"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook-square"]}
              size="2x"
              className="icon"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={["fab", "instagram-square"]}
              size="2x"
              className="icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
