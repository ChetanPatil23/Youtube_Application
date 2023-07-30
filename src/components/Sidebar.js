import React from "react";
import { useSelector } from "react-redux";
import { FaHouse } from "react-icons/fa6";
import {
  BsFillLightningChargeFill,
  BsFillAirplaneFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { BiSolidGame } from "react-icons/bi";
import { IoLogoDesignernews, IoLogoHackernews } from "react-icons/io";

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.app);
  if (!isMenuOpen) return;
  return (
    <div className="p-4 w-56">
      <ul className="pb-5">
        <li className="flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200 active:bg-gray-300">
          <FaHouse className="mr-4" /> Home
        </li>
        <li className="flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200">
          <BsFillLightningChargeFill className="mr-4" />
          Shorts
        </li>
        <li className="flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200">
          <BiSolidVideos className="mr-4" />
          Videos
        </li>
      </ul>
      <hr />
      <h1 className="font-medium pt-5 mb-2 pl-2">Subscriptions</h1>
      <ul className="pb-5">
        <li className="flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200">
          <MdOutlineSportsGymnastics className="mr-4" />
          Sports
        </li>
        <li className="flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200">
          <BiSolidGame className="mr-4" />
          Gaming
        </li>
        <li className="flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200">
          <IoLogoDesignernews className="mr-4" />
          News
        </li>
      </ul>
      <hr />
      <h1 className="font-medium pt-5 mb-2 pl-2">Watch Later</h1>
      <ul>
        <li className="flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200">
          <IoLogoHackernews className="mr-4" />
          Sports
        </li>
        <li className="flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200">
          <BsFillAirplaneFill className="mr-4" />
          Gaming
        </li>
        <li className="flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200">
          <BsFillBookmarkFill className="mr-4" />
          News
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
