import React from "react";
import axios from "axios";
import Products from "./components/Products";

export default class App extends React.Component {
  state = {
    products: [],
    cartItems: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get("https://shopping-cart-json-server.herokuapp.com/products");
      this.setState({products: response.data});
    } catch (e) {
      alert("Something went wrong!");
    }
  }

  addToCart = product => {
    const {cartItems} = this.state;
    const item = cartItems.find(item => item.id === product.id);
    if (item) {
      return this.increaseQuantity(product);
    }

    this.setState({cartItems: [{...product, quantity: 1}, ...cartItems]});
  };

  removeFromCart = id => {
    const {cartItems} = this.state;
    const filteredItems = cartItems.filter(item => item.id !== id);
    this.setState({cartItems: filteredItems});
  };

  increaseQuantity = cartItem => {
    const {cartItems} = this.state;

    const items = cartItems.map(item => {
      if (item.id === cartItem.id) {
        return {...item, quantity: item.quantity + 1};
      }

      return item;
    });

    this.setState({cartItems: [...items]});
  };

  decreaseQuantity = cartItem => {
    const {cartItems} = this.state;

    if (cartItem.quantity === 1) {
      return this.removeFromCart(cartItem.id);
    }

    const items = cartItems.map(item => {
      if (item.id === cartItem.id) {
        return {...item, quantity: item.quantity - 1};
      }

      return item;
    });

    this.setState({cartItems: [...items]});
  };

  render() {
    const {products, cartItems} = this.state;
    return (
      <div className="app">
        <h1>SocialNerds</h1>
        <input className="search" type="text" placeholder="Search..."/>
        <div className="main">
          <Products products={products} addToCart={this.addToCart}/>
          <div className="cart">
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <span>{item.quantity}-</span>
                  <span>{item.name}</span>
                  <button onClick={() => this.increaseQuantity(item)}>+</button>
                  <button onClick={() => this.decreaseQuantity(item)}>-</button>
                  <button
                    className={`remove`}
                    onClick={() => this.removeFromCart(item.id)}
                  >
                    x
                  </button>
                </li>
              ))}
              <div>
                Total:
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
