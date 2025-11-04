import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product, onView }) => {
  const { _id, title, image, condition, price_max } = product || {};

  return (
    <div className="">
      <article className="w-full bg-white/80 dark:bg-gray-800/70  rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition hover:shadow-lg hover:scale-[1.02] duration-200 ">
        {/* Product Image */}
        <div className="w-full h-52 overflow-hidden bg-gray-100 dark:bg-gray-700 ">
          <img
            src={image || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={title || "Product image"}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
            {title ?? "Product name"} ( {condition} )
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Price:{" "}
            <span className="font-medium text-gray-900 dark:text-gray-100">
              $ {price_max ?? "$0.00"}
            </span>
          </p>

          <div className="mt-4 flex items-center justify-between">
            <Link
              className="w-full btn-gradient "
              to={`/product-details/${_id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
