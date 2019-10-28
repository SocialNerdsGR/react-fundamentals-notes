import React from "react";
import axios from 'axios';

export default class App extends React.Component {
  state = {
    products: [],
    cartItems: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3001/products');
      this.setState({products: response.data});
    } catch (e) {
      alert('Something went wrong!');
    }
  }

  addToCart = (product) => {
    const { cartItems } = this.state;
    const item = cartItems.find(item => item.id === product.id);
    if (item) {
      return;
    }

    this.setState({cartItems: [product, ...cartItems]});
  };

  render() {
    const {products, cartItems} = this.state;

    return (
      <div className="app">
        <h1>SocialNerds</h1>
        <input className="search" type="text" placeholder="Search..."/>
        <div className="main">
          <div className="products">
            {
              products.map(product => (
                  <div key={product.id}>
                    <h4>{product.name} - {product.price}</h4>
                    <button disabled={!product.available} onClick={() => this.addToCart(product)} >Add to cart</button>
                  </div>
                )
              )
            }
          </div>
          <div className="cart">
            <ul>
              {
                cartItems.map(item => (
                  <li key={item.id}>
                    <span>{item.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
