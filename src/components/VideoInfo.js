import React, { useState } from "react";
import { formatViews } from "../utils/util";
import { BiLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";

const VideoInfo = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, channelTitle, description, publishedAt } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <div className="mt-3 w-[57rem]">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <span className="font-semibold flex items-center">
            {channelTitle}
            <FiCheckCircle className="ml-2" />
          </span>
          <button className="ml-5 rounded-2xl py-1 px-3 bg-black font-medium text-white">
            Subscribe
          </button>
        </div>
        <div className="flex items-center">
          <button className="rounded-2xl py-1 px-3 bg-gray-100 hover:bg-gray-200 flex items-center font-medium">
            <BiLike className="mr-2" />
            {formatViews(likeCount)}
          </button>
          <button className="flex items-center ml-3 rounded-2xl py-1 px-3 bg-gray-100 hover:bg-gray-200 font-medium">
            <PiShareFat className="mr-2" />
            Share
          </button>
        </div>
      </div>
      <div
        className="rounded-lg bg-gray-100 hover:bg-gray-200 p-2 my-2 cursor-pointer"
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        <span className="font-medium">{formatViews(viewCount)} views</span>
        <span className="mx-2 font-medium">19 hours ago</span>
        {description && (
          <p>
            {showFullDescription
              ? description
              : description.slice(0, 200) + "..."}
            <span className="font-medium ml-2">
              {showFullDescription ? "Show Less" : "Show More"}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoInfo;
