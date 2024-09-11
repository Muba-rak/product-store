import React from "react";
import { useFetch } from "../useFetch";
import SingleProduct from "./SingleProduct";
import Loader from "./Loader";

const ProductList = () => {
  const {
    isLoading,
    data: products,
    isError,
  } = useFetch("https://fake-store-api.mock.beeceptor.com/api/products");
  console.log(products);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Error Fetching products</h1>;
  }

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => {
          return <SingleProduct key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
