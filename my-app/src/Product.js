import React from "react";
import ItemDescription from "./ItemDescription";
import "./Product.css";

function Product({ name, description, price }) {
  /*
    Instead of calling props.price, props.description every time,
    you can destructure it in the beginning like:
    ({name, description, price})
*/
  return (
    <div className="product">
      <ItemDescription name={name} description={description} />
      <h2 className="product__error">An error occured</h2>
      <h3 className="product__price">${price}</h3>
    </div>
  );
}

export default Product;
