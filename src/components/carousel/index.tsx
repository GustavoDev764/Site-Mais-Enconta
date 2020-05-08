import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <section
        className="uk-position-relative uk-visible-toggle uk-light uk-slideshow"
        uk-slideshow="min-height: 300; max-height: 600;"
      >
        <ul className="uk-slideshow-items">
          <li className="">
            <a href="#">
              <figure className="uk-container uk-height-1-1">
                <img
                  src="https://chekromul.github.io/uikit-ecommerce-template/images/promo/macbook-new.jpg"
                  alt="New Macbook"
                  width="1200"
                  height="600"
                  uk-cover=""
                  className="uk-cover"
                />
              </figure>
            </a>
          </li>
          <li className="uk-active uk-transition-active">
            <a href="#">
              <figure className="uk-container uk-height-1-1">
                <img
                  src="https://chekromul.github.io/uikit-ecommerce-template/images/promo/iphone.jpg"
                  alt="iPhone"
                  width="1200"
                  height="600"
                  uk-cover=""
                  className="uk-cover"
                />
              </figure>
            </a>
          </li>

          <li className="">
            <a href="#">
              <figure className="uk-container uk-height-1-1">
                <img
                  src="https://chekromul.github.io/uikit-ecommerce-template/images/promo/ipad.jpg"
                  alt="iPad"
                  width="1200"
                  height="600"
                  uk-cover=""
                  className="uk-cover"
                />
              </figure>
            </a>
          </li>
        </ul>
        <a
          className="button-control-carousel uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-previous uk-icon uk-slidenav"
          href="#"
          uk-slideshow-item="previous"
          uk-slidenav-previous=""
        ></a>
        <a
          className="button-control-carousel uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-next uk-icon uk-slidenav"
          href="#"
          uk-slideshow-item="next"
          uk-slidenav-next=""
        ></a>
        <div className="uk-position-bottom-center uk-position-small">
          <ul className="uk-slideshow-nav uk-dotnav">
            <li uk-slideshow-item="0" className="">
              <a href="#"></a>
            </li>
            <li uk-slideshow-item="1" className="uk-active">
              <a href="#"></a>
            </li>
            <li uk-slideshow-item="2" className="">
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
