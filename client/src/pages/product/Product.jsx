import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductDetail from "./product/ProductDetail";
import ProductEdit from "./product/ProductEdit";
import ProductHome from "./product/ProductHome";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route path="/product" exact component={ProductHome}></Route>
        <Route path="/product/edit" component={ProductEdit}></Route>
        <Route path="/product/detail" component={ProductDetail}></Route>
        <Redirect to="/product" />
      </Switch>
    );
  }
}

export default Product;
