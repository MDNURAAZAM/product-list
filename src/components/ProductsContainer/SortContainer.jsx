import React, { useEffect, useRef, useState } from "react";
import SortSVG from "../SVGs/SortSVG";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const SortContainer = ({ onSortChange }) => {
  const [show, setShow] = useState(false);

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  //handle outside click
  useOutsideClick({ buttonRef, dropdownRef, setShow });

  //toggling visiblity
  const handleToggle = () => {
    setShow((s) => !s);
  };

  //sort options click handler
  const handleSortAsceneding = (value) => {
    onSortChange(value);
    setShow(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div onClick={handleToggle}>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          aria-expanded={show}
          aria-haspopup="true"
        >
          Sort
          <SortSVG />
        </button>
      </div>

      {/* <!-- Sort Options --> */}
      {show && (
        <div
          ref={dropdownRef}
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
              onClick={() => handleSortAsceneding(true)}
            >
              Low to High
            </span>
            <span
              href=""
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleSortAsceneding(false)}
            >
              High to Low
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortContainer;
