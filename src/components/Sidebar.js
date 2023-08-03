import React from "react";
import { useSelector } from "react-redux";
import { FaHouse } from "react-icons/fa6";
import {
  BsFillLightningChargeFill,
  BsFillAirplaneFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiSolidVideos, BiSolidGame } from "react-icons/bi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoLogoDesignernews, IoLogoHackernews } from "react-icons/io";
import { Link, useMatch } from "react-router-dom";

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.app);
  const sidebarItems = [
    { label: "Home", icon: <FaHouse />, path: "/" },
    {
      label: "Shorts",
      icon: <BsFillLightningChargeFill />,
      path: "/shorts",
    },
    { label: "Videos", icon: <BiSolidVideos />, path: "/videos" },
    {
      label: "Sports",
      icon: <MdOutlineSportsGymnastics />,
      path: "/sports",
    },
    { label: "Gaming", icon: <BiSolidGame />, path: "/gaming" },
    { label: "News", icon: <IoLogoDesignernews />, path: "/news" },
    {
      label: "Trending",
      icon: <BsFillAirplaneFill />,
      path: "/trending",
    },
    { label: "Music", icon: <BsFillBookmarkFill />, path: "/music" },
    { label: "Films", icon: <IoLogoHackernews />, path: "/films" },
    {
      label: "Sports",
      icon: <MdOutlineSportsGymnastics />,
      path: "/sports",
    },
    { label: "Gaming", icon: <BiSolidGame />, path: "/gaming" },
    { label: "News", icon: <IoLogoDesignernews />, path: "/news" },
    { label: "Music", icon: <BsFillBookmarkFill />, path: "/music" },
    { label: "Films", icon: <IoLogoHackernews />, path: "/films" },
  ];

  if (!isMenuOpen) return;

  const SidebarItem = ({ item, index }) => {
    const { path, icon, label } = item;
    const isActive = useMatch(path);
    return (
      <>
        <Link to={path}>
          <li
            className={`flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200 ${
              isActive && "bg-gray-100 font-semibold"
            } `}
          >
            {icon} <span className="ml-4">{label}</span>
          </li>
        </Link>
        {(index + 1) % 3 == 0 && index + 1 !== sidebarItems.length && (
          <hr className="my-3" />
        )}
      </>
    );
  };

  return (
    <div
      className="p-4 w-60 fixed top-16 h-screen left-0 bg-white overflow-y-hidden hover:overflow-y-auto mt-2"
      style={{ maxHeight: "560px" }}
    >
      <ul className="pb-5">
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} index={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
