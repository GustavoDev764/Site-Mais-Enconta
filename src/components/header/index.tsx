import React, { Component } from "react";

import Menu from "../menu";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="uk-navbar-container uk-light uk-visible@m tm-toolbar-container">
          <div className="uk-container uk-navbar" uk-navbar="">
            <div className="uk-navbar-left">
              <nav>
                <ul className="uk-navbar-nav">
                  <li>
                    <a href="#">
                      <span
                        className="uk-margin-xsmall-right uk-icon"
                        uk-icon="icon: receiver; ratio: .75;"
                      ></span>
                      <span className="tm-pseudo">8 800 799 99 99 </span>
                    </a>
                  </li>
                  <li>
                    <a href="contacts.html">
                      <span
                        className="uk-margin-xsmall-right uk-icon"
                        uk-icon="icon: location; ratio: .75;"
                      ></span>
                      <span className="tm-pseudo">
                        Store in St. Petersburg{" "}
                      </span>
                      <span
                        uk-icon="icon: triangle-down; ratio: .75;"
                        className="uk-icon"
                      >
                        {" "}
                      </span>
                    </a>
                    <div
                      className="uk-margin-remove uk-drop"
                      uk-drop="mode: click; pos: bottom-center;"
                    >
                      <div className="uk-card uk-card-default uk-card-small uk-box-shadow-xlarge uk-overflow-hidden uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                        <figure
                          className="uk-card-media-top uk-height-small js-map"
                          data-latitude="59.9356728"
                          data-longitude="30.3258604"
                          data-zoom="14"
                        ></figure>
                        <div className="uk-card-body">
                          <div className="uk-text-small">
                            <div className="uk-text-bolder">Store Name</div>
                            <div>
                              St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28
                            </div>
                            <div>Daily 10:00–22:00</div>
                          </div>
                          <div className="uk-margin-small">
                            <a
                              className="uk-link-muted uk-text-uppercase tm-link-to-all uk-link-reset"
                              href="#"
                            >
                              <span>contacts </span>
                              <span
                                uk-icon="icon: chevron-right; ratio: .75;"
                                className="uk-icon"
                              ></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="uk-navbar-item">
                      <span
                        className="uk-margin-xsmall-right uk-icon"
                        uk-icon="icon: clock; ratio: .75;"
                      ></span>
                      Daily 10:00–22:00
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="uk-navbar-right">
              <nav>
                <ul className="uk-navbar-nav">
                  <li>
                    <a href="#">News </a>
                  </li>
                  <li>
                    <a href="#">FAQ </a>
                  </li>
                  <li>
                    <a href="#">Payment </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <Menu />
      </header>
    );
  }
}
