import { FaHouse } from "react-icons/fa6";
import {
  BsFillLightningChargeFill,
  BsFillAirplaneFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiSolidVideos, BiSolidGame } from "react-icons/bi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoLogoDesignernews, IoLogoHackernews } from "react-icons/io";

export const sidebarItems = [
  { label: "Home", icon: <FaHouse /> },
  {
    label: "Shorts",
    icon: <BsFillLightningChargeFill />,
  },
  { label: "Albums", icon: <BiSolidVideos /> },
  { label: "Nature", icon: <BsFillBookmarkFill /> },
  { label: "Movies", icon: <BiSolidGame /> },
  { label: "Meditation", icon: <IoLogoHackernews /> },
  {
    label: "Fitness",
    icon: <MdOutlineSportsGymnastics />,
  },
  { label: "News", icon: <IoLogoDesignernews /> },
  {
    label: "Trending",
    icon: <BsFillAirplaneFill />,
  },
  { label: "Music", icon: <BsFillBookmarkFill /> },
  { label: "Films", icon: <IoLogoHackernews /> },
  {
    label: "Sports",
    icon: <MdOutlineSportsGymnastics />,
  },
  { label: "Technology", icon: <IoLogoHackernews /> },
  { label: "Gaming", icon: <BiSolidGame /> },
];
