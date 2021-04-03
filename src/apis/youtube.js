import axios from "axios";

const KEY = "AIzaSyDOfUhjtuRfwdNJKQycz8MJBGcocQyo8qI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY,
  },
});
