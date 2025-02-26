import { useRef, useState } from "react";
import FilterSVG from "../SVGs/FilterSVG";
import { capitilizeFirstLetter } from "../../utils";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const FilterContainer = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const [show, setShow] = useState(false);

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  //handle outside click
  useOutsideClick({ buttonRef, dropdownRef, setShow });

  //toggling visiblity
  const handleToggle = () => {
    setShow((s) => !s);
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
          Filter
          <FilterSVG />
        </button>
      </div>
      {/* <!-- Filter options --> */}
      {show && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {categories?.length > 0 &&
              categories?.map((category) => (
                <label
                  key={category}
                  className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    id="filter-option-1"
                    checked={category === selectedCategory}
                    onChange={() => onCategoryChange(category)}
                  />
                  <span className="ml-2">
                    {capitilizeFirstLetter(category)}
                  </span>
                </label>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterContainer;
