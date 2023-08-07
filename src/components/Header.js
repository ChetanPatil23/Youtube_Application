import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../slices/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { FiSearch } from "react-icons/fi";
import { setSearchedText } from "../slices/searchSlice";
import { setCachedResults } from "../slices/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { cachedResults } = useSelector((state) => state.search);
  console.log({ cachedResults });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (cachedResults[searchText]) {
      setSuggestions(cachedResults[searchText]);
      return;
    }
    const timer = setTimeout(() => fetchAutoSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const fetchAutoSuggestions = async () => {
    if (searchText) {
      const response = await fetch(YOUTUBE_SUGGESTIONS_API + searchText);
      const data = await response.json();
      setSuggestions(data[1]);
      dispatch(setCachedResults({ [searchText]: data[1] }));
    }
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleEnterPress = (e) => {
    if (e.key === "Enter" && searchText) {
      dispatch(setSearchedText(searchText));
      setShowSuggestions(false);
    }
  };
  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    dispatch(setSearchedText(suggestion));
    setShowSuggestions(false);
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
          }}
        />
        {suggestions.length > 0 && showSuggestions && (
          <div className="bg-white w-[29.3rem] py-2 top-8 absolute left-[12.7rem] rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion, i) => (
                <li
                  className="hover:bg-slate-200 px-6 py-0.5 cursor-pointer flex items-center"
                  key={i}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <FiSearch className="mr-2" /> {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
