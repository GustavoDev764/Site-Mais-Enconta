import React, { Component } from "react";

export default class Brands extends Component {
  render() {
    return (
      <section className="uk-section uk-section-default uk-section-small">
        <div className="uk-container">
          <h2 className="uk-text-center">Popular Brands</h2>
          <div
            className="uk-margin-medium-top uk-slider"
            uk-slider="finite: true"
          >
            <div className="uk-position-relative">
              <div className="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
                <div className="uk-visible@m uk-first-column">
                  <a
                    href="#"
                    uk-slidenav-previous=""
                    uk-slider-item="previous"
                    className="uk-slidenav-previous uk-icon uk-slidenav"
                  ></a>
                </div>
                <div className="uk-width-expand uk-slider-container">
                  <ul className="uk-slider-items uk-child-width-1-3 uk-child-width-1-6@s uk-grid uk-grid-large">
                    <li className="">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="Apple"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/apple.svg"
                              alt="Apple"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="Samsung"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/samsung.svg"
                              alt="Samsung"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="Sony"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/sony.svg"
                              alt="Sony"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="Microsoft"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/microsoft.svg"
                              alt="Microsoft"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="Intel"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/intel.svg"
                              alt="Intel"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="HP"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/hp.svg"
                              alt="HP"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="uk-active">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="LG"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/lg.svg"
                              alt="LG"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="uk-active">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="Lenovo"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/lenovo.svg"
                              alt="Lenovo"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="uk-active">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="ASUS"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/asus.svg"
                              alt="ASUS"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="uk-active">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="Acer"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/acer.svg"
                              alt="Acer"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="uk-active">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="Dell"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/dell.svg"
                              alt="Dell"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li className="uk-active">
                      <div className="tm-ratio tm-ratio-16-9">
                        <a
                          className="uk-link-muted tm-media-box tm-grayscale"
                          href="#"
                          title="Canon"
                        >
                          <figure className="tm-media-box-wrap">
                            <img
                              src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/canon.svg"
                              alt="Canon"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="uk-visible@m">
                  <a
                    href="#"
                    uk-slider-item="next"
                    uk-slidenav-next=""
                    className="uk-slidenav-next uk-icon uk-slidenav uk-invisible"
                  ></a>
                </div>
              </div>
            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top uk-hidden@m">
              <li uk-slider-item="0" className="">
                <a href="#"></a>
              </li>
              <li uk-slider-item="1" className="">
                <a href="#"></a>
              </li>
              <li uk-slider-item="2" className="">
                <a href="#"></a>
              </li>
              <li uk-slider-item="3" className="">
                <a href="#"></a>
              </li>
              <li uk-slider-item="4" className="">
                <a href="#"></a>
              </li>
              <li uk-slider-item="5" className="">
                <a href="#"></a>
              </li>
              <li uk-slider-item="6" className="uk-active">
                <a href="#"></a>
              </li>
              <li uk-slider-item="7" className="uk-hidden">
                <a href="#"></a>
              </li>
              <li uk-slider-item="8" className="uk-hidden">
                <a href="#"></a>
              </li>
              <li uk-slider-item="9" className="uk-hidden">
                <a href="#"></a>
              </li>
              <li uk-slider-item="10" className="uk-hidden">
                <a href="#"></a>
              </li>
              <li uk-slider-item="11" className="uk-hidden">
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <div className="uk-margin uk-text-center">
            <a
              className="uk-link-muted uk-text-uppercase tm-link-to-all"
              href="brands.html"
            >
              <span>see all brands</span>
              <span
                uk-icon="icon: chevron-right; ratio: .75;"
                className="uk-icon"
              ></span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
