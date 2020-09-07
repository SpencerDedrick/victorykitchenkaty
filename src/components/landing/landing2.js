import React from "react";
import "./landing2.css";

const Landing2 = () => {
  return (
    <div className="landing2" id="landing2">
      <landing className="landing2_wrapper">
        <div className="landing2_text">
          <h1>Our Story</h1>

          <p>
            Victory Kitchen is an organization that serves hot meals to
            individuals who are homeless and/or experiencing food insecurity.
            Our Mission is to tackle the issue of poverty by meeting the most
            basic and fundamental necessity of human life, food.
          </p>
          <p>
            We believe that hunger can be both physical and spiritual. At
            Victory Kitchen we don't just feed people physically. We also help
            our friends become fed spiritually as well. Our goal is to share the
            love that God has for each and every one of his children. We want to
            serve hope to those who are lost, and feed the souls of those that
            hunger.
          </p>
          <button>See our Work</button>
        </div>
        <div className="landing2_image">
          <img src={require("../../Assets/VKphoto.jpg")}></img>
        </div>
      </landing>
    </div>
  );
};

export default Landing2;
