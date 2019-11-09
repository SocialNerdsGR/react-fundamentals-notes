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
    const {cartItems} = this.state;
    this.setState({cartItems: [product, ...cartItems]});
  };

  render() {
    const {products} = this.state;

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
                    <button disabled={!product.available} onClick={() => this.addToCart(product)}>Add to cart</button>
                  </div>
                )
              )
            }
          </div>
          <div className="cart">
            <ul>

            </ul>
          </div>
        </div>
      </div>
    );
  }
}
