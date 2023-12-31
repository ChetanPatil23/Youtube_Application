import React, { useEffect, useState } from "react";
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import useFetch from "../../hooks/useFetch";
import VideoShimmer from "../shimmer/VideoShimmer";
import { clearMessages } from "../../slices/chatSlice";

const VideosContainer = () => {
  const dispatch = useDispatch()
  const { searchText } = useSelector((state) => state.search);
  let url = searchText ? YOUTUBE_SEARCH_API + searchText : YOUTUBE_API;
  const { data: videos, isLoading } = useFetch(url);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  useEffect(() => {
    dispatch(clearMessages());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading)
    return (
      <div className="flex flex-wrap" id="videosContainer">
        {Array.from({ length: 12 }).map((_, index) => (
          <VideoShimmer key={index} />
        ))}
      </div>
    );

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
      {videos?.map((video) => (
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
