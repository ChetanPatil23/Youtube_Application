import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../slices/appSlice";
import { setSearchedText } from "../../slices/searchSlice";
import { useNavigate } from "react-router-dom";
import Suggestions from "./Suggestions";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleEnterPress = (e) => {
    if (e.key === "Enter" && searchText) {
      navigate("/");
      dispatch(setSearchedText(searchText));
      setShowSuggestions(false);
    }
  };

  return (
    <div className="grid grid-flow-col py-4 px-6 mb-2 shadow-lg fixed top-0 w-full z-10 bg-white">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="hamburger_icon"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-8 ml-5 cursor-pointer"
          alt="youtube_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          onClick={() => {
            navigate("/");
            toggleMenuHandler();
          }}
        />
      </div>
      <div className="flex col-span-10 justify-center relative">
        <input
          type="text"
          placeholder="Search"
          className=" w-1/2 px-6 focus:outline-none border border-gray-300 border-r-0 rounded-l-full"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleEnterPress}
        />
        <img
          className="h-8 border border-gray-300 rounded-r-full px-4 bg-gray-50 cursor-pointer"
          alt="search_icon"
          src="https://static.thenounproject.com/png/3184147-200.png"
          onClick={() => {
            dispatch(setSearchedText(searchText));
            setShowSuggestions(false);
          }}
        />
        <Suggestions
          searchText={searchText}
          setSearchText={setSearchText}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />
      </div>
      <div className="flex col-span-1 justify-end">
        <img
          className="h-8 mx-2 cursor-pointer"
          alt="user_icon"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </div>
    </div>
  );
};

export default Header;
