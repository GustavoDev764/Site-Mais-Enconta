import React, { Component } from "react";
import NavLeft from "./navleft";
import NavRight from "./navright";

export default class Menu extends Component {
  render() {
    return (
      <div
        className="uk-navbar-container tm-navbar-container uk-sticky"
        uk-sticky="cls-active: tm-navbar-container-fixed"
      >
        <div className="uk-container uk-navbar" uk-navbar="">
          <NavLeft />

          <NavRight />
        </div>
      </div>
    );
  }
}
