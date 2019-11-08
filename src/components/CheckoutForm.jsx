import React from 'react';

class CheckoutForm extends React.Component {
  state = {
    email: '',
    name: '',
    address: ''
  };

  fieldsHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  formHandler = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
    this.setState({
      email: '',
      name: '',
      address: ''
    });
  };

  render() {
    const {name, email, address} = this.state;
    return (
      <form onSubmit={this.formHandler}>
        <ul>
          {
            this.props.cartItems.map(item => <li key={item.id}>{item.quantity} x {item.price} - {item.name}</li>)
          }
        </ul>
        <div>
          Total:
          {
            this.props.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
          }
        </div>
        <div>
          Name:
          <input type="text" required  name={'name'} value={name} onChange={this.fieldsHandler}/>
        </div>
        <div>
          Email:
          <input type="email" required name={'email'} value={email} onChange={this.fieldsHandler}/>
        </div>
        <div>
          Address:
          <input type="text" required name={'address'} value={address} onChange={this.fieldsHandler}/>
        </div>
        <div>
          <input type="submit" value="Pay"/>
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
