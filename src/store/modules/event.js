import EventService from "@/services/EventService.js";
import axios from "axios";

export const namespaced = true;

export const state = {
  events: [],
  event: {},
  eventsTotal: 0,
  perPage: 3,
  datas: [],
  scorers: [],
  videos: [],
  league: "liga",
  isLoading: false
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
  SET_API(state, datas) {
    state.datas = datas;
  },
  SET_SCORERS(state, scorers) {
    state.scorers = scorers;
  },
  SET_VIDEOS(state, videos) {
    state.videos = videos;
  }
};

export const actions = {
  createEvent({ commit /*only gives us access to local*/, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit("ADD_EVENT", event);
        const notification = {
          type: "success",
          message: "Your event has been created"
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: "There was a problem fetching the events" + error.message
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
        throw error;
      });
  },
  fetchEvents({ commit, dispatch, state }, { page }) {
    return EventService.getEvents(state.perPage, page)
      .then((response) => {
        commit("SET_EVENTS", response.data);
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: "There was a problem fetching the events" + error.message
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      });
  },
  fetchEvent({ commit }, id) {
    // var event = getters.getEventById(id);

    // if (event) {
    //   commit("SET_EVENT", event);
    // } else {
    return EventService.getEvent(id) // we put 'return' so 'then' in 'router.js' can works
      .then((response) => {
        commit("SET_EVENT", response.data, event);
        return event, response.data;
      });
  },
  getData({ commit, dispatch, state }) {
    axios({
      method: "GET",
      url: "https://football98.p.rapidapi.com/" + state.league + "/squads",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "football98.p.rapidapi.com",
        "x-rapidapi-key": "9670f2d09dmsh124f86b13584964p11ac44jsnc3e1702551f9",
        useQueryString: true
      }
      // timeout: 6000
    })
      .then((response) => {
        commit("SET_API", response.data);
      })
      .catch(() => {
        const notification = {
          type: "error",
          message:
            "There was a problem fetching the events, please refresh the page"
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      });
  },
  getScorers({ commit, dispatch, state }) {
    axios({
      method: "GET",
      url: "https://football98.p.rapidapi.com/" + state.league + "/scorers",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "football98.p.rapidapi.com",
        "x-rapidapi-key": "9670f2d09dmsh124f86b13584964p11ac44jsnc3e1702551f9",
        useQueryString: true
      }
      // timeout: 6000
    })
      .then((response) => {
        commit("SET_SCORERS", response.data);
        // state.isLoading = false;
      })
      .catch(() => {
        const notification = {
          type: "error",
          message:
            "There was a problem fetching the events, please refresh the page"
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      });
  },
  getVideos({ dispatch, commit }) {
    axios({
      method: "GET",
      url: "https://free-football-soccer-videos.p.rapidapi.com/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
        "x-rapidapi-key": "9670f2d09dmsh124f86b13584964p11ac44jsnc3e1702551f9",
        useQueryString: true
      }
    })
      .then((response) => {
        let videosFilter = response.data.filter(
          (e) => e.competition.name == "SPAIN: La Liga"
        );
        commit("SET_VIDEOS", videosFilter);
      })
      .catch(() => {
        const notification = {
          type: "error",
          message:
            "There was a problem fetching the events, please refresh the page"
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      });
  }
};

export const getters = {
  getEventById: (state) => (id) => {
    return state.event.find((event) => event.id === id);
  },
  x: (state) => {
    return state.events.length;
  }
};
