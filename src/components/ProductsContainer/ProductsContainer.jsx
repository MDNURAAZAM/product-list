import React from "react";
import SeacrhContainer from "./SeacrhContainer";
import SortContainer from "./SortContainer";
import FilterContainer from "./FilterContainer";
import CartContainer from "./CartContainer";
import { useProducts } from "../../hooks/useProducts";
import ProductItem from "./ProductItem";
import LoadingComponent from "./LoadingComponent";

const ProductsContainer = () => {
  const { products, isLoading, isError } = useProducts();

  let component;
  if (isLoading) {
    component = <LoadingComponent />;
  } else if (isError) {
    component = <div>Error...</div>;
  } else {
    component =
      products?.length > 0 &&
      products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ));
  }


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

        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {component}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
