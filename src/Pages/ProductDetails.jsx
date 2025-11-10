import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ProductDetailsCard from "../Components/products/ProductDetailsCard";
import Loader from "../Components/common/Loader";
import BidsTable from "../Components/bids/BidsTable";

const ProductDetails = () => {
  const product = useLoaderData();
  const [bids, setBids] = useState([]);
  // console.log(product);

  const fetchBids = () => {
    fetch(`http://localhost:3000/products/bids/${product._id}`)
      .then((res) => res.json())
      .then((data) => {
        // ✅ Sort by bid_time descending (newest first)
        const sorted = [...data].sort(
          (a, b) => new Date(b.bid_time) - new Date(a.bid_time)
        );
        setBids(sorted);
      })
      .catch((err) => console.error("Error fetching bids:", err));
  };

  useEffect(() => {
    fetchBids();
  }, [product._id]);
  // Called from child after a new bid is successfully added
  const handleBidAdded = () => {
    fetchBids(); // ✅ refresh bids after placing new one
  };
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <ProductDetailsCard
          product={product}
          onBidAdded={handleBidAdded}
        ></ProductDetailsCard>
      </Suspense>

      <div>
        <h3 className="text-3xl text-center my-10">
          Bids for this Product{" "}
          <span className="text-sm">({bids.length})</span>{" "}
        </h3>

        <div className="overflow-x-auto">
          <table className="table">
            {/* Head should appear once */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Buyer</th>
                <th>Buyer Email</th>
                <th>Bid Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {bids.map((bid, index) => (
                <BidsTable bid={bid} key={bid._id} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
