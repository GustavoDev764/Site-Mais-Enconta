import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    return (
      <section className="uk-section uk-section-default uk-section-small">
        <div className="uk-container">
          <div
            className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m uk-grid"
            uk-grid=""
          >
            <div className="uk-first-column">
              <a
                className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large"
                href="subcategory.html"
              >
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap">
                      <img
                        className="item-brand"
                        src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/laptops.png"
                        alt="Laptops"
                      />
                    </figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Laptops</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $149
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large"
                href="subcategory.html"
              >
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap">
                      <img
                        className="item-brand"
                        src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/smartphones.png"
                        alt="Smartphones"
                      />
                    </figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Smartphones</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $99
                  </div>
                </div>
              </a>
            </div>
            <div className="">
              <a
                className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large"
                href="subcategory.html"
              >
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap">
                      <img
                        className="item-brand"
                        src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/tablets.png"
                        alt="Tablets"
                      />
                    </figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Tablets</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $129
                  </div>
                </div>
              </a>
            </div>
            <div className="">
              <a
                className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large"
                href="subcategory.html"
              >
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap">
                      <img
                        className="item-brand"
                        src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/watches.png"
                        alt="Smart Watches"
                      />
                    </figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Smart Watches</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $49
                  </div>
                </div>
              </a>
            </div>
            <div className="">
              <a
                className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large"
                href="subcategory.html"
              >
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap">
                      <img
                        className="item-brand"
                        src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/consoles.png"
                        alt="Gaming Consoles"
                      />
                    </figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Gaming Consoles</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $399
                  </div>
                </div>
              </a>
            </div>
            <div className="">
              <a
                className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large"
                href="subcategory.html"
              >
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap">
                      <img
                        className="item-brand"
                        src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/cameras.png"
                        alt="Cameras"
                      />
                    </figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Cameras</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $129
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="uk-margin uk-text-center">
            <a
              className="uk-link-muted uk-text-uppercase tm-link-to-all"
              href="catalog.html"
            >
              <span>see all categories</span>
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
