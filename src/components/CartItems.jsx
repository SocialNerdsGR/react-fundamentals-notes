import React from 'react';
import CheckoutForm from "./CheckoutForm";

const CartItems = ({cartItems, increaseQuantity, decreaseQuantity, removeFromCart, checkoutFormVisible, showCheckoutForm}) => {
  return (
    <div className="cart">
      {
        !checkoutFormVisible ?
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.quantity}-</span>
                <span>{item.name}</span>
                <button onClick={() => increaseQuantity(item)}>+</button>
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <button
                  className={`cart-remove`}
                  onClick={() => removeFromCart(item.id)}
                >
                  x
                </button>
              </li>
            ))}
            <div>
              Total:
              {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
            </div>
            <button disabled={cartItems.length === 0} onClick={showCheckoutForm}>Checkout</button>
          </ul> : <CheckoutForm cartItems={cartItems}/>
      }
    </div>
  );
};

export default CartItems;
