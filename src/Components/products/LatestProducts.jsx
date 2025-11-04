import React, { use } from 'react';
import ProductCard from './ProductCard';

const LatestProducts = ({latestProductsPromise}) => {
    const products = use(latestProductsPromise);
    // console.log(products)
    return (
        <div className='max-w-7xl w-full mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
              }
          </div>
        </div>
    );
};

export default LatestProducts;