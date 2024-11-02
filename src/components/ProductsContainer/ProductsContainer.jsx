import React from "react";
import ProductItem from "./ProductItem";
import SearchSVG from "../SVGs/SearchSVG";
import CartSVG from "../SVGs/CartSVG";
import SortSVG from "../SVGs/SortSVG";
import FilterSVG from "../SVGs/FilterSVG";

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
              {/* <!-- Sort Start --> */}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Sort
                    <SortSVG />
                  </button>
                </div>

                {/* <!-- Sort Options --> */}
                <div
                  className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <span
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                      role="menuitem"
                      tabIndex="-1"
                    //   onclick="toggleDropdown()"
                      id="menu-item-0"
                    >
                      Low to High
                    </span>
                    <span
                      href=""
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                      role="menuitem"
                      tabIndex="-1"
                    //   onclick="toggleDropdown()"
                      id="menu-item-0"
                    >
                      High to Low
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Sort End --> */}

              {/* <!-- Filter Start --> */}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="filter-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Filter
                    <FilterSVG />
                  </button>
                </div>
                {/* <!-- Filter options --> */}
                <div
                  className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="filter-button"
                  tabIndex="-1"
                  id="filter-dropdown"
                >
                  <div className="py-1" role="none">
                    <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        id="filter-option-1"
                      />
                      <span className="ml-2">Category 1</span>
                    </label>
                    <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        id="filter-option-2"
                      />
                      <span className="ml-2">Category 2</span>
                    </label>
                    <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        id="filter-option-3"
                      />
                      <span className="ml-2">Category 3</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- Filter End --> */}
            </div>

            {/* <!-- Search and Cart --> */}
            <div className="flex gap-2 items-center">
              {/* <!-- Search --> */}
              <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
                <SearchSVG />
                <input
                  className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
                  placeholder="Find anything..."
                  aria-label="Search components"
                  id="headlessui-combobox-input-:r5n:"
                  role="combobox"
                  type="text"
                  aria-expanded="false"
                  aria-autocomplete="list"
                  style={{ caretColor: "rgb(107, 114, 128)" }}
                />
              </div>

              {/* <!-- Cart --> */}
              <div className="flow-root">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <CartSVG />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default ProductsContainer;
