import React, { Component } from "react";
import Navlinks from "./navlinks";
import "./collapsemenu.css";

class Collapsemenu extends Component {
  render() {
    if (this.props.showMenu === true) {
      return (
        <div className="collapseMenu">
          <Navlinks changeRoute={this.props.changeRoute} />
        </div>
      );
    }
    return null;
  }
}

export default Collapsemenu;
