import React from "react";

const ErrorComponent = () => {
  return (
    <div
      style={{ position: "absolute" }}
      className="mx-auto max-w-7xl sm:static"
    >
      <p className="mt-4 text-xl text-gray-500 text-center">
        Sorry, an error occured. Please try again.
      </p>
    </div>
  );
};

export default ErrorComponent;
