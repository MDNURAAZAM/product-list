import React from "react";
import CartSVG from "../SVGs/CartSVG";

const CartContainer = ({ cartLength }) => {
  return (
    <div className="flow-root">
      <a href="#" className="group -m-2 flex items-center p-2">
        <CartSVG cartLength={cartLength} />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cartLength}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
};

export default CartContainer;
