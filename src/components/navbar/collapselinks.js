import React, { Component } from "react";

class Collapselinks extends Component {
  render() {
    return (
      <ul className="nav_links">
        <li className="nav_link">
          <a
            href="#"
            onClick={() => {
              this.props.changeRoute("home");
              this.props.closeMenu();
            }}
          >
            Home
          </a>
        </li>
        <li className="nav_link">
          <a
            href="#"
            onClick={() => {
              this.props.changeRoute("about");
              this.props.closeMenu();
            }}
          >
            About
          </a>
        </li>
        <li className="nav_link">
          <a
            href="#"
            onClick={() => {
              this.props.changeRoute("gallery");
              this.props.closeMenu();
            }}
          >
            Gallery
          </a>
        </li>
        <li className="nav_link">
          <a
            href="#"
            onClick={() => {
              this.props.changeRoute("support");
              this.props.closeMenu();
            }}
          >
            Support VK
          </a>
        </li>
        {/* <li className="nav_link">
          <a href="#" onClick={() => this.props.changeRoute("blog")}>
            Blog
          </a>
        </li> */}

        {/* <li className="nav_link">
          <a href="#">Team</a>
        </li> */}
        {/* <li className="nav_link">
          <a href="#">Contact</a>
        </li> */}
      </ul>
    );
  }
}

export default Collapselinks;
