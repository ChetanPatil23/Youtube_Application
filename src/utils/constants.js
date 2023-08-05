import { FaHouse } from "react-icons/fa6";
import {
  BsFillLightningChargeFill,
  BsFillAirplaneFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiSolidVideos, BiSolidGame } from "react-icons/bi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoLogoDesignernews, IoLogoHackernews } from "react-icons/io";

const GOOGLE_API_KEY = "AIzaSyAU6uN0wyuASB2S3i8dcK99OA-6QC58kn0";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SUGGESTIONS_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&key=${GOOGLE_API_KEY}&q=`;
export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

export const sidebarItems = [
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
