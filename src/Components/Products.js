import React, { Component } from "react";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      price: "",
      category: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { productname, price, category } = this.state;
    event.preventDefault();
    alert(` 
      ____Your Details____ 
      Product Name : ${productname} 
      Price : ${price} 
      Category : ${category}  
      
    `);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    const formStyle = {
      padding: "1rem",
      margin: "100px auto",
      width: "460px",
      color: "white",
    };

    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <h2>Add Product</h2>
        <div>
          <label htmlFor="product">Product</label>
          <input
            name="productname"
            placeholder="Product Name"
            value={this.state.productname}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            name="price"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            name="category"
            placeholder="Category"
            value={this.state.category}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button>Add Product</button>
        </div>
      </form>
    );
  }
}

export default Products;
