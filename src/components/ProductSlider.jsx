import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import the Navigation module
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // Import navigation styles specifically
import SingleProduct from "./SingleProduct";
import Loader from "./Loader";
import { useFetch } from "../useFetch";

const ProductSlider = () => {
  const {
    isLoading,
    data: products,
    isError,
  } = useFetch("https://fake-store-api.mock.beeceptor.com/api/products");

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Error Fetching products</h1>;
  }

  return (
    <div className="container product-slide">
      <h1>Our Products</h1>
      <Swiper
        spaceBetween={20}
        navigation={true} // Enable navigation buttons
        modules={[Navigation]} // Include the Navigation module
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.product_id}>
            <SingleProduct {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
