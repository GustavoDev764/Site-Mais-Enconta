import React, { Component } from "react";

export default class NavOfCanvas extends Component {
  render() {
    return (
      <div id="nav-offcanvas" uk-offcanvas="overlay: true">
        <aside className="uk-offcanvas-bar uk-padding-remove">
          <div className="uk-card uk-card-default uk-card-small tm-shadow-remove">
            <header className="uk-card-header uk-flex uk-flex-middle">
              <div>
                <a className="uk-link-muted uk-text-bold" href="#">
                  8 800 799 99 99
                </a>
                <div className="uk-text-xsmall uk-text-muted">
                  <div>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</div>
                  <div>Daily 10:00–22:00</div>
                </div>
              </div>
            </header>
            <nav className="uk-card-small uk-card-body">
              <ul className="uk-nav-default uk-nav-parent-icon uk-list-divider uk-nav">
                <li className="uk-parent">
                  <a href="#">Catalog </a>
                  <ul
                    className="uk-nav-sub uk-list-divider"
                    aria-hidden="true"
                    hidden
                  >
                    <li>
                      <a href="#">Laptops &amp; Tablets </a>
                    </li>
                    <li>
                      <a href="#">Phones &amp; Gadgets </a>
                    </li>
                    <li>
                      <a href="#">TV &amp; Video </a>
                    </li>
                    <li>
                      <a href="#">Games &amp; Entertainment </a>
                    </li>
                    <li>
                      <a href="#">Photo </a>
                    </li>
                    <li className="uk-text-center">
                      <a
                        className="uk-link-muted uk-text-uppercase tm-link-to-all"
                        href="catalog"
                      >
                        <span>see all categories </span>
                        <span uk-icon="icon: chevron-right; ratio: .75;"></span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="uk-parent">
                  <a href="#">Brands </a>
                  <ul
                    className="uk-nav-sub uk-list-divider"
                    aria-hidden="true"
                    hidden
                  >
                    <li>
                      <a href="#">Apple </a>
                    </li>
                    <li>
                      <a href="#">Samsung </a>
                    </li>
                    <li>
                      <a href="#">Sony </a>
                    </li>
                    <li>
                      <a href="#">Microsoft </a>
                    </li>
                    <li>
                      <a href="#">Intel </a>
                    </li>
                    <li>
                      <a href="#">HP </a>
                    </li>
                    <li>
                      <a href="#">LG </a>
                    </li>
                    <li>
                      <a href="#">Lenovo </a>
                    </li>
                    <li>
                      <a href="#">ASUS </a>
                    </li>
                    <li>
                      <a href="#">Acer </a>
                    </li>
                    <li>
                      <a href="#">Dell </a>
                    </li>
                    <li>
                      <a href="#">Canon </a>
                    </li>
                    <li className="uk-text-center">
                      <a
                        className="uk-link-muted uk-text-uppercase tm-link-to-all"
                        href="brands"
                      >
                        <span>see all brands </span>
                        <span uk-icon="icon: chevron-right; ratio: .75;"></span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="uk-parent">
                  <a href="#">Pages </a>
                  <ul
                    className="uk-nav-sub uk-list-divider"
                    aria-hidden="true"
                    hidden
                  >
                    <li>
                      <a href="#">Catalog </a>
                    </li>
                    <li>
                      <a href="#">Category </a>
                    </li>
                    <li>
                      <a href="#"># </a>
                    </li>
                    <li>
                      <a href="#">Product </a>
                    </li>
                    <li>
                      <a href="#">Cart </a>
                    </li>
                    <li>
                      <a href="#">Checkout </a>
                    </li>
                    <li>
                      <a href="#">Compare </a>
                    </li>
                    <li>
                      <a href="#">Brands </a>
                    </li>
                    <li>
                      <a href="#">Compare </a>
                    </li>
                    <li>
                      <a href="#">Account </a>
                    </li>
                    <li>
                      <a href="#">Favorites </a>
                    </li>
                    <li>
                      <a href="#">Personal </a>
                    </li>
                    <li>
                      <a href="#">Settings </a>
                    </li>
                    <li>
                      <a href="#">About </a>
                    </li>
                    <li>
                      <a href="#">Contacts </a>
                    </li>
                    <li>
                      <a href="#">Blog </a>
                    </li>
                    <li>
                      <a href="#">News </a>
                    </li>
                    <li>
                      <a href="#">Article </a>
                    </li>
                    <li>
                      <a href="#">FAQ </a>
                    </li>
                    <li>
                      <a href="#">Delivery </a>
                    </li>
                    <li>
                      <a href="#">404 </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog">Blog </a>
                </li>
                <li>
                  <a href="about">About </a>
                </li>
                <li>
                  <a href="contacts">Contacts </a>
                </li>
                <li>
                  <a href="compare">
                    Compare
                    <span className="uk-badge uk-margin-xsmall-left">3</span>
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="uk-card-small uk-card-body">
              <ul className="uk-nav uk-nav-default">
                <li>
                  <a href="news">News </a>
                </li>
                <li>
                  <a href="faq">FAQ </a>
                </li>
                <li>
                  <a href="#">Payment </a>
                </li>
              </ul>
            </nav>
            <nav className="uk-card-body">
              <ul className="uk-iconnav uk-flex-center">
                <li>
                  <a href="#" title="Facebook" uk-icon="facebook">
                    {" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter" uk-icon="twitter">
                    {" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="YouTube" uk-icon="youtube">
                    {" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="Instagram" uk-icon="instagram">
                    {" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}
