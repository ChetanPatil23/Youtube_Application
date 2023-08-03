import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({ info, id }) => {
  const { isMenuOpen } = useSelector((state) => state.app);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className={`m-3 pb-2 ${isMenuOpen ? "w-80" : "w-96"} group`}>
      <Link to={`/watch?v=${id}`}>
        <img
          className="rounded-lg mb-2 transition-all duration-500 group-hover:rounded-none"
          src={thumbnails.medium.url}
          alt={title}
          width="400"
        />
        <div className="group-hover:rounded-none">
          <h3 className="font-bold">{title}</h3>
          <h3 className="text-slate-500">{channelTitle}</h3>
          <h3 className="text-slate-500">{viewCount} views</h3>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;