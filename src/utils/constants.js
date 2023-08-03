const GOOGLE_API_KEY = "AIzaSyCtrLZ6PaA_UdUuukzhHkrAMp0oMjrIAeU";
const SERP_API_KEY =
  "76c2a4c639d71c617a11959ccbc7d6d47f54ccb8b76f319b7900282864f42482";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SUGGESTIONS_API = `https://serpapi.com/search.json?engine=google_autocomplete&api_key=${SERP_API_KEY}&q=`;
