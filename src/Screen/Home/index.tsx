import React, { Component } from "react";

import Header from "../../components/header";
import NavOfCanvas from "../../components/navofcanvas";
import CartCanvas from "../../components/cartcanvas";
import Carousel from "../../components/carousel";
import Categories from "../../components/categories";
import TopProducts from "../../components/topproducts";
import Brands from "../../components/brands";
import Main from "../../components/main";
import Footer from "../../components/footer";

export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <div className="uk-offcanvas-content">
          <Header />
          <Main>
            <Carousel />
            <Categories />
            <TopProducts />
            <Brands />
          </Main>
          <Footer />
        </div>
        <NavOfCanvas />
        <CartCanvas />
      </>
    );
  }
}
