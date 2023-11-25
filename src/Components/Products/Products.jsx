import React from 'react'

const Products = ({product}) => {
     console.log(product)
     const {productName, productId, productPrice,productQuantity, description} = product
  return (
    <div>
          <h1>Product Name: {productName}</h1>
          <h1>Product Id: {productId}</h1>
          <h1>Product Price: {productPrice}</h1>
          <h1>Product Quantity; {productQuantity}</h1>
          <h1>Product Description: {description}</h1>
    </div>
  )
}

export default Products
