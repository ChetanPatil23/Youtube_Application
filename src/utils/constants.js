import { FaHouse } from "react-icons/fa6";
import {
  BsFillLightningChargeFill,
  BsFillAirplaneFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiSolidVideos, BiSolidGame } from "react-icons/bi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoLogoDesignernews, IoLogoHackernews } from "react-icons/io";

const GOOGLE_API_KEY = "AIzaSyA_yVcRwfGkgCEWErXFbpeICHq4kfnwlqY";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SUGGESTIONS_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&key=${GOOGLE_API_KEY}&q=`;
export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

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
