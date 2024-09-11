import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleProduct from "./SingleProduct";
import Loader from "./Loader";
import { useFetch } from "../useFetch";

const ProductSlide = () => {
  const {
    isLoading,
    data: products,
    isError,
  } = useFetch("https://fake-store-api.mock.beeceptor.com/api/products");

  const settings = {
    dots: true,
    infinite: true, // Changed to true for continuous sliding
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true, // Ensure that arrows are enabled
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Error Fetching products</h1>;
  }

  return (
    <div className="container my-5 py-5">
      <Slider {...settings} className="slider-container">
        {products.map((product) => (
          <SingleProduct key={product.product_id} {...product} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlide;
