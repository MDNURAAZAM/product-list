import React from "react";

const NoProductsFound = () => {
  return (
    <div style={{position: 'absolute'}} className="mx-auto max-w-7xl sm:static">
      <p className="mt-4 text-xl text-gray-500 text-center">
        Sorry, no products found.
      </p>
    </div>
  );
};

export default NoProductsFound;
