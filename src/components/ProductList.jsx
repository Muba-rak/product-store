import React from "react";
import { useFetch } from "../useFetch";
import SingleProduct from "./SingleProduct";
import Loader from "./Loader";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => {
          return <SingleProduct key={product.product_id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
