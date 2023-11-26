import React from 'react'
import './Products.css'

const Products = ({product}) => {
     console.log(product)
     const {productName, productId, productPrice,productQuantity, description} = product
  return (
    <div>
          <tr>
               <td>{productId}</td>
               <td>{productName}</td>
               <td>{productPrice}</td>
               <td>{productQuantity}</td>
               <td>{description}</td>
          </tr>
    </div>
  )
}

export default Products
