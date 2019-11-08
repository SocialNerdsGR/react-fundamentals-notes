import React from 'react';


const CartItems = ({cartItems, increaseQuantity, decreaseQuantity, removeFromCart}) => {
  return (
    <div className="cart">
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
          <span>
            {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
          </span>
        </div>
      </ul>
    </div>
  );
};

export default CartItems;
