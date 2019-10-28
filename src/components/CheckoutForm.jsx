import React from 'react';

class CheckoutForm extends React.Component {
  state = {
    name: '',
    email: '',
    address: ''
  };

  fieldsHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  formHandler = (event) => {
    event.preventDefault();
    const {
      name,
      email,
      address
    } = this.state;

    alert(JSON.stringify({
      name,
      email,
      address
    }))
  };

  render() {
    const {cartItems} = this.props;
    const {
      name,
      email,
      address
    } = this.state;

    return (
      <form onSubmit={this.formHandler}>
        <ul>
          {cartItems.map((item) => (<li key={item.id}>{item.name} x {item.quantity} = {item.quantity * item.price}</li>))}
        </ul>
        <div>
          Total:
          {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
        </div>
        <div>
          Name:
          <input type="text" required name="name" value={name} onChange={this.fieldsHandler}/>
        </div>
        <div>
          Email:
          <input type="email" required name="email" value={email} onChange={this.fieldsHandler}/>
        </div>
        <div>
          Address:
          <input type="text" required name="address" value={address} onChange={this.fieldsHandler}/>
        </div>
        <div>
          <input type="submit" value="Pay"/>
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
