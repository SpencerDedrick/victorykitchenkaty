import React from "react";
import "./landing1.css";

const Landing1 = (props) => {
  return (
    <div>
      <div className="landing1" id="landing1">
        <landing>
          <div className="landing1_content">
            <img
              src={require("../../Assets/VKWhite.png")}
              className="landing1_img"
              alt="logo"
            />
            <p>
              “The King will reply, ‘Truly I tell you, whatever you did for one
              of the least of these brothers and sisters of mine, you did for
              me.’ -Matthew 25:40
            </p>

            <div className="landing1_links">
              <button
                href="#"
                id="learn_more"
                onClick={() => props.changeRoute("about")}
              >
                Learn more
              </button>
              <button
                href="#"
                id="learn_more"
                onClick={() => props.changeRoute("support")}
              >
                Get Involved
              </button>
            </div>
          </div>
        </landing>
      </div>
    </div>
  );
};

export default Landing1;
