import React, { useState } from "react";
import { useSelector } from "react-redux";
import { sidebarItems } from "./sidebarList";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.app);
  const [activeLink, setActiveLink] = useState("Home");
  if (!isMenuOpen) return;

  return (
    <div
      className="p-4 w-60 fixed top-16 h-screen left-0 bg-white overflow-y-hidden hover:overflow-y-auto"
      style={{ maxHeight: "560px" }}
    >
      <ul className="pb-5">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            index={index}
            item={item}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
