import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedText } from "../../slices/searchSlice";
import { sidebarItems } from "../../utils/util";

const SidebarItem = ({ item, index, activeLink, setActiveLink }) => {
  const { icon, label } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemClick = (label) => {
    setActiveLink(label);
    if (label === "Home") {
      dispatch(setSearchedText(""));
      navigate("/")
      return;
    }
    dispatch(setSearchedText(label));
    navigate("/");
    window.scrollTo(0,0);
  };

  return (
    <>
      <li
        className={`flex items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-200 ${
          activeLink === label && "bg-gray-100 font-semibold"
        } `}
        onClick={() => handleItemClick(label)}
      >
        <span className={`${activeLink === label && "text-blue-700"}`}>
          {icon}
        </span>
        <span className="ml-4">{label}</span>
      </li>
      {(index + 1) % 3 == 0 && index + 1 !== sidebarItems.length && (
        <hr className="my-3" />
      )}
    </>
  );
};

export default SidebarItem;
