import React from "react";
import "./landing1.css";

const Landing1 = (props) => {
  return (
    <div>
      <div className="landing1" id="landing1">
        <landing>
          <div className="landing1_text">
            <img src={require("../../Assets/VKWhite.png")} height="300px" />
            <p>
              The King will reply, ‘Truly I tell you, whatever you did for one
              of the least of these brothers and sisters of mine, you did for
              me.’
            </p>
            <p>-Matthew 25:40</p>
            <div className="landing1_links">
              <a
                href="#"
                id="view_services"
                onClick={() => props.changeRoute("about")}
              >
                Learn more
              </a>
              <a href="#" id="make_appointment">
                Get Involved
              </a>
            </div>
          </div>
          <div>
            <i class="fas fa-arrow-alt-circle-down"></i>
          </div>
        </landing>
      </div>
    </div>
  );
};

export default Landing1;
