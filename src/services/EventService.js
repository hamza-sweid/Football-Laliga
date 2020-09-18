import axios from "axios";

const apiClient = axios.create({
  //A single Axios instance for our entire app
  baseURL: `http://localhost:3000`, //Base URL for all to call
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }, //For authentication & configuration
  timeout: 3000 //throw error if API call takes more than x secs
});

export default {
  getEvents(perPage, page) {
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + page); //Following baseURL above
  },
  getEvent(event) {
    return apiClient.get("/events/" + event);
  },
  postEvent(event) {
    return apiClient.post("/events", event);
  }
};
