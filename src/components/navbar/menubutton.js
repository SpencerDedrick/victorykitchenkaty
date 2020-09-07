import React, { Component } from "react";
import "./menubutton.css";

const handleClick = (event) => {
  event.target.classList.toggle("toggle");
};

class Menubutton extends Component {
  render() {
    return (
      <div className="menu_button_wrapper">
        <div
          className="menu_button"
          onClick={(event) => {
            handleClick(event);
            this.props.toggleMenu();
          }}
        >
          <div className="menu_line1"></div>
          <div className="menu_line2"></div>
          <div className="menu_line3"></div>
        </div>
      </div>
    );
  }
}

export default Menubutton;
