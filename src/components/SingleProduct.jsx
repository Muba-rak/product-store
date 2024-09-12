import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const SingleProduct = ({
  image,
  price,
  product_id,
  name,
  brand,
  rating,
  discount,
}) => {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        onError={(e) => {
          e.currentTarget.src = `https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png`;
        }}
      />
      <div className="flex ">
        <h3>{name}</h3>
        <h3 className="fw-light">{brand} </h3>
      </div>
      <div className="flex">
        <p className="price">£ {price}</p>
        <p> Discount: {discount}% </p>
      </div>
      <p className="rating">Rating : {rating}</p>

      <p></p>
      <hr />
      <div className="flex w-100">
        <button className="flex">
          {" "}
          <MdOutlineShoppingCart />
          Add to Cart
        </button>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default SingleProduct;
