import React, { useEffect, useState } from "react";
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const { searchText } = useSelector((state) => state.search);

  useEffect(() => {
    if (searchText) {
      fetchVideos(YOUTUBE_SEARCH_API + searchText);
      return;
    }
    fetchVideos(YOUTUBE_API);
  }, [searchText]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchVideos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setVideos(data.items);
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage =
      (scrollPosition / (scrollHeight - windowHeight)) * 100;
    setIsScrollVisible(scrollPercentage > 25);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-wrap" id="videosContainer">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          info={video}
          id={typeof video.id !== "object" ? video.id : video.id.videoId}
        />
      ))}
      {isScrollVisible && (
        <BsFillArrowUpCircleFill
          className="fixed bottom-10 right-8 text-3xl hover:text-blue-800 cursor-pointer"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default VideosContainer;
