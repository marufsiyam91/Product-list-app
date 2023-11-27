import React from 'react'
import './Products.css'
import {MdDelete} from 'react-icons/md'

const Products = ({product, deleteProduct}) => {
     const {productName, productId,color, productPrice,productQuantity, description} = product
  return (
          <>
               <tr>
                    <td>{productName}</td>
                    <td>{productPrice}</td>
                    <td>{productQuantity}</td>
                    <td>{color}</td>
                    <td>{description}</td>
                    <td onClick={() => deleteProduct(productId)} className='delete_btn'>
                         <MdDelete color='red'/>
                    </td>
               </tr>
          </>

  )
}

export default Products
