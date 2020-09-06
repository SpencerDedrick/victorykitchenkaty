import React, { Component } from "react";
import Navlinks from "./navlinks";

class Collapsemenu extends Component {
  render() {
    if (this.props.showMenu === true) {
      return (
        <div className="collapseMenu">
          <Navlinks />
        </div>
      );
    }
    return null;
  }
}

export default Collapsemenu;
