export const capitilizeFirstLetter = (value = "") => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const sortProducts = (products, isAscending) => {
  return [...products]?.sort((a, b) =>
    isAscending ? a?.price - b?.price : b?.price - a?.price
  );
};
