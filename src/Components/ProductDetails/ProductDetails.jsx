import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handelApi } from "../../JS/handelApi";
import Slider from "../Slider/Slider";

function ProductDetails({ setCarts }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    handelApi.getallData(
      `products/${productId}`,
      setProductDetails,
      setError,
      () => setLoading(true),
      () => setLoading(false)
    );
  }, [productId]);

  const addToCart = (productItem) => {
    setCarts((prevCarts) => [...prevCarts, productItem]); // Update cart state
  };

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!productDetails) return null;

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    sku,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    reviews,
    returnPolicy,
    images,
  } = productDetails;

  const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

  const loadImgs = (images) => {
    return <Slider images={images} />;
  };

  const loadReviews = (reviews) => {
    return reviews.map((review, index) => (
      <li
        className="flex justify-between items-baseline border-b border-gray-200 py-2"
        key={index}
      >
        <div className="flex-1">
          <div className="font-bold">{review.reviewerName}</div>
          <p>{review.comment}</p>
        </div>
        <span className="badge bg-primary rounded-full text-white">
          {review.rating}★
        </span>
      </li>
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 px-5 md:px-20">
      <div className="col-span-1 flex flex-col justify-center ">
        {loadImgs(images)}
      </div>
      <div className="col-span-2 flex flex-col justify-center gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{description}</p>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★</span>
            <div className="bg-red-600 text-white rounded px-2 py-1">
              {rating}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold text-2xl">
              ${discountedPrice}{" "}
              <small className="text-gray-500">
                <del>${price}</del> ({discountPercentage}% off)
              </small>
            </p>
            <button
              className="btn btn-primary"
              onClick={() =>
                addToCart({
                  id: Number(productId),
                  title,
                  image: images[0],
                  price,
                  stock,
                })
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
        <p>
          <strong>Brand:</strong> {brand}
        </p>
        <p>
          <strong>SKU:</strong> {sku}
        </p>
        <p>
          <strong>Weight:</strong> {weight}g
        </p>
        <p>
          <strong>Dimensions:</strong> {dimensions.width} x {dimensions.height}{" "}
          x {dimensions.depth} cm
        </p>
        <p>
          <strong>Warranty Information:</strong> {warrantyInformation}
        </p>
        <p>
          <strong>Shipping Information:</strong> {shippingInformation}
        </p>
        <p>
          <strong>Availability Status:</strong> {availabilityStatus}
        </p>
        <p>
          <strong>Return Policy:</strong> {returnPolicy}
        </p>
        <p>
          <strong>Tags:</strong> {tags.join(", ")}
        </p>
        <div>
          <h3 className="text-xl font-semibold">Reviews</h3>
          <ul className="list-disc pl-5">{loadReviews(reviews)}</ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
