import React, { Component } from "react";

class Navlinks extends Component {
  render() {
    return (
      <ul className="nav_links">
        <li className="nav_link">
          <a href="#" onClick={() => this.props.changeRoute("home")}>
            Home
          </a>
        </li>
        <li className="nav_link">
          <a href="#" onClick={() => this.props.changeRoute("about")}>
            About
          </a>
        </li>
        <li className="nav_link">
          <a href="#" onClick={() => this.props.changeRoute("gallery")}>
            Gallery
          </a>
        </li>
        <li className="nav_link">
          <a href="#" onClick={() => this.props.changeRoute("support")}>
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

export default Navlinks;
