import React, { useRef, useState } from "react";
import Button from "./Button";
import { buttonList } from "../../utils/util";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { useSelector } from "react-redux";

const ButtonsList = () => {
  const scrollRefContainer = useRef(null);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const { isMenuOpen } = useSelector((state) => state.app);
  const [activeButton, setActiveButton] = useState("All");

  const scrollHorizontally = (direction) => {
    direction === "right"
      ? (scrollRefContainer.current.scrollLeft += 100)
      : (scrollRefContainer.current.scrollLeft -= 100);
    if (scrollRefContainer.current.scrollLeft > 0) {
      setIsLeftVisible(true);
    } else {
      setIsLeftVisible(false);
    }
  };
  return (
    <div
      className={`flex items-center mb-5 ${
        isMenuOpen ? "w-[64rem]" : "w-[80rem]"
      }`}
    >
      {isLeftVisible && (
        <span
          className="p-1 bg-zinc-500 hover:bg-blue-800 text-white text-xl rounded-full cursor-pointer mr-1"
          onClick={() => {
            scrollHorizontally("left");
          }}
        >
          <BiSolidChevronLeft />
        </span>
      )}
      <div
        className="flex overflow-x-auto overflow-x-hidden"
        ref={scrollRefContainer}
      >
        {buttonList.map((btn, i) => (
          <Button
            name={btn}
            key={i}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        ))}
      </div>
      <span
        className="p-1 bg-zinc-500 hover:bg-blue-800 text-white text-xl rounded-full cursor-pointer ml-1"
        onClick={() => {
          scrollHorizontally("right");
        }}
      >
        <BiSolidChevronRight />
      </span>
    </div>
  );
};

export default ButtonsList;
