import React, { Component } from "react";
import Navlinks from "./navlinks";
import Collapsemenu from "./collapsemenu";
import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleClick = (event) => {
    event.target.classList.toggle("toggle");
  };

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  closeMenu = () => {
    this.setState({ showMenu: false });
  };

  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="nav_logo">
            <a href="#" className="home_button">
              <img
                src={require("../../Assets/VKLogoRed.png")}
                height="75px"
                alt="alt"
                onClick={() => this.props.changeRoute("home")}
              />
            </a>
            <a href="#" className="nav_logo_link">
              <img
                src={require("../../Assets/VKLogoRed.png")}
                height="60px"
                alt="alt"
                onClick={() => this.props.changeRoute("home")}
              />
            </a>
          </div>
          <div>
            <div
              className="menu_button"
              onClick={(event) => {
                this.toggleMenu();
              }}
            >
              <div className="menu_line1"></div>
              <div className="menu_line2"></div>
              <div className="menu_line3"></div>
            </div>
          </div>
          <Navlinks changeRoute={this.props.changeRoute} />
        </nav>
        <Collapsemenu
          showMenu={this.state.showMenu}
          changeRoute={this.props.changeRoute}
          closeMenu={this.closeMenu}
          toggleMenu={this.toggleMenu}
        />
      </div>
    );
  }
}

export default Navbar;
