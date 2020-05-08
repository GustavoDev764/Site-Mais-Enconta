import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="uk-section uk-section-secondary uk-section-small uk-light">
          <div className="uk-container">
            <div
              className="uk-grid-medium uk-child-width-1-1 uk-child-width-1-4@m uk-grid"
              uk-grid=""
            >
              <div className="uk-first-column">
                <a className="uk-logo" href="index.html">
                  <img
                    src="https://chekromul.github.io/uikit-ecommerce-template/images/logo-inverse.svg"
                    width="90"
                    height="32"
                    alt="Logo"
                  />
                </a>
                <p className="uk-text-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut mauris eros. Nulla quis ante sed tortor efficitur
                  facilisis.
                </p>
                <ul className="uk-iconnav">
                  <li>
                    <a
                      href="#"
                      title="Facebook"
                      uk-icon="facebook"
                      className="uk-icon"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Twitter"
                      uk-icon="twitter"
                      className="uk-icon"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="YouTube"
                      uk-icon="youtube"
                      className="uk-icon"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Instagram"
                      uk-icon="instagram"
                      className="uk-icon"
                    ></a>
                  </li>
                </ul>
              </div>
              <div>
                <nav
                  className="uk-grid-small uk-child-width-1-2 uk-grid"
                  uk-grid=""
                >
                  <div className="uk-first-column">
                    <ul className="uk-nav uk-nav-default">
                      <li>
                        <a href="catalog.html">Catalog</a>
                      </li>
                      <li>
                        <a href="brands.html">Brands</a>
                      </li>
                      <li>
                        <a href="delivery.html">Delivery</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Payment</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="uk-nav uk-nav-default">
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="contacts.html">Contacts</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="news.html">News</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div>
                <ul className="uk-list uk-text-small">
                  <li>
                    <a className="uk-link-muted" href="#">
                      <span
                        className="uk-margin-small-right uk-icon"
                        uk-icon="receiver"
                      ></span>
                      <span className="tm-pseudo">8 800 799 99 99</span>
                    </a>
                  </li>
                  <li>
                    <a className="uk-link-muted" href="#">
                      <span
                        className="uk-margin-small-right uk-icon"
                        uk-icon="mail"
                      ></span>
                      <span className="tm-pseudo">example@example.com</span>
                    </a>
                  </li>
                  <li>
                    <div className="uk-text-muted">
                      <span
                        className="uk-margin-small-right uk-icon"
                        uk-icon="location"
                      ></span>
                      <span>
                        St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="uk-text-muted">
                      <span
                        className="uk-margin-small-right uk-icon"
                        uk-icon="clock"
                      ></span>
                      <span>Daily 10:00–22:00</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <form className="uk-form-stacked">
                  <label>
                    <div className="uk-form-label uk-text-muted">
                      Subscribe for updates
                    </div>
                    <div className="uk-inline uk-width-1-1">
                      <a
                        className="uk-form-icon uk-form-icon-flip uk-icon"
                        href="#"
                        uk-icon="mail"
                      ></a>
                      <input
                        className="uk-input"
                        type="email"
                        placeholder="Your email"
                      />
                    </div>
                  </label>
                </form>
                <div className="uk-margin uk-text-small uk-text-muted">
                  Shopping Categories icons by Jaro Sigrist from Noun Project
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
