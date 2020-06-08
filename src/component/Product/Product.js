import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { name, img, price, star} = props.product;
  return (
    <div className="product">

      <div>
        <img src={img} alt="" />
      </div>

      <div className="product-details">
        <h3>{name}</h3>
        <p><strong>Price: </strong><em>$ {price}</em></p>
        <p>Rating: {star}</p>

        <button onClick={()=> props.handleAddProduct(props.product)} className="main-btn">add to cart</button>
      </div>

    </div>
  );
};

export default Product;
