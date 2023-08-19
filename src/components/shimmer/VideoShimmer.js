import React from "react";
import { useSelector } from "react-redux";

const VideoShimmer = ({ watchPage = false }) => {
  const { isMenuOpen } = useSelector((state) => state.app);
  return (
    <div
      className={`rounded-lg bg-gray-300 animate-pulse m-3 pb-2 ${
        watchPage ? "w-[57rem] h-[28rem]" : isMenuOpen ? "w-80" : "w-[25rem]"
      }`}
    >
      <div
        className={`${
          watchPage ? "h-[28rem]" : "h-40"
        } bg-gray-400 mb-5 rounded-tr-lg rounded-tl-lg`}
      ></div>
      <div className="h-4 w-3/4 m-2 bg-gray-400"></div>
      <div className="h-4 w-1/2 m-2 bg-gray-400"></div>
      <div className="h-4 w-1/4 m-2 bg-gray-400"></div>
    </div>
  );
};

export default VideoShimmer;
