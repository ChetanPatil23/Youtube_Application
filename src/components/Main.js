import React from "react";
import ButtonsList from "./ButtonsList";
import VideosContainer from "./VideosContainer";

const Main = () => {
  return (
    <div className="col-span-10 p-4">
      <ButtonsList />
      <VideosContainer />
    </div>
  );
};

export default Main;
