import React from "react";
import "./landing3.css";

const Landing1 = (props) => {
  return (
    <div>
      <div className="landing3" id="landing3">
        <landing>
          <div className="landing3_content">
            <h2>Show Your Support</h2>
            <p>
              In these times, it has become more important than ever to look out
              for each other, show kindness to your neighbor and lend a helping
              hand to someone in need. Victory Kitchen is collecting funds to
              provide hot meals for the homeless community within Houston, Katy
              and the surrounding areas. All contributions will go towards
              providing warm, nutritious meals to our street friends, in
              addition to bibles and toiletry supplies to give out during our
              street ministries.
            </p>

            <p>
              Currently there are three ways to support the work Victory Kitchen
              does. You can volunteer at a Victory Kitchen event, purchase an
              official Victory Kitchen Shirt, or donate directly via paypal.
              Without your generosity this would not be possible. Thank you for
              your support. God bless.
            </p>

            <h4>
              Contact us for more information on volunteer opportunities. phone
              555-555-5555 or email victorykitchen_serve@outlook.com
            </h4>
            <div className="landing3_links">
              <button
                href="https://www.ofnoreputation.com/collections/causes/products/victory-kitchen"
                id="learn_more"
                target="_blank"
              >
                Purchase a Shirt
              </button>
              <a
                href="https://www.paypal.me/victorykitchen"
                id="support_victory_kitchen"
                target="_blank"
              >
                Donate
              </a>
            </div>
          </div>
        </landing>
      </div>
    </div>
  );
};

export default Landing1;
