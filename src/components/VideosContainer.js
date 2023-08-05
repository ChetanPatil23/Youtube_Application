import React, { useEffect, useState } from "react";
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const { searchText } = useSelector((state) => state.search);
  console.log(searchText);
  useEffect(() => {
    fetchVideos(YOUTUBE_API);
  }, []);

  useEffect(() => {
    if (searchText) {
      fetchVideos(YOUTUBE_SEARCH_API + searchText);
    }
  }, [searchText]);
  const fetchVideos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          info={video}
          id={typeof video.id !== "object" ? video.id : video.id.videoId}
        />
      ))}
    </div>
  );
};

export default VideosContainer;
