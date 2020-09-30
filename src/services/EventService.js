import axios from "axios";

const rapidApi = axios.create({
  baseURL: "https://football98.p.rapidapi.com/liga",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "football98.p.rapidapi.com",
    "x-rapidapi-key": "9670f2d09dmsh124f86b13584964p11ac44jsnc3e1702551f9",
    useQueryString: true
  }
});

const videosApi = axios.create({
  baseURL: "https://free-football-soccer-videos.p.rapidapi.com/",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
    "x-rapidapi-key": "9670f2d09dmsh124f86b13584964p11ac44jsnc3e1702551f9",
    useQueryString: true
  }
});

const myApi = axios.create({
  baseURL: "https://hamza-sweid.github.io/Projects/laliga-news.json"
});

export default {
  getStanding() {
    return rapidApi.get("/squads");
  },
  getLeaders() {
    return rapidApi.get("/scorers");
  },
  getVideos() {
    return videosApi.get("");
  },
  getNews() {
    return myApi.get("");
  }
};
