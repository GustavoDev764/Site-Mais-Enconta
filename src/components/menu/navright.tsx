import React, { Component } from "react";

export default class NavRight extends Component {
  render() {
    return (
      <div className="uk-navbar-right">
        <a
          className="uk-navbar-toggle tm-navbar-button uk-search-icon uk-icon"
          href="#"
          uk-search-icon=""
        ></a>
        <div
          className="uk-navbar-dropdown uk-padding-small uk-margin-remove"
          uk-drop="mode: click;cls-drop: uk-navbar-dropdown;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
        >
          <div className="uk-container">
            <div className="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div className="uk-width-expand">
                <form className="uk-search uk-search-navbar uk-width-1-1">
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="Search…"
                  />
                </form>
              </div>
              <div className="uk-width-auto">
                <a
                  className="uk-navbar-dropdown-close uk-close uk-icon"
                  href="#"
                  uk-close=""
                ></a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="uk-navbar-item uk-link-muted uk-visible@m tm-navbar-button"
          href="#"
        >
          <span uk-icon="copy" className="uk-icon"></span>
          <span className="uk-badge">3 </span>{" "}
        </a>
        <a
          className="uk-navbar-item uk-link-muted tm-navbar-button uk-icon"
          href="#"
          uk-icon="user"
        ></a>
        <div
          className="uk-padding-small uk-margin-remove uk-dropdown"
          uk-dropdown="pos: bottom-right; offset: -10; delay-hide: 200;"
        >
          <ul className="uk-nav uk-dropdown-nav">
            <li>
              <a href="#">
                Orders
                <span>(2) </span>
              </a>
            </li>
            <li>
              <a href="favorites.html">
                Favorites
                <span>(3) </span>
              </a>
            </li>
            <li>
              <a href="#">Personal </a>
            </li>
            <li>
              <a href="#">Settings </a>
            </li>
            <li className="uk-nav-divider"></li>
            <li>
              <a href="#">Log out </a>
            </li>
          </ul>
        </div>
        {/* <a className="uk-navbar-item uk-link-muted tm-navbar-button" href="#">
          <span uk-icon="cart" className="uk-icon"></span>
          <span className="uk-badge">2 </span>
        </a> */}

        <a
          className="uk-navbar-item uk-link-muted tm-navbar-button"
          href="#"
          uk-toggle="target: #cart-offcanvas"
        >
          <span uk-icon="cart" className="uk-icon"></span>
          <span className="uk-badge">2</span>
        </a>
      </div>
    );
  }
}
