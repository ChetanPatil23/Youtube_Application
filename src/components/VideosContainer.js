import React, { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";

const VideosContainer = () => {
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <h5>VideosContainer</h5>
    </div>
  );
};

export default VideosContainer;
