import React from "react";
import Button from "./Button";
import { buttonList } from "../../utils/util";

const ButtonsList = () => {
  return (
    <div className="flex mb-5">
      {buttonList.map((btn) => (
        <Button name={btn} />
      ))}
    </div>
  );
};

export default ButtonsList;
