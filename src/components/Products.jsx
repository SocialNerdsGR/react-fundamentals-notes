import React from 'react';


const Products = ({products, addToCart}) => {
  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id}>
          <h4>
            {product.name} - {product.price}
          </h4>
          <button
            disabled={!product.available}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
