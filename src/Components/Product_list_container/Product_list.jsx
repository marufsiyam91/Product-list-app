import React, { useState } from "react";
import Products from "../Products/Products";

function Product_list() {
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [listedProducts, setListedProducts] = useState([]);


  const product = {
    productName,
    productId,
    productPrice,
    productQuantity,
    description,
  };

  const clearInput = () => {
    setProductName("");
    setProductId("");
    setProductPrice("");
    setProductQuantity("");
    setDescription("");
  };

  const submitHandler = (e) => {
     e.preventDefault()
    setListedProducts([...listedProducts, product]);
    clearInput();
  };


  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label htmlFor="productId">Product Id</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />

        <label htmlFor="productPrice">Product Price</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />

        <label htmlFor="productQuantity">Quantity</label>
        <input
          type="text"
          id="productQuantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />

        <label htmlFor="productDescription">Description</label>
        <input
          type="text"
          id="productDecription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>Add Product</button>
      </form>

      <div className="products_list_wrapper">
        {listedProducts.map((product) => (
          <Products key={product.productId} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default Product_list;
