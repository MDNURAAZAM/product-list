import { useEffect, useState } from "react";

export const useProducts = (category = "") => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";

    if (category?.length > 0) {
      url = `${url}/category/${category}`;
    }

    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [category]);

  return { products, isLoading, isError };
};
