export const formatCount = (views) => {
  if (views >= 100000) {
    return parseFloat((views / 100000).toFixed(1)) + " lakh";
  } else if (views > 1000) {
    return (views / 1000).toFixed(0) + "K";
  }
  return views;
};

export const buttonList = [
  "All",
  "TED",
  "Motivation",
  "Latest",
  "Funny",
  "Cricket",
  "React",
  "Music",
  "Cooking",
  "Nature",
  "Gaming",
  "Sports",
  "Romantic",
  "Technology",
];
