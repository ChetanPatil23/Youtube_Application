const GOOGLE_API_KEY = "AIzaSyA_yVcRwfGkgCEWErXFbpeICHq4kfnwlqY";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SUGGESTIONS_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&key=${GOOGLE_API_KEY}&q=`;
export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;
