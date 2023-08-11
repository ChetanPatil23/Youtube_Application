import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../slices/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_GET_SINGLE_VIDEO_API } from "../../utils/constants";
import VideoInfo from "./VideoInfo";

const WatchVideo = () => {
  const [video, setVideo] = useState(null);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    fetchVideoByID();
  }, [searchParams]);

  const fetchVideoByID = async () => {
    const response = await fetch(
      YOUTUBE_GET_SINGLE_VIDEO_API + searchParams.get("v")
    );
    const data = await response.json();
    setVideo(data.items[0]);
  };

  return (
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
      {video && <VideoInfo video={video} />}
    </div>
  );
};

export default WatchVideo;
