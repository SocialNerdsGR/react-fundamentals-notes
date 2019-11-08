import React from 'react';

class CheckoutForm extends React.Component {
  state = {
  };

  fieldsHandler = (event) => {
  };

  formHandler = (event) => {
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <form>
        <ul>
        </ul>
        <div>
          Total:

        </div>
        <div>
          Name:
          <input type="text" required/>
        </div>
        <div>
          Email:
          <input type="email" required/>
        </div>
        <div>
          Address:
          <input type="text" required/>
        </div>
        <div>
          <input type="submit" value="Pay"/>
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
