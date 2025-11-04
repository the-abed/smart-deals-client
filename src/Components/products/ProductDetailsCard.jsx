import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const ProductDetailsCard = ({ product, onBidAdded }) => {
  const { user } = useContext(AuthContext);
  const {
    category,
    condition,
    created_at,
    description,
    email,
    image,
    location,
    phone,
    price_max,
    price_min,
    seller_image,
    seller_name,
    status,
    title,
    usage,
    _id,
  } = product;

  // React state to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.contact.value;
    const image = e.target.image.value;
    const bid = e.target.bid.value;

    const newBid = {
      product: _id,
      product_name: title,
      buyer_name: name,
      buyer_email: email,
      buyer_contact: phone,
      buyer_image: image,
      bid_time: new Date().toISOString(),
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("After placing bid", data);
        closeModal(); // close modal on success
        if (onBidAdded) onBidAdded();
      })
      .catch((err) => console.error(err));
    Swal.fire({
      title: "Approved",
      text: "Your bid has been placed.",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT SECTION: Image + Description */}
        <div className="md:w-1/2 space-y-4">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src={image}
              alt={title}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Product Description
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* RIGHT SECTION: Details */}
        <div className="md:w-1/2 flex flex-col justify-between space-y-6">
          <button
            onClick={() => window.history.back()}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 transition"
          >
            ← Back To Products
          </button>

          <div>
            <h1 className="text-3xl font-semibold text-indigo-900 dark:text-indigo-300">
              {title}
            </h1>
            <div className="text-green-600 dark:text-green-400 text-2xl font-bold mt-2">
              ${price_min} - ${price_max}
            </div>
          </div>

          {/* Product & Seller Details */}
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Product Details
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>ID:</strong> {_id}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Category:</strong> {category}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Date:</strong>{" "}
                {new Date(created_at).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Location:</strong> {location}
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-4">
              <img
                src={seller_image}
                alt={seller_name}
                className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-700 object-cover"
              />
              <div>
                <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Seller Information
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Name:</strong> {seller_name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Email:</strong> {email}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${phone}`}
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    {phone}
                  </a>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Location:</strong> {location}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Condition:</strong> {condition}
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Usage:</strong> {usage}
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    status === "available"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {status}
                </span>
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={openModal}
            className="w-full btn-gradient py-3 rounded-lg font-medium shadow-md transition"
          >
            I Want to Buy This Product
          </button>
        </div>
      </div>

      {/* Controlled Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-lg relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 font-bold text-lg"
            >
              ✕
            </button>

            <h3 className="font-bold text-xl mb-3">
              Give Seller Your Offered Price
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Buyer Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    readOnly
                    defaultValue={user ? user.displayName : ""}
                    placeholder="Enter your name"
                    className="my-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Buyer Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    readOnly
                    defaultValue={user ? user.email : ""}
                    placeholder="Enter your email"
                    className="my-input"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Buyer Image URL
                </label>
                <input
                  name="image"
                  readOnly
                  defaultValue={user.photoURL}
                  placeholder="https://example.com/photo.jpg"
                  className="my-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contact"
                  readOnly
                  defaultValue={phone}
                  placeholder="+8801XXXXXXXXX"
                  className="my-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Place Your Bid Price ($)
                </label>
                <input
                  type="number"
                  name="bid"
                  placeholder="Enter your price"
                  className="my-input"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-gradient hover:bg-purple-700 rounded-lg font-medium shadow-md transition w-full"
              >
                Submit Bid
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsCard;
