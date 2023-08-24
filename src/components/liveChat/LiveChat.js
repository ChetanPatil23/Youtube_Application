import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { BsChevronDown, BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../slices/chatSlice";
import { generateRandomNameWithText } from "../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.chat);
  useEffect(() => {
    //API Polling
    const intervalId = setInterval(() => {
      dispatch(addMessage(generateRandomNameWithText()));
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg h-[550px] w-[23rem] my-6">
      <div className="flex items-center justify-between border border-x-0 border-t-0 border-b-slate-300 px-5 py-[0.65rem]">
        <div className="flex items-center">
          <span className="font-semibold">Live Chat</span>
          <BsChevronDown className="ml-2" />
        </div>
        <span>
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className=" overflow-auto h-[455px] bg-slate-50 flex flex-col-reverse">
        {messages.map((msg, idx) => (
          <ChatMessage message={msg} />
        ))}
      </div>
      <div className="border border-t-slate-300 border-x-0 border-b-0 rounded-b-lg px-5 py-2">
        <h2 className="font-semibold">Chat Section</h2>
      </div>
    </div>
  );
};

export default LiveChat;
