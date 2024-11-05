import React, { useState } from "react";
import SeacrhContainer from "./SeacrhContainer";
import SortContainer from "./SortContainer";
import FilterContainer from "./FilterContainer";
import CartContainer from "./CartContainer";
import { useProducts } from "../../hooks/useProducts";
import ProductItem from "./ProductItem";
import LoadingComponent from "./LoadingComponent";
import { useCategories } from "../../hooks/useCategories";

const ProductsContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);
  const {
    products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useProducts(selectedCategory);

  const {
    categories,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useCategories();

  const handleCategoryChange = (value) => {
    setSelectedCategory((prev) => (prev === value ? "" : value));
  };

  const handleCart = (id) => {
    const alreadyInCart = cart?.includes(id);
    if (alreadyInCart) {
      setCart((prev) => prev?.filter((pId) => pId != id));
    } else {
      setCart((prev) => [...prev, id]);
    }
  };

  let component;
  if (isProductsLoading || isCategoryLoading) {
    component = <LoadingComponent />;
  } else if (isProductsError || isCategoryError) {
    component = <div>Error...</div>;
  } else {
    component =
      products?.length > 0 &&
      products?.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          cart={cart}
          onAddCart={handleCart}
        />
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
              <FilterContainer
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>

            {/* <!-- Search and Cart --> */}
            <div className="flex gap-2 items-center">
              <SeacrhContainer />
              <CartContainer cartLength={cart?.length} />
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
