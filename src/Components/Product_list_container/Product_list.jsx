import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Product_list.css";
import { getProductFromlocalStorage } from "../../Utils/Utils"

function Product_list() {
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("")
  const [listedProducts, setListedProducts] = useState(getProductFromlocalStorage());

  const product = {
    productName,
    productId: new Date().getMilliseconds(),
    productPrice,
    productQuantity,
    color,
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
      e.preventDefault();
      setListedProducts([...listedProducts, product]);
      clearInput();
  };

  const deleteProduct = (id) => {
    const filteredProduct = listedProducts.filter((product) =>  product.productId !== id )
    setListedProducts(filteredProduct)
    console.log('button clicked')
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(listedProducts))
  }, [listedProducts])

  return (
    <>
        <h1 style={{textAlign: "center", fontFamily: "cursive", marginTop: "15px"}}>Product List App</h1>
        <div className="products_list_container">
            <form onSubmit={submitHandler}>
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
                required
              />

              <label htmlFor="productPrice">Product Price</label>
              <input
                type="number"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="Product Price"
                required
              />

              <label htmlFor="productQuantity">Quantity</label>
              <input
                type="number"
                id="productQuantity"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
                placeholder="Qunatity"
                required
              />


              <label htmlFor="choose_color">Choose Color</label>
              <select 
              style={{width: "95%", height: "30px", borderRadius: "5px"}} 
              name="color" 
              id="choose_color"
              onChange={(e) => setColor(e.target.value)}>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
              </select>

              <label htmlFor="productDescription">Description</label>
              <input
                type="text"
                id="productDecription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
              />

              

              <button>Add Product</button>
            </form>

            <div className="products_list_wrapper">
              {listedProducts.length > 0 ? (
                <>
                  <div className="table_content_wrapper">
                    <table>
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Color</th>
                          <th>Description</th>
                          <th>Delete</th>
                        </tr>

                        {listedProducts.map((product) => (
                          <Products key={product.productId} product={product}  deleteProduct={deleteProduct}/>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <div className="empty_products">No products have been added yet</div>
              )}
            </div>
    </div>
    </>
  );
}

export default Product_list;
