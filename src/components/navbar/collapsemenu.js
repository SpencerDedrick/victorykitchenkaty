import React, { Component } from "react";
import Navlinks from "./navlinks";
import "./collapsemenu.css";

class Collapsemenu extends Component {
  render() {
    if (this.props.showMenu === true) {
      return (
        <div className="collapseMenu">
          <Navlinks changeRoute={this.props.changeRoute} toggleMenu={this.props.toggleMenu}/>
        </div>
      );
    }
    return null;
  }
}

export default Collapsemenu;
