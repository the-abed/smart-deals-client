import React, { Suspense } from "react";
import LatestProducts from "../Components/products/LatestProducts";
import Loader from "../Components/common/Loader";
const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());
const Home = () => {
  return (
    <div className="my-12  px-8">
      <Suspense fallback={<Loader></Loader>}>
        <LatestProducts
          latestProductsPromise={latestProductsPromise}
        ></LatestProducts>
      </Suspense>
    </div>
  );
};

export default Home;
