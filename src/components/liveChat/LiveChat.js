import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { BsChevronDown, BsThreeDotsVertical } from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../slices/chatSlice";
import { generateRandomNameWithText } from "../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.chat);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    //API Polling
    const intervalId = setInterval(() => {
      dispatch(addMessage(generateRandomNameWithText()));
    }, 1200);
    return () => clearInterval(intervalId);
  }, []);

  const sendMessage = () => {
    if (liveMessage) {
      dispatch(addMessage({ name: "Chetan Patil", text: liveMessage }));
      setLiveMessage("");
    }
  };

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
      <form
        className="flex justify-between items-center border border-t-slate-300 border-x-0 border-b-0 rounded-b-lg px-5 py-2"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          type="text"
          placeholder="Send Message..."
          className="w-72 px-2 py-1 focus:outline-none"
          onChange={(e) => setLiveMessage(e.target.value)}
          value={liveMessage}
        />
        <RiSendPlane2Fill
          className={`text-lg hover:cursor-pointer ${
            liveMessage ? "text-blue-600" : "text-gray-800"
          }`}
          onClick={sendMessage}
        />
      </form>
    </div>
  );
};

export default LiveChat;
