import React from 'react'

function Product({product}) {

    const {name, description, price}  = product;

    const buyProduct = () => 
        {

        };

  return (
      <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick = {() => {
        alert(`Succes Buying Product ${name}`)

      }}>Buy Product</button>
    </div>
  )
}

export default Product