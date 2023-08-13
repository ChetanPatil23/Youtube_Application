import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { setCachedResults, setSearchedText } from "../../slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SUGGESTIONS_API } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Suggestions = ({
  searchText,
  setSearchText,
  showSuggestions,
  setShowSuggestions,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const { cachedResults } = useSelector((state) => state.search);
  const dispatch = useDispatch();

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

  const handleSuggestionClick = (suggestion) => {
    navigate("/");
    setSearchText(suggestion);
    dispatch(setSearchedText(suggestion));
    setShowSuggestions(false);
  };

  return suggestions.length > 0 && showSuggestions ? (
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
  ) : (
    <></>
  );
};

export default Suggestions;
