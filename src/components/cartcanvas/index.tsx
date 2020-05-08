import React, { Component } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      arttcle: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
    interface IntrinsicElements {
      aside: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default class CartCanvas extends Component {
  render() {
    return (
      <div
        id="cart-offcanvas"
        uk-offcanvas="overlay: true; flip: true"
        className="uk-offcanvas"
      >
        <aside className="uk-offcanvas-bar uk-padding-remove uk-offcanvas-bar-animation uk-offcanvas-slide">
          <div className="uk-card uk-card-default uk-card-small uk-height-1-1 uk-flex uk-flex-column tm-shadow-remove">
            <header className="uk-card-header uk-flex uk-flex-middle">
              <div className="uk-grid-small uk-flex-1 uk-grid" uk-grid="">
                <div className="uk-width-expand uk-first-column">
                  <div className="uk-h3">Cart</div>
                </div>
                <button
                  className="uk-offcanvas-close uk-close uk-icon"
                  type="button"
                  uk-close=""
                ></button>
              </div>
            </header>
            <div className="uk-card-body uk-overflow-auto">
              <ul className="uk-list uk-list-divider">
                <li className="uk-visible-toggle">
                  <arttcle>
                    <div className="uk-grid-small uk-grid" uk-grid="">
                      <div className="uk-width-1-4 uk-first-column">
                        <div className="tm-ratio tm-ratio-4-3">
                          <a className="tm-media-box" href="#">
                            <figure className="tm-media-box-wrap">
                              <img
                                src="https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-small.jpg"
                                alt='Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)'
                              />
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="uk-width-expand">
                        <div className="uk-text-meta uk-text-xsmall">
                          Laptop
                        </div>
                        <a className="uk-link-heading uk-text-small" href="#">
                          Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB
                          (Silver)
                        </a>
                        <div
                          className="uk-margin-xsmall uk-grid-small uk-flex-middle uk-grid"
                          uk-grid=""
                        >
                          <div className="uk-text-bolder uk-text-small uk-first-column">
                            $1599.00
                          </div>
                          <div className="uk-text-meta uk-text-xsmall">
                            1 × $1599.00
                          </div>
                        </div>
                      </div>
                      <div>
                        <a
                          className="uk-icon-link uk-text-danger uk-invisible-hover uk-icon"
                          href="#"
                          uk-icon="icon: close; ratio: .75"
                          uk-tooltip="Remove"
                          title=""
                          aria-expanded="false"
                        ></a>
                      </div>
                    </div>
                  </arttcle>
                </li>
                <li className="uk-visible-toggle">
                  <arttcle>
                    <div className="uk-grid-small uk-grid" uk-grid="">
                      <div className="uk-width-1-4 uk-first-column">
                        <div className="tm-ratio tm-ratio-4-3">
                          <a className="tm-media-box" href="#">
                            <figure className="tm-media-box-wrap">
                              <img
                                src="https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-small.jpg"
                                alt='Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)'
                              />
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="uk-width-expand">
                        <div className="uk-text-meta uk-text-xsmall">
                          Laptop
                        </div>
                        <a className="uk-link-heading uk-text-small" href="#">
                          Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)
                        </a>
                        <div
                          className="uk-margin-xsmall uk-grid-small uk-flex-middle uk-grid"
                          uk-grid=""
                        >
                          <div className="uk-text-bolder uk-text-small uk-first-column">
                            $1549.00
                          </div>
                          <div className="uk-text-meta uk-text-xsmall">
                            1 × $1549.00
                          </div>
                        </div>
                      </div>
                      <div>
                        <a
                          className="uk-icon-link uk-text-danger uk-invisible-hover uk-icon"
                          href="#"
                          uk-icon="icon: close; ratio: .75"
                          uk-tooltip="Remove"
                          title=""
                          aria-expanded="false"
                        ></a>
                      </div>
                    </div>
                  </arttcle>
                </li>
              </ul>
            </div>
            <footer className="uk-card-footer">
              <div className="uk-grid-small uk-grid" uk-grid="">
                <div className="uk-width-expand uk-text-muted uk-h4 uk-first-column">
                  Subtotal
                </div>
                <div className="uk-h4 uk-text-bolder">$3148.00</div>
              </div>
              <div
                className="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m uk-margin-small uk-grid uk-grid-stack"
                uk-grid=""
              >
                <div className="uk-first-column">
                  <a
                    className="uk-button uk-button-default uk-margin-small uk-width-1-1"
                    href="#"
                  >
                    view cart
                  </a>
                </div>
                <div className="uk-grid-margin uk-first-column">
                  <a
                    className="uk-button uk-button-primary uk-margin-small uk-width-1-1"
                    href="#"
                  >
                    checkout
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </aside>
      </div>
    );
  }
}
