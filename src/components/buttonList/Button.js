import React from "react";
import { setSearchedText } from "../../slices/searchSlice";
import { useDispatch } from "react-redux";

const Button = ({ name, activeButton, setActiveButton }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={`px-3 py-1 mx-2 ${
          name === activeButton ? "bg-black text-white" : "bg-gray-200"
        } rounded-lg scroll-button hover:bg-gray-300`}
        onClick={() => {
          setActiveButton(name);
          dispatch(setSearchedText(name));
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
