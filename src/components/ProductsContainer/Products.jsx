import React from 'react';
import ProductItem from './ProductItem';

const Products = () => {
    return (
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {/* <!-- Card --> */}
                <ProductItem />
                <ProductItem />
                <ProductItem />

                <div className="bg-white p-4 rounded-lg shadow animate-pulse">
                  {/* <!-- Image skeleton --> */}
                  <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
                  {/* <!-- Title skeleton --> */}
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  {/* <!-- Category skeleton --> */}
                  <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                  {/* <!-- Price skeleton --> */}
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                  {/* <!-- Button skeleton --> */}
                  <div className="h-10 bg-gray-300 rounded"></div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow animate-pulse">
                  {/* <!-- Image skeleton --> */}
                  <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
                  {/* <!-- Title skeleton --> */}
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  {/* <!-- Category skeleton --> */}
                  <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                  {/* <!-- Price skeleton --> */}
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                  {/* <!-- Button skeleton --> */}
                  <div className="h-10 bg-gray-300 rounded"></div>
                </div>
                {/* <!-- More products... --> */}
              </div>
            </div>
          </div>
        </div>
    );
};

export default Products;