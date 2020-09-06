import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <a>
          <img src={require("../../Assets/VKLogoWhite.png")} height="75px" />
        </a>

        <div className="footer_socialmedia">
          <a href="https://www.facebook.com/pg/victorykitchenkaty">
            {" "}
            <FontAwesomeIcon
              icon={["fab", "facebook-square"]}
              size="3x"
              className="icon"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={["fab", "instagram-square"]}
              size="3x"
              className="icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
