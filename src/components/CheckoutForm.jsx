import React from 'react';

class CheckoutForm extends React.Component {
  state = {
  };

  fieldsHandler = (event) => {
  };

  formHandler = (event) => {
    // alert(JSON.stringify({
    //   name,
    //   email,
    //   address
    // }));
  };

  render() {
    return (
      <form onSubmit={}>
        <ul>
        </ul>
        <div>
          Total:

        </div>
        <div>
          Name:
          <input type="text" required value={} onChange={}/>
        </div>
        <div>
          Email:
          <input type="email" required value={} onChange={}/>
        </div>
        <div>
          Address:
          <input type="text" required value={} onChange={}/>
        </div>
        <div>
          <input type="submit" value="Pay"/>
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
