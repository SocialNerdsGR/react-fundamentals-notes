import React from "react";
import axios from "axios";
import Products from "./components/Products";
import CartItems from "./components/CartItems";

export default class App extends React.Component {
  state = {
    products: [],
    cartItems: [],
    checkoutFormVisible: false,
    query: ""
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://shopping-cart-json-server.herokuapp.com/products"
      );
      this.setState({ products: response.data });
    } catch (e) {
      alert("Something went wrong!");
    }
  }

  addToCart = product => {
    const { cartItems } = this.state;
    const item = cartItems.find(item => item.id === product.id);
    if (item) {
      return this.increaseQuantity(product);
    }

    this.setState({ cartItems: [{ ...product, quantity: 1 }, ...cartItems] });
  };

  removeFromCart = id => {
    const { cartItems } = this.state;
    const filteredItems = cartItems.filter(item => item.id !== id);
    this.setState({ cartItems: filteredItems });
  };

  increaseQuantity = product => {
    const { cartItems } = this.state;

    const items = cartItems.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });

    this.setState({ cartItems: [...items] });
  };

  decreaseQuantity = product => {
    const { cartItems } = this.state;

    if (product.quantity === 1) {
      return this.removeFromCart(product.id);
    }

    const items = cartItems.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });

    this.setState({ cartItems: [...items] });
  };

  showCheckoutForm = () => {
    this.setState({ checkoutFormVisible: true });
  };

  handleSearch = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { products, cartItems, checkoutFormVisible, query } = this.state;
    const regex = new RegExp(query, "i");
    const filteredProducts = products.filter(product => {
      return product.name.match(regex);
    });

    return (
      <div className="app">
        <h1>SocialNerds</h1>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={this.handleSearch}
        />
        <div className="main">
          <Products products={filteredProducts} addToCart={this.addToCart} />
          <CartItems
            cartItems={cartItems}
            decreaseQuantity={this.decreaseQuantity}
            increaseQuantity={this.increaseQuantity}
            removeFromCart={this.removeFromCart}
            checkoutFormVisible={checkoutFormVisible}
            showCheckoutForm={this.showCheckoutForm}
          />
        </div>
      </div>
    );
  }
}
