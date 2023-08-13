import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCount } from "../../utils/util";

const VideoCard = ({ info, id }) => {
  const { isMenuOpen } = useSelector((state) => state.app);
  //Static viewCount value will be taken if statistics is missing in API
  const { snippet, statistics = { viewCount: "2563337" } } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className={`m-3 pb-2 ${isMenuOpen ? "w-80" : "w-[25rem]"} group`}>
      <Link to={`/watch?v=${id}`}>
        <img
          className={`rounded-lg mb-2 transition-all duration-500 group-hover:rounded-none ${
            isMenuOpen ? "max-h-[11.3rem]" : "h-[14rem]"
          }`}
          src={thumbnails.medium.url}
          alt={title}
          width="400"
        />
        <div className="group-hover:rounded-none">
          <h3 className="font-medium">
            {title.length > 50 ? title.slice(0, 100) + "..." : title}
          </h3>
          <h3 className="text-slate-500">{channelTitle}</h3>
          <h3 className="text-slate-500">
            {formatCount(Number(viewCount))} views
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
