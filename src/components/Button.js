import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 mx-2 bg-gray-200 rounded-lg scroll-button">
        {name}
      </button>
    </div>
  );
};

export default Button;
