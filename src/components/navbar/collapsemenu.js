import React, { Component } from "react";

import Collapselinks from "./collapselinks";
import "./collapsemenu.css";

class Collapsemenu extends Component {
  render() {
    if (this.props.showMenu === true) {
      return (
        <div className="collapseMenu">
          <Collapselinks
            changeRoute={this.props.changeRoute}
            closeMenu={this.props.closeMenu}
          />
        </div>
      );
    }
    return null;
  }
}

export default Collapsemenu;
