import React from "react";
import SearchSVG from "../SVGs/SearchSVG";
import CartSVG from "../SVGs/CartSVG";
import SortSVG from "../SVGs/SortSVG";
import FilterSVG from "../SVGs/FilterSVG";
import Products from "./Products";
import SeacrhContainer from "./SeacrhContainer";
import SortContainer from "./SortContainer";
import FilterContainer from "./FilterContainer";
import CartContainer from "./CartContainer";

const ProductsContainer = () => {
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            New Arrivals
          </h1>
          <p className="mt-4 text-xl text-gray-500 text-center">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            {/* <!-- Sort & Filter--> */}
            <div className="w-full">
              <SortContainer />
              <FilterContainer />
            </div>

            {/* <!-- Search and Cart --> */}
            <div className="flex gap-2 items-center">
              <SeacrhContainer />
              <CartContainer />
            </div>
          </div>
        </div>

        <Products />
      </div>
    </div>
  );
};

export default ProductsContainer;
