import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedText } from "../slices/searchSlice";
import { sidebarItems } from "../utils/util";

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.app);
  const [activeLink, setActiveLink] = useState("Home");
  if (!isMenuOpen) return;

  const SidebarItem = ({ item, index }) => {
    const { icon, label } = item;
    const dispatch = useDispatch();

    const handleItemClick = (label) => {
      setActiveLink(label);
      if (label === "Home") {
        dispatch(setSearchedText(""));
        window.location.href = "/";
        return;
      }
      dispatch(setSearchedText(label));
    };
    return (
      <>
        <li
          className={`flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200 ${
            activeLink === label && "bg-gray-100 font-semibold"
          } `}
          onClick={() => handleItemClick(label)}
        >
          {icon} <span className="ml-4">{label}</span>
        </li>
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
