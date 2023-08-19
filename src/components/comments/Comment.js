import React from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const Comment = ({ comment }) => {
  const { name, text, replies } = comment;
  return (
    <div className="flex my-2 p-2">
      <img
        className="h-8 mr-5 my-1"
        alt="user_icon"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      />
      <div>
        <div className="ml-2">
          <h2 className="font-semibold">{name}</h2>
          <h3 className="text-md">{text}</h3>
        </div>
        <div className="flex my-1 items-center">
          <span className="text-lg hover:bg-slate-300 hover:rounded-full p-2 cursor-pointer">
            <BiLike />
          </span>
          <span className="text-lg hover:bg-slate-300 hover:rounded-full p-2 cursor-pointer">
            <BiDislike />
          </span>
          <span className="font-medium ml-2 cursor-pointer hover:text-blue-600">
            Reply
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
