import React from "react";
import ButtonsList from "./buttonList/ButtonsList";
import VideosContainer from "./videosContainer/VideosContainer";
import { useSelector } from "react-redux";

const Main = () => {
  const { isMenuOpen } = useSelector((state) => state.app);
  return (
    <div className={`col-span-10 p-4 ${isMenuOpen && "ml-60"}`}>
      <ButtonsList />
      <VideosContainer />
    </div>
  );
};

export default Main;
