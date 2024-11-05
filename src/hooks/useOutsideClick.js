import { useEffect } from "react";

export const useOutsideClick = ({ buttonRef, dropdownRef, setShow }) => {
  const handleOutsideClick = (event) => {
    const button = buttonRef.current;
    const dropdown = dropdownRef.current;
    if (button && dropdown) {
      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        setShow(false);
      }
    }
  };

  //handling outside click
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
};
