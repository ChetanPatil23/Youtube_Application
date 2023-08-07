import React, { useState } from "react";

const VideoInfo = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, channelTitle, description, publishedAt } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <div className="mt-3 w-[57rem]">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div
        className="rounded-lg bg-gray-100 p-2 my-2 cursor-pointer"
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        <span className="font-medium">21 lakh views</span>
        <span className="mx-2 font-medium">19 hours ago</span>
        <p>
          {showFullDescription
            ? description
            : description.slice(0, 200) + "..."}
          <span className="font-medium ml-2">
            {showFullDescription ? "Show Less" : "Show More"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default VideoInfo;
