import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  let buttonList = [
    "All",
    "Gaming",
    "Sports",
    "News",
    "Live",
    "Music",
    "Cooking",
    "Trending",
    "Gaming",
    "Sports",
    "News",
    "Live"
  ];
  return (
    <div className="flex mb-5">
      {buttonList.map((btn) => (
        <Button name={btn} />
      ))}
    </div>
  );
};

export default ButtonsList;
