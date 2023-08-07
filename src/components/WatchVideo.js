import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../slices/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className={`px-6 mt-5 w-[57rem] h-[28rem]`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
