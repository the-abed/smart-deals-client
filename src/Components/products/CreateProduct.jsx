import axios from "axios";
import React, { use } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CreateProduct = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const axiosInstance2 = useAxiosSecure();
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image_url.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;
    // console.log('form submitted', title,image,price_min,price_max);
    const newProduct = {
      title,
      image,
      price_min,
      price_max,
      email: user.email,
      seller_name: user.displayName,
      seller_image: user.photoURL,
    };
    // axios
    //   .post("http://localhost:3000/products", newProduct)
    //   .then((data) => {
    //     console.log(data);
    //     Swal.fire("Good job!", "Product created successfully", "success");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // axiosInstance.post("/products", newProduct).then((data) => {
    //   console.log(data);
    //   Swal.fire("Good job!", "Product created successfully", "success");
    // })

    axiosInstance2
      .post("/products", newProduct)
      .then((data) => {
        console.log(data);
        Swal.fire("Good job!", "Product created successfully", "success");
      })
      .catch((err) => {
        console.log(err);
      });


  };
  return (
    <div>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-4 transition-colors duration-300">
        <div className=" p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
          <h3 className="text-center font-semibold text-gray-900 dark:text-gray-100">
            Create a Product
          </h3>
          <form onSubmit={handleCreateProduct} className="mt-4 space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="text-gray-600 dark:text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-gray-600 dark:text-gray-300"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="image_url"
                className="text-gray-600 dark:text-gray-300"
              >
                Image URL
              </label>
            </div>
            <input
              type="url"
              id="image_url"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="price_min"
                  className="text-gray-600 dark:text-gray-300"
                >
                  Min Price
                </label>
                <input
                  type="number"
                  id="price_min"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="price_max"
                  className="text-gray-600 dark:text-gray-300"
                >
                  Max Price
                </label>
                <input
                  type="number"
                  id="price_max"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="condition"
                  className="text-gray-600 dark:text-gray-300"
                >
                  Condition
                </label>
                <input
                  type="text"
                  id="condition"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="price"
                className="text-gray-600 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-gray-600 dark:text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
