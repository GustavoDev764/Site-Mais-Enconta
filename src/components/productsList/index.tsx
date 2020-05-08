import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { TopProducts } from "../../store/ducks/topProducts/types";
import * as TopProductsActions from "../../store/ducks/topProducts/actions";
import { ApplicationState } from "../../store";

interface StateProps {
  products: TopProducts[];
}
interface DispacthProps {}
interface OwnProps {}

type Props = StateProps & DispacthProps & OwnProps;

class ProductsList extends Component<Props> {
  componentDidMount() {}
  render() {
    const { products } = this.props;
    return (
      <ul>
        {products.map((product) => {
          return <li>{product.name}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  products: state.topProducts.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  bindActionCreators(TopProductsActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
