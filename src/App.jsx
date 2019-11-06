import React from "react";
import axios from 'axios';

export default class App extends React.Component {
  state = {
    products: [],
    cartItems: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get('https://shopping-cart-json-server.herokuapp.com/products');
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

  removeFromCart = (id) => {
    const { cartItems } = this.state;
    const items = cartItems.filter(cartItem => {
      console.log(cartItem.id === id);
      return cartItem.id !== id;
    });
    this.setState({cartItems: items});
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
                cartItems.map(cartItem => (
                  <li key={cartItem.id}>
                    <span>{cartItem.name}</span>
                    <button className="remove" onClick={() => this.removeFromCart(cartItem.id)}>x</button>
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
