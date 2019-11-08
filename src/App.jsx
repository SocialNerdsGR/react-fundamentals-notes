import React from "react";


// https://shopping-cart-json-server.herokuapp.com/products

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>SocialNerds</h1>
        <input className="search" type="text" placeholder="Search..."/>
        <div className="main">
          <div className="products"></div>
          <div className="cart"></div>
        </div>
      </div>
    );
  }
}
