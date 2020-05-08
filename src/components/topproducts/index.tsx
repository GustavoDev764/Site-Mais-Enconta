import React, { Component } from "react";

export default class TopProducts extends Component {
  render() {
    return (
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <h2 className="uk-text-center">Trending Items</h2>
          <div className="uk-card uk-card-default tm-ignore-container">
            <div
              className="uk-grid-collapse uk-child-width-1-3 uk-child-width-1-4@m tm-products-grid uk-grid"
              uk-grid=""
            >
              <article className="tm-product-card uk-first-column">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3">
                    <a className="tm-media-box" href="product.html">
                      <div className="tm-product-card-labels">
                        <span className="uk-label uk-label-warning">
                          top selling
                        </span>
                        <span className="uk-label uk-label-danger">
                          trade-in
                        </span>
                      </div>
                      <figure className="tm-media-box-wrap">
                        <img
                          src="https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg"
                          alt='Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)'
                        />
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 className="tm-product-card-title">
                      <a className="uk-link-heading" href="product.html">
                        Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)
                      </a>
                    </h3>
                    <ul className="uk-list uk-text-small tm-product-card-properties">
                      <li>
                        <span className="uk-text-muted">
                          Diagonal display:{" "}
                        </span>
                        <span>15.4"</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">CPU: </span>
                        <span>Intel®&nbsp;Core™ i7</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">RAM: </span>
                        <span>16&nbsp;GB</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">Video Card: </span>
                        <span>AMD Radeon Pro 555</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <del className="uk-text-meta">$1899.00</del>
                      <div className="tm-product-card-price">$1599.00</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions">
                        <a
                          className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to"
                          title="Add to favorites"
                        >
                          <span
                            uk-icon="icon: heart; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to favorites
                          </span>
                        </a>
                        <a
                          className="tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to"
                          title="Add to compare"
                        >
                          <span
                            uk-icon="icon: copy; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to compare
                          </span>
                        </a>
                      </div>
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                        <span
                          className="tm-product-card-add-button-icon uk-icon"
                          uk-icon="cart"
                        ></span>
                        <span className="tm-product-card-add-button-text">
                          add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tm-product-card">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3">
                    <a className="tm-media-box" href="product.html">
                      <div className="tm-product-card-labels">
                        <span className="uk-label uk-label-success">new</span>
                        <span className="uk-label uk-label-danger">
                          trade-in
                        </span>
                      </div>
                      <figure className="tm-media-box-wrap">
                        <img
                          src="https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-medium.jpg"
                          alt='Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)'
                        />
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 className="tm-product-card-title">
                      <a className="uk-link-heading" href="product.html">
                        Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)
                      </a>
                    </h3>
                    <ul className="uk-list uk-text-small tm-product-card-properties">
                      <li>
                        <span className="uk-text-muted">
                          Diagonal display:{" "}
                        </span>
                        <span>12"</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">CPU: </span>
                        <span>Intel®&nbsp;Core™ i5</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">RAM: </span>
                        <span>8&nbsp;GB</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">Video Card: </span>
                        <span>Intel® HD Graphics 615</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$1549.00</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions">
                        <a
                          className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to"
                          title="Add to favorites"
                        >
                          <span
                            uk-icon="icon: heart; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to favorites
                          </span>
                        </a>
                        <a
                          className="tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to"
                          title="Add to compare"
                        >
                          <span
                            uk-icon="icon: copy; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to compare
                          </span>
                        </a>
                      </div>
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                        <span
                          className="tm-product-card-add-button-icon uk-icon"
                          uk-icon="cart"
                        ></span>
                        <span className="tm-product-card-add-button-text">
                          add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tm-product-card">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3">
                    <a className="tm-media-box" href="product.html">
                      <figure className="tm-media-box-wrap">
                        <img
                          src="https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg"
                          alt="Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 className="tm-product-card-title">
                      <a className="uk-link-heading" href="product.html">
                        Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)
                      </a>
                    </h3>
                    <ul className="uk-list uk-text-small tm-product-card-properties">
                      <li>
                        <span className="uk-text-muted">
                          Diagonal display:{" "}
                        </span>
                        <span>13.9"</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">CPU: </span>
                        <span>Intel®&nbsp;Core™ i7 8550U</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">RAM: </span>
                        <span>16&nbsp;GB</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">Video Card: </span>
                        <span>Intel® HD Graphics 620</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$1199.00</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions">
                        <a
                          className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to"
                          title="Add to favorites"
                        >
                          <span
                            uk-icon="icon: heart; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to favorites
                          </span>
                        </a>
                        <a
                          className="tm-product-card-action js-add-to js-add-to-compare"
                          title="Add to compare"
                        >
                          <span
                            uk-icon="icon: copy; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to compare
                          </span>
                        </a>
                      </div>
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                        <span
                          className="tm-product-card-add-button-icon uk-icon"
                          uk-icon="cart"
                        ></span>
                        <span className="tm-product-card-add-button-text">
                          add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tm-product-card">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3">
                    <a className="tm-media-box" href="product.html">
                      <div className="tm-product-card-labels">
                        <span className="uk-label uk-label-warning">
                          top selling
                        </span>
                      </div>
                      <figure className="tm-media-box-wrap">
                        <img
                          src="https://chekromul.github.io/uikit-ecommerce-template/images/products/4/4-medium.jpg"
                          alt="ASUS Zenbook UX330UA-FC020T (Rose Gold)"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 className="tm-product-card-title">
                      <a className="uk-link-heading" href="product.html">
                        ASUS Zenbook UX330UA-FC020T (Rose Gold)
                      </a>
                    </h3>
                    <ul className="uk-list uk-text-small tm-product-card-properties">
                      <li>
                        <span className="uk-text-muted">
                          Diagonal display:{" "}
                        </span>
                        <span>13.3"</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">CPU: </span>
                        <span>Intel®&nbsp;Core™ i7-6500U</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">RAM: </span>
                        <span>8&nbsp;GB</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">Video Card: </span>
                        <span>Intel® HD Graphics 520</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$749.00</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions">
                        <a
                          className="tm-product-card-action js-add-to js-add-to-favorites"
                          title="Add to favorites"
                        >
                          <span
                            uk-icon="icon: heart; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to favorites
                          </span>
                        </a>
                        <a
                          className="tm-product-card-action js-add-to js-add-to-compare"
                          title="Add to compare"
                        >
                          <span
                            uk-icon="icon: copy; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to compare
                          </span>
                        </a>
                      </div>
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                        <span
                          className="tm-product-card-add-button-icon uk-icon"
                          uk-icon="cart"
                        ></span>
                        <span className="tm-product-card-add-button-text">
                          add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tm-product-card uk-grid-margin uk-first-column">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3">
                    <a className="tm-media-box" href="product.html">
                      <figure className="tm-media-box-wrap">
                        <img
                          src="https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg"
                          alt="Dell XPS 15 9560-8968 (Silver)"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 className="tm-product-card-title">
                      <a className="uk-link-heading" href="product.html">
                        Dell XPS 15 9560-8968 (Silver)
                      </a>
                    </h3>
                    <ul className="uk-list uk-text-small tm-product-card-properties">
                      <li>
                        <span className="uk-text-muted">
                          Diagonal display:{" "}
                        </span>
                        <span>15.6"</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">CPU: </span>
                        <span>Intel®&nbsp;Core™ i7 7700HQ</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">RAM: </span>
                        <span>16&nbsp;GB</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">Video Card: </span>
                        <span>NVIDIA GeForce GTX 960M</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <del className="uk-text-meta">$999.00</del>
                      <div className="tm-product-card-price">$949.00</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions">
                        <a
                          className="tm-product-card-action js-add-to js-add-to-favorites"
                          title="Add to favorites"
                        >
                          <span
                            uk-icon="icon: heart; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to favorites
                          </span>
                        </a>
                        <a
                          className="tm-product-card-action js-add-to js-add-to-compare"
                          title="Add to compare"
                        >
                          <span
                            uk-icon="icon: copy; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to compare
                          </span>
                        </a>
                      </div>
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                        <span
                          className="tm-product-card-add-button-icon uk-icon"
                          uk-icon="cart"
                        ></span>
                        <span className="tm-product-card-add-button-text">
                          add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tm-product-card uk-grid-margin">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3">
                    <a className="tm-media-box" href="product.html">
                      <div className="tm-product-card-labels">
                        <span className="uk-label uk-label-danger">
                          trade-in
                        </span>
                      </div>
                      <figure className="tm-media-box-wrap">
                        <img
                          src="https://chekromul.github.io/uikit-ecommerce-template/images/products/6/6-medium.jpg"
                          alt='Apple MacBook Air 13" MQD32LL/A 128GB (Silver)'
                        />
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 className="tm-product-card-title">
                      <a className="uk-link-heading" href="product.html">
                        Apple MacBook Air 13" MQD32LL/A 128GB (Silver)
                      </a>
                    </h3>
                    <ul className="uk-list uk-text-small tm-product-card-properties">
                      <li>
                        <span className="uk-text-muted">
                          Diagonal display:{" "}
                        </span>
                        <span>13.3"</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">CPU: </span>
                        <span>Intel®&nbsp;Core™ i5</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">RAM: </span>
                        <span>8&nbsp;GB</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">Video Card: </span>
                        <span>Intel® HD Graphics 6000</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$849.00</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions">
                        <a
                          className="tm-product-card-action js-add-to js-add-to-favorites"
                          title="Add to favorites"
                        >
                          <span
                            uk-icon="icon: heart; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to favorites
                          </span>
                        </a>
                        <a
                          className="tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to"
                          title="Add to compare"
                        >
                          <span
                            uk-icon="icon: copy; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to compare
                          </span>
                        </a>
                      </div>
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                        <span
                          className="tm-product-card-add-button-icon uk-icon"
                          uk-icon="cart"
                        ></span>
                        <span className="tm-product-card-add-button-text">
                          add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tm-product-card uk-grid-margin">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3">
                    <a className="tm-media-box" href="product.html">
                      <figure className="tm-media-box-wrap">
                        <img
                          src="https://chekromul.github.io/uikit-ecommerce-template/images/products/7/7-medium.jpg"
                          alt="Dell Inspiron 5378-2063 (Gray)"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 className="tm-product-card-title">
                      <a className="uk-link-heading" href="product.html">
                        Dell Inspiron 5378-2063 (Gray)
                      </a>
                    </h3>
                    <ul className="uk-list uk-text-small tm-product-card-properties">
                      <li>
                        <span className="uk-text-muted">
                          Diagonal display:{" "}
                        </span>
                        <span>13.3"</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">CPU: </span>
                        <span>Intel®&nbsp;Core™ i3-7100U</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">RAM: </span>
                        <span>4&nbsp;GB</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">HDD Capacity: </span>
                        <span>1&nbsp;TB</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <del className="uk-text-meta">$599.00</del>
                      <div className="tm-product-card-price">$579.00</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions">
                        <a
                          className="tm-product-card-action js-add-to js-add-to-favorites"
                          title="Add to favorites"
                        >
                          <span
                            uk-icon="icon: heart; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to favorites
                          </span>
                        </a>
                        <a
                          className="tm-product-card-action js-add-to js-add-to-compare"
                          title="Add to compare"
                        >
                          <span
                            uk-icon="icon: copy; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to compare
                          </span>
                        </a>
                      </div>
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                        <span
                          className="tm-product-card-add-button-icon uk-icon"
                          uk-icon="cart"
                        ></span>
                        <span className="tm-product-card-add-button-text">
                          add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tm-product-card uk-grid-margin">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3">
                    <a className="tm-media-box" href="product.html">
                      <div className="tm-product-card-labels">
                        <span className="uk-label uk-label-success">new</span>
                      </div>
                      <figure className="tm-media-box-wrap">
                        <img
                          src="https://chekromul.github.io/uikit-ecommerce-template/images/products/8/8-medium.jpg"
                          alt="Lenovo Yoga 720-13IKB 80X60059RK (Silver)"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 className="tm-product-card-title">
                      <a className="uk-link-heading" href="product.html">
                        Lenovo Yoga 720-13IKB 80X60059RK (Silver)
                      </a>
                    </h3>
                    <ul className="uk-list uk-text-small tm-product-card-properties">
                      <li>
                        <span className="uk-text-muted">
                          Diagonal display:{" "}
                        </span>
                        <span>13.3"</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">CPU: </span>
                        <span>Intel®&nbsp;Core™ i5-7200U</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">RAM: </span>
                        <span>8&nbsp;GB</span>
                      </li>
                      <li>
                        <span className="uk-text-muted">Video Card: </span>
                        <span>Intel® HD Graphics 620</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$1099.00</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions">
                        <a
                          className="tm-product-card-action js-add-to js-add-to-favorites"
                          title="Add to favorites"
                        >
                          <span
                            uk-icon="icon: heart; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to favorites
                          </span>
                        </a>
                        <a
                          className="tm-product-card-action js-add-to js-add-to-compare"
                          title="Add to compare"
                        >
                          <span
                            uk-icon="icon: copy; ratio: .75;"
                            className="uk-icon"
                          ></span>
                          <span className="tm-product-card-action-text">
                            Add to compare
                          </span>
                        </a>
                      </div>
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                        <span
                          className="tm-product-card-add-button-icon uk-icon"
                          uk-icon="cart"
                        ></span>
                        <span className="tm-product-card-add-button-text">
                          add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="uk-margin uk-text-center">
            <a
              className="uk-link-muted uk-text-uppercase tm-link-to-all"
              href="subcategory.html"
            >
              <span>shop all</span>
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
