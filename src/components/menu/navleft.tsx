import React, { Component } from "react";

export default class NavLeft extends Component {
  render() {
    return (
      <div className="uk-navbar-left">
        <button
          className="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon"
          uk-toggle="target: #nav-offcanvas"
          uk-navbar-toggle-icon=""
        ></button>
        <a className="uk-navbar-item uk-logo" href="index.html">
          <img
            src="https://chekromul.github.io/uikit-ecommerce-template/images/logo.svg"
            width="90"
            height="32"
            alt="Logo"
          />
        </a>
        <nav className="uk-visible@m">
          <ul className="uk-navbar-nav">
            <li>
              <a href="catalog.html">
                Catalog
                <span
                  className="uk-margin-xsmall-left uk-icon"
                  uk-icon="icon: chevron-down; ratio: .75;"
                ></span>
              </a>
              <div
                className="uk-navbar-dropdown uk-margin-remove uk-padding-remove-vertical uk-drop"
                uk-drop="pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
              >
                <div className="uk-container">
                  <ul
                    className="uk-navbar-dropdown-grid uk-child-width-1-5 uk-grid"
                    uk-grid=""
                  >
                    <li>
                      <div className="uk-margin-top uk-margin-bottom">
                        <a className="uk-link-reset" href="category.html">
                          <img
                            className="uk-display-block uk-margin-auto uk-margin-bottom"
                            src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/computers.svg"
                            alt="Laptops &amp; Tablets"
                            width="80"
                            height="80"
                          />
                          <div className="uk-text-bolder">
                            Laptops &amp; Tablets
                          </div>
                        </a>
                        <ul className="uk-nav uk-nav-default">
                          <li>
                            <a href="subcategory.html">Laptops </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Tablets </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Peripherals </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Keyboards </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Accessories </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="uk-margin-top uk-margin-bottom">
                        <a className="uk-link-reset" href="category.html">
                          <img
                            className="uk-display-block uk-margin-auto uk-margin-bottom"
                            src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/phones.svg"
                            alt="Phones &amp; Gadgets"
                            width="80"
                            height="80"
                          />
                          <div className="uk-text-bolder">
                            Phones &amp; Gadgets
                          </div>
                        </a>
                        <ul className="uk-nav uk-nav-default">
                          <li>
                            <a href="subcategory.html">Smartphones </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Mobile Phones </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Smart watches </a>
                          </li>
                          <li>
                            <a href="subcategory.html">
                              Charging and batteries{" "}
                            </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Accessories </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="uk-margin-top uk-margin-bottom">
                        <a className="uk-link-reset" href="category.html">
                          <img
                            className="uk-display-block uk-margin-auto uk-margin-bottom"
                            src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/tv.svg"
                            alt="TV &amp; Video"
                            width="80"
                            height="80"
                          />
                          <div className="uk-text-bolder">TV &amp; Video</div>
                        </a>
                        <ul className="uk-nav uk-nav-default">
                          <li>
                            <a href="subcategory.html">TV </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Home Cinema </a>
                          </li>
                          <li>
                            <a href="subcategory.html">
                              Satellite &amp; Cable TV
                            </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Projectors </a>
                          </li>
                          <li>
                            <a href="subcategory.html">DVD &amp; Blu-ray </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Accessories </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="uk-margin-top uk-margin-bottom">
                        <a className="uk-link-reset" href="category.html">
                          <img
                            className="uk-display-block uk-margin-auto uk-margin-bottom"
                            src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/games.svg"
                            alt="Games &amp; Entertainment"
                            width="80"
                            height="80"
                          />
                          <div className="uk-text-bolder">
                            Games &amp; Entertainment
                          </div>
                        </a>
                        <ul className="uk-nav uk-nav-default">
                          <li>
                            <a href="subcategory.html">Gaming consoles </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Games </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Software </a>
                          </li>
                          <li>
                            <a href="subcategory.html">
                              Joysticks &amp; gamepads
                            </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Accessories </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="uk-margin-top uk-margin-bottom">
                        <a className="uk-link-reset" href="category.html">
                          <img
                            className="uk-display-block uk-margin-auto uk-margin-bottom"
                            src="https://chekromul.github.io/uikit-ecommerce-template/images/catalog/photo.svg"
                            alt="Photo"
                            width="80"
                            height="80"
                          />
                          <div className="uk-text-bolder">Photo</div>
                        </a>
                        <ul className="uk-nav uk-nav-default">
                          <li>
                            <a href="subcategory.html">Cameras </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Lenses </a>
                          </li>
                          <li>
                            <a href="subcategory.html">Accessories </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="brands.html">
                Brands
                <span
                  className="uk-margin-xsmall-left uk-icon"
                  uk-icon="icon: chevron-down; ratio: .75;"
                ></span>
              </a>
              <div
                className="uk-navbar-dropdown uk-margin-remove uk-padding-remove-vertical uk-drop"
                uk-drop="pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
              >
                <div className="uk-container uk-container-small uk-margin-top uk-margin-bottom">
                  <ul
                    className="uk-grid-small uk-child-width-1-6 uk-grid"
                    uk-grid=""
                  >
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                    <li>
                      <div className="tm-ratio tm-ratio-4-3">
                        <a
                          className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
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
                  <div className="uk-text-center uk-margin">
                    <a
                      className="uk-link-muted uk-text-uppercase tm-link-to-all"
                      href="brands.html"
                    >
                      <span>See all brands </span>
                      <span
                        uk-icon="icon: chevron-right; ratio: .75;"
                        className="uk-icon"
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">
                Pages
                <span
                  className="uk-margin-xsmall-left uk-icon"
                  uk-icon="icon: chevron-down; ratio: .75;"
                ></span>
              </a>
              <div
                className="uk-navbar-dropdown uk-margin-remove uk-padding-remove-vertical uk-drop"
                uk-drop="pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
              >
                <div className="uk-container uk-container-small uk-margin-top uk-margin-bottom">
                  <ul className="uk-nav uk-nav-default uk-column-1-3">
                    <li>
                      <a href="catalog.html">Catalog </a>
                    </li>
                    <li>
                      <a href="category.html">Category </a>
                    </li>
                    <li>
                      <a href="subcategory.html">Subcategory </a>
                    </li>
                    <li>
                      <a href="product.html">Product </a>
                    </li>
                    <li>
                      <a href="cart.html">Cart </a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout </a>
                    </li>
                    <li>
                      <a href="compare.html">Compare </a>
                    </li>
                    <li>
                      <a href="brands.html">Brands </a>
                    </li>
                    <li>
                      <a href="compare.html">Compare </a>
                    </li>
                    <li>
                      <a href="account.html">Account </a>
                    </li>
                    <li>
                      <a href="favorites.html">Favorites </a>
                    </li>
                    <li>
                      <a href="personal.html">Personal </a>
                    </li>
                    <li>
                      <a href="settings.html">Settings </a>
                    </li>
                    <li>
                      <a href="about.html">About </a>
                    </li>
                    <li>
                      <a href="contacts.html">Contacts </a>
                    </li>
                    <li>
                      <a href="blog.html">Blog </a>
                    </li>
                    <li>
                      <a href="news.html">News </a>
                    </li>
                    <li>
                      <a href="article.html">Article </a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ </a>
                    </li>
                    <li>
                      <a href="delivery.html">Delivery </a>
                    </li>
                    <li>
                      <a href="404.html">404 </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="blog.html">Blog </a>
            </li>
            <li>
              <a href="about.html">About </a>
            </li>
            <li>
              <a href="contacts.html">Contacts </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
