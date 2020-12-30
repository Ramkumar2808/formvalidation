import React from "react";
import "./Product.css";
function Products() {
  return (
    <div id="form">
      <h2>Products</h2>

      <form action="#" method="get">
        <div className="form-control">
          <input
            type="text"
            name="product"
            id="product"
            placeholder="Product Name"
          />
        </div>
        <div className="form-control">
          <input type="text" name="price" id="pwd" placeholder="Price" />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
          />
        </div>
        <div className="form-control">
          <input type="submit" value="ADD PRODUCT" id="submit" />
        </div>
      </form>
    </div>
  );
}

export default Products;
