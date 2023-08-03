import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => fetchAutoSuggestions(), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const fetchAutoSuggestions = async () => {
    if (searchText) {
      const response = await fetch(YOUTUBE_SUGGESTIONS_API + searchText);
      const data = await fetch(response.json());
      console.log(data.suggestions);
    }
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
        <a href="/">
          <img
            className="h-8 ml-5 cursor-pointer"
            alt="youtube_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="flex col-span-10 justify-center">
        <input
          type="text"
          placeholder="Search"
          className=" w-1/2 px-4 focus:outline-none border border-gray-300 border-r-0 rounded-l-full"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img
          className="h-8 border border-gray-300 rounded-r-full px-4 bg-gray-50 cursor-pointer"
          alt="search_icon"
          src="https://static.thenounproject.com/png/3184147-200.png"
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
