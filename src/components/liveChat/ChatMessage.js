import React from "react";

const ChatMessage = ({ message }) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="h-8 mx-2 cursor-pointer"
        alt="user_icon"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      />
      <span className="font-semibold ml-1 mr-2">{message.name}</span>
      <span>{message.text}</span>
    </div>
  );
};

export default ChatMessage;
