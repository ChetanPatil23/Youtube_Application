import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="hamburger_icon"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
        />
        <img
          className="h-8 mx-2"
          alt="youtube_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="flex col-span-10 justify-center">
        <input
          type="text"
          placeholder="Search"
          className=" w-1/2 px-4 focus:outline-none border border-gray-300 border-r-0 rounded-l-full"
        />
        <img
          className="h-8 border border-gray-300 rounded-r-full px-4 bg-gray-50"
          alt="search_icon"
          src="https://static.thenounproject.com/png/3184147-200.png"
        />
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user_icon"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </div>
    </div>
  );
};

export default Header;
