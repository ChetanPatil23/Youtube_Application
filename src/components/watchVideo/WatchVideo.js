import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../slices/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_GET_SINGLE_VIDEO_API } from "../../utils/constants";
import VideoInfo from "./VideoInfo";
import useFetch from "../../hooks/useFetch";
import Spinner from "../loader/Spinner";
import LiveChat from "../liveChat/LiveChat";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { data: video, isLoading } = useFetch(
    YOUTUBE_GET_SINGLE_VIDEO_API + searchParams.get("v")
  );

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  if (isLoading)
    return (
      <div
        className={`w-[57rem] h-[28rem] flex align-center justify-center m-6`}
      >
        <Spinner />
      </div>
    );

  return (
    <div className="flex">
      <div className="flex flex-col m-6">
        <div className={`w-[57rem] h-[28rem]`}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {video && <VideoInfo video={video[0]} />}
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchVideo;
